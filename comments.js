// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

// Create comments array
let comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.send('Comment added');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  comments[req.params.id] = req.body;
  res.send('Comment updated');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  comments.splice(req.params.id, 1);
  res.send('Comment deleted');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});