"use strict";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/* ======================================================
   ESM __dirname Setup
====================================================== */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, "tasks.json");

/* ======================================================
   File Service Layer
====================================================== */

const readJSONFile = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, "utf-8");
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Error reading file:", error.message);
    process.exit(1);
  }
};

const writeJSONFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error.message);
    process.exit(1);
  }
};

/* ======================================================
   Task Service Layer
====================================================== */

const getAllTasks = () => readJSONFile(FILE_PATH);

const addTask = (title) => {
  if (!title || typeof title !== "string" || !title.trim()) {
    console.error("Invalid task. Please provide a valid title.");
    return;
  }

  const tasks = getAllTasks();

  const newTask = {
    id: crypto.randomUUID(),
    title: title.trim(),
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  writeJSONFile(FILE_PATH, tasks);

  console.log("Task added successfully.");
};

const listTasks = () => {
  const tasks = getAllTasks();

  if (!tasks.length) {
    console.log("No tasks found.");
    return;
  }

  console.log("\nTasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title}`);
  });
};

const removeTask = (index) => {
  const tasks = getAllTasks();

  if (!Number.isInteger(index) || index < 1 || index > tasks.length) {
    console.error("Invalid task number.");
    return;
  }

  const updatedTasks = tasks.filter((_, i) => i !== index - 1);
  writeJSONFile(FILE_PATH, updatedTasks);

  console.log("Task removed successfully.");
};

/* ======================================================
   CLI Controller Layer
====================================================== */

const commands = {
  add: (arg) => addTask(arg),
  list: () => listTasks(),
  remove: (arg) => removeTask(parseInt(arg, 10)),
};

const main = () => {
  const [, , command, argument] = process.argv;

  if (!commands[command]) {
    console.log(`
Usage:
  node tasks.js add "Task name"
  node tasks.js list
  node tasks.js remove <task_number>
    `);
    return;
  }

  commands[command](argument);
};

main();
