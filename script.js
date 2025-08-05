
// Get DOM elements
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
addTaskBtn.addEventListener("click", function(){
    const taskTest = taskInput.value.trim();

    if (taskTest === "")
    {
        alert("Please Enter the Task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskTest;

    // Toggle complete on click
    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    //Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function(e){
        e.stopPropagation();// Prevent toggle on delete
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; //clear input
});

