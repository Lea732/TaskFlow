const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const checklistControllers = require("./controllers/checklistControllers");

// Route to get a list of items
router.get("/checklists", checklistControllers.browse);

// Route to get a specific item by ID
router.get("/checklists/:id", checklistControllers.read);

// Route to add a new item
router.post("/checklists", checklistControllers.add);

/* ************************************************************************* */

module.exports = router;
