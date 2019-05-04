const router = require("express").Router();
const snippetsController = require("../../controllers/snippetsController");

// Matches with "/api/snippets"
router
  .route("/")
  .get(snippetsController.findAll)
  .post(snippetsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(snippetsController.findById)
  .put(snippetsController.update)
  .delete(snippetsController.remove);

module.exports = router;
