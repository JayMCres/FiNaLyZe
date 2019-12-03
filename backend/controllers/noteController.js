"use strict";

const Favorite = require("../models").Favorite;

const Note = require("../models").Note;

const handleResponse = res => {
  return data => {
    console.log(data);
    res.send(data);
  };
};

const handleError = res => {
  return error => {
    console.log(error);
    res.send(error);
  };
};
exports.listNotes = (req, res) => {
  return Note.findAll()
    .then(notes => {
      res.send(notes);
    })
    .then(handleError(res));
};

exports.addNote = (req, res) => {
  console.log("Note Body", req.body);
  const title = req.body.title;
  const favId = req.body.favId;
  const content = req.body.content;
  const favTicker = req.body.favTicker;
  const favName = req.body.favName;
  const userId = req.body.userId;
  return Note.create({
    title: title,
    favId: favId,
    content: content,
    favTicker: favTicker,
    favName: favName,
    userId: userId
  }).then(newNote => {
    res.json(newNote);
  });
};

exports.editNote = (req, res) => {
  // console.log("Note Edit Body", );
  const title = req.body.updateTitle;
  console.log("title", title);
  const content = req.body.updateBody;
  Note.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(updatedNote => {
      // console.log("FoundNote", updatedNote);
      updatedNote.update({
        title: title,
        content: content
      });
    })
    .then(newNote => {
      console.log(newNote);
      res.json(newNote);
    });
};

exports.getNote = (req, res) => {
  Note.findOne({
    where: {
      id: req.params.id
    }
  }).then(post => {
    res.json(post);
  });
};

exports.deleteNote = (req, res) => {
  return Note.destroy({
    where: { id: req.params.id }
  }).then(handleResponse(res), handleError(res));
};
