const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const { Schema } = mongoose;
const courseSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});
const Courses = mongoose.model("courses", courseSchema);
app.use(cors());
app.use(bodyParser.json());
app.get("/courses", (req, res) => {
  Courses.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    }
  });
});
app.get(`courses/:id`, (req, res) => {
  const { id } = req.params;
  Courses.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
});
app.delete(`courses/:id`, (req, res) => {
  const { id } = req.params;
  Courses.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.send("succesfully deleted");
    }
  });
});

app.post("/courses/", (req, res) => {
  let course = new Courses({
    name: req.body.name,
    url: req.body.url,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });

  course.save();
  res.send({ message: "SUCCESS" });
});
mongoose.connect(
  "mongodb+srv://AliyevParvin:pervin2003@cluster0.msopybu.mongodb.net/?retryWrites=true&w=majority"
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
