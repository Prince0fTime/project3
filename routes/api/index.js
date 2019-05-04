const router = require("express").Router();
const snippetRoutes = require("./snippets");

// Book routes
router.use("/snippets", snippetRoutes);

module.exports = router;
