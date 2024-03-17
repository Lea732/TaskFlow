// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (_, res, next) => {
  try {
    // Fetch all items from the database
    const checklists = await tables.checklist.readAll();

    // Respond with the items in JSON format
    res.json(checklists);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const checklist = await tables.checklist.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (checklist == null) {
      res.sendStatus(404);
    } else {
      res.json(checklist);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const checklistInfos = {
    item: req.body.item,
    title_id: req.body.title_id,
    id: req.params.id,
  };

  try {
    const result = await tables.checklist.update(checklistInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "item introuvable" });
    } else {
      res.json({ msg: "item modifié avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const checklist = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.checklist.create(checklist);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const result = await tables.checklist.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "item introuvable" });
    } else {
      res.json({ msg: "item supprimé avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
