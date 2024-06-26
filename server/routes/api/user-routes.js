const router = require("express").Router();

const {
  createUser,
  getSingleUser,
  saveBook,
  saveMovie,
  saveWatchlist,
  removeWatchlist,
  deleteBook,
  deleteMovie,
  login,
} = require("../../controllers/user-controllers");

// Import middleware
const { authMiddleware } = require("../../utils/auth");

// Put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(authMiddleware, saveBook);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

router.route("/books/:bookId").delete(authMiddleware, deleteBook);

router.route("/movies").post(authMiddleware, saveMovie);
router.route("/movies/:movieId").delete(authMiddleware, deleteMovie);

router.route("/watchlist").post(authMiddleware, saveWatchlist);
router.route("/watchlist/:movieId").delete(authMiddleware, removeWatchlist); 

module.exports = router;
