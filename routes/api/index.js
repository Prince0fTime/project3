const router = require("express").Router();
const snippetRoutes = require("./snippets");

// Snippet routes
router.use("/snippets", snippetRoutes);

module.exports = router;
