const router = require("express").Router();
const { notes } = require("../../db/db.json");
const fs = require("fs");
const path = require("path");


function createNewNote(body, noteArray) {
  const note = body;
  if (body) {
  noteArray.push(note);
  }
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: noteArray }, null, 2)
  );

  return note
};

function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false
  }
  return true
};

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  // id will be based on the next array index and added to the dtabase whatever it may be

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }

});

router.delete("/notes/:id", function (req, res) {
  let id = req.params.id;

  if (notes[id].id == id) {
    notes.splice(id, 1);
  } else {
    res.status(400).send("Note ID cannot be found!");
  }

  let no = 0;
  function assignNo (note) {
      note.id = no.toString();
      no += 1;
  }
  notes.forEach(assignNo);
  res.json(true);
});

module.exports = router;























