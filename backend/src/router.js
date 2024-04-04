const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const checklistControllers = require("./controllers/checklistControllers");
const titleControllers = require("./controllers/titleControllers");

// Route to get a list of items
router.get("/checklist", checklistControllers.browse);
router.get("/title", titleControllers.browse);

// Route to get a specific item by ID
router.get("/checklist/:id", checklistControllers.read);
router.get("/title/:id", titleControllers.read);

// Route to add a new item
router.post("/checklist", checklistControllers.add);
router.post("/title", titleControllers.add);

router.put("/checklist/:id", checklistControllers.edit);
router.put("/title/:id", titleControllers.edit);

router.delete("/checklist/:id", checklistControllers.destroy);

/* ************************************************************************* */

module.exports = router;
