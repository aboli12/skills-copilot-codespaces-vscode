// Create web server
// npm install express
// npm install body-parser
// npm install mongoose
// npm install nodemon

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

app.post('/comments', async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

