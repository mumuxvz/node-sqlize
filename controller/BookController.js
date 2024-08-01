const BookModel = require("../models/Book");

const createBook = (req, res) => {
    // Call the create function on the Book model, and pass the data that you receive.
 
    const {title, author} = req.body;
    BookModel.create({
        title: title,
        authorName: author,
    })
    .then((result) => {
        return res.json({
              message: "Record created successfully!",
        });
    })
    .catch((error) => {
        console.log(error);
        return res.json({
              message: "Unable to create a record!",
        });
    });
 };
 const getBook = (req, res) => {
    const id = req.query.id;
    BookModel.findByPK( id )
    .then((result) => {
        return res.json(result);
    })
    .catch((error) => {
        console.log(error);
        return res.json({
            message: 'Unable to fetch the record!'
        });
    });
};

const getAllBooks = (req, res) => {
    BookModel.findAll({
       attributes: ["id", "title", "author"],
    })
       .then((result) => {
          return res.json(result);
       })
       .catch((error) => {
          console.log(error);
          return res.json({
             message: "Unable to fetch records!",
          });
       });
 };
 
 const editBook = (req, res) => {
    BookModel.update(
       {
          title: req.body.title, // updated title
       },
       {
          where: {
             id: req.body.id,
          },
       }
    )
       .then((result) => {
          return res.json(result);
       })
       .catch((error) => {
          console.log(error);
          return res.json({
             message: "Unable to update the record!",
          });
       });
 };
 
 const deleteBook = (req, res) => {
    BookModel.destroy({
       where: {
          id: req.query.id,
       },
    })
       .then((result) => {
          return res.json(result);
       })
       .catch((error) => {
          console.log(error);
          return res.json({
             message: "Unable to delete the record!",
          });
       });
 };
 

module.exports = { createBook, getAllBooks, getBook, editBook, deleteBook };
