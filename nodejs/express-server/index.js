import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

let classData = [];
let nextId = 1;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/america", (req, res) => {
  res.send("Hello America");
});

app.get("/japan", (req, res) => {
  res.send("Hello Japan");
});

// posting class
app.post("/classes", (req, res) => {
  const { year, section } = req.body;

  if (!year || !section) {
    return res.status(400).json({ error: "Year and section are required" });
  }

  const newClass = {
    id: nextId++,
    year,
    section,
  };

  classData.push(newClass);
  res.status(201).json(newClass);
});

// get all classes
app.get("/classes", (req, res) => {
  res.status(200).json(classData);
});

// get class by id
app.get("/classes/:id", (req, res) => {
  const id = Number(req.params.id);

  const myClass = classData.find((c) => c.id === id);

  if (!myClass) {
    return res.status(404).json({ error: "Class not found" });
  }

  res.status(200).json(myClass);
});

// update class
app.put("/classes/:id", (req, res) => {
  const id = Number(req.params.id);
  const myClass = classData.find((c) => c.id === id);

  if (!myClass) {
    return res.status(404).json({ error: "Class not found" });
  }

  const { year, section } = req.body;

  if (year !== undefined) myClass.year = year;
  if (section !== undefined) myClass.section = section;

  res.status(200).json(myClass);
});

// delete class
app.delete("/classes/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = classData.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Class not found" });
  }

  classData.splice(index, 1);

  // 204 should not return body
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
