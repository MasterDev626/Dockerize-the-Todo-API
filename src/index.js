const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const PORT = 3000; // default; in Docker you may want to use process.env.PORT
const DB_NAME = "todoapp";
const COLLECTION = "todos";

let db;

async function connectDb() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  db = client.db(DB_NAME);
  console.log("Connected to MongoDB");
}

// GET /api/todos
app.get("/api/todos", async (req, res) => {
  try {
    const collection = db.collection(COLLECTION);
    const todos = await collection.find({}).sort({ _id: -1 }).toArray();
    res.json(todos.map(({ _id, title, completed }) => ({ id: _id.toString(), title, completed: !!completed })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// POST /api/todos
app.post("/api/todos", async (req, res) => {
  try {
    const { title, completed } = req.body || {};
    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "title (string) is required" });
    }
    const collection = db.collection(COLLECTION);
    const result = await collection.insertOne({
      title: title.trim(),
      completed: !!completed,
      createdAt: new Date(),
    });
    const inserted = await collection.findOne({ _id: result.insertedId });
    res.status(201).json({
      id: inserted._id.toString(),
      title: inserted.title,
      completed: !!inserted.completed,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create todo" });
  }
});

async function start() {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI environment variable is required.");
    process.exit(1);
  }
  await connectDb();
  // Listen on 127.0.0.1 so the app is not reachable from outside the machine.
  // For Docker/containers you will need to bind to 0.0.0.0 (see lab instructions).
  app.listen(PORT, "127.0.0.1", () => {
    console.log(`Todo API listening on http://127.0.0.1:${PORT}`);
  });
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
