# -To-Do-List-Web-App
A beginner-friendly To-Do List application built using **HTML**, **CSS**, and **Vanilla JavaScript**. Users can add, mark complete, and delete tasks in real-time.

---

## 📌 Features

- ✅ Add new tasks
- ✏️ Mark tasks as completed (strike-through)
- ❌ Delete tasks individually
- 💻 Real-time UI update without page reload

---

## 📁 Project Structure

```
todo-app/
├── index.html       # Webpage structure
├── style.css        # Styling for layout and design
└── script.js        # JavaScript logic for interactivity
```

---

## 🚀 How It Works (Beginner-Friendly)

### HTML (index.html)
- Contains an input box, "Add" button, and a list container (`<ul>`) for tasks.

### CSS (style.css)
- Styles the layout and completed tasks using `.completed` class.
- Includes delete button (`❌`) styles.

### JavaScript (script.js)
- **getElementById**: Accesses HTML elements to interact with.
- **addEventListener('click')**: Adds a task when "Add" is clicked.
- **createElement('li')**: Creates a new list item with task text.
- **classList.toggle('completed')**: Toggles strike-through on click.
- **.remove()**: Deletes the task.
- **stopPropagation()**: Prevents toggling when delete is clicked.

---

## 🧠 Summary of Key JS Concepts

| Line               | Function                    | Why It Matters                       |
|--------------------|-----------------------------|--------------------------------------|
| getElementById     | Access HTML elements        | Control and modify UI from JS        |
| addEventListener   | Run code on user click      | Trigger actions like adding tasks    |
| createElement      | Create new HTML elements    | Dynamically show new tasks           |
| .trim()            | Clean input text            | Avoids empty or space-only entries   |
| classList.toggle   | Add/remove CSS class        | Mark tasks as complete visually      |
| stopPropagation()  | Block event bubbling        | Prevents delete click from toggling  |
| .remove()          | Delete DOM element          | Removes tasks                        |
| appendChild()      | Add elements to page        | Add task and delete button inside UI |

---

### 🚀 [Live Demo] (https://piratekingh.github.io/-To-Do-List-Web-App/) 🌐


## 🛠 Tools Used

- Visual Studio Code
- Live Server extension
- Chrome Developer Tools

---

## 📄 License

Free to use for educational and learning purposes.

---

## 👨‍💻 Author

**Himanshu Dwivedi**

