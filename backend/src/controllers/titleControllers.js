// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (_, res, next) => {
  try {
    // Fetch all items from the database
    const titles = await tables.title.readAll();

    // Respond with the items in JSON format
    res.json(titles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const title = await tables.title.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (title == null) {
      res.sendStatus(404);
    } else {
      res.json(title);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const titleInfos = {
    title: req.body.title,
    id: req.params.id,
  };

  try {
    const result = await tables.title.update(titleInfos);

    res.json({ result, msg: "titre modifié avec succès" });
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const title = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.title.create(title);

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
    const result = await tables.title.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "titre introuvable" });
    } else {
      res.json({ msg: "titre supprimé avec succès" });
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
