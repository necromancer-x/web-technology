# 📝 Node.js CLI Task Manager (Modern ESM Version)

A clean, industry-style Task Manager built using:

- ES Modules (import/export)
- Layered Architecture
- File-based persistence (JSON)
- UUID-based task IDs
- CLI Command Dispatcher Pattern

---

# 📌 Step 1 — Enable ES Modules

Create a `package.json` file:

```json
{
  "type": "module"
}
```

This allows you to use:

```js
import fs from "fs";
```

instead of:

```js
const fs = require("fs");
```

---

# 📌 Step 2 — Understanding Strict Mode

```js
"use strict";
```

Strict mode:

- Prevents accidental global variables
- Enforces cleaner JavaScript rules
- Makes debugging easier

---

# 📌 Step 3 — Import Required Modules

```js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
```

### Why we use them:

- `fs` → Read & write files
- `path` → Handle file paths safely
- `fileURLToPath` → Convert ES module URL to file path

---

# 📌 Step 4 — Recreate \_\_dirname in ES Modules

In ES Modules, `__dirname` does not exist.

So we recreate it:

```js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, "tasks.json");
```

This ensures:

- Works on Windows
- Works on Linux
- Works on Mac

---

# 📌 Step 5 — File Service Layer (Data Access Layer)

This layer handles only file operations.

## Read JSON File

```js
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
```

### What it does:

- If file doesn't exist → return empty array
- If file exists → read and parse JSON
- If error → exit safely

---

## Write JSON File

```js
const writeJSONFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error.message);
    process.exit(1);
  }
};
```

### Why `null, 2`?

It formats JSON nicely (pretty print).

---

# 📌 Step 6 — Task Service Layer (Business Logic)

This layer contains actual task logic.

---

## Get All Tasks

```js
const getAllTasks = () => readJSONFile(FILE_PATH);
```

---

## Add Task

```js
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
```

### Why this is modern:

- Uses UUID instead of index
- Stores creation timestamp
- Validates input properly

---

## List Tasks

```js
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
```

---

## Remove Task

```js
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
```

### Why use filter instead of splice?

- Functional programming style
- Avoids mutating original array

---

# 📌 Step 7 — CLI Controller Layer

This connects terminal input to business logic.

```js
const commands = {
  add: (arg) => addTask(arg),
  list: () => listTasks(),
  remove: (arg) => removeTask(parseInt(arg, 10)),
};
```

This replaces messy `if-else` chains.

Scalable pattern.

---

# 📌 Step 8 — Main Function

```js
const main = () => {
  const [, , command, argument] = process.argv;

  if (!commands[command]) {
    console.log(`
Usage:
  node app.js add "Task name"
  node app.js list
  node app.js remove <task_number>
    `);
    return;
  }

  commands[command](argument);
};

main();
```

---

# 📌 How to Run

Use:

```bash
node <filename> <arguments>
```

Example:

```bash
node tasks.js add "study nodejs"
```

```bash
node tasks.js list
```

```bash
node tasks.js remove 1
```

---

# 📌 Final Folder Structure

```
project/
│
├── tasks.js
└── tasks.json
```

---

# 📌 Architecture Overview

```
1. File Layer       → Read / Write JSON
2. Service Layer    → Task logic
3. Controller Layer → CLI commands
```

This mirrors real backend architecture patterns.

---

# 🚀 Next Improvements (Advanced)

- Convert to async/await
- Split into folders
- Add TypeScript
- Add proper CLI library (commander)
- Add logging system
- Add unit tests

---
