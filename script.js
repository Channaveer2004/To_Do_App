function addToDo() {
    var inputtext = document.getElementById("input");
    if (inputtext.value === "") {
        alert("Add Task !");
    }

    else {
        const addTask = document.querySelector(".customdiv ");
        const clone = addTask.cloneNode(true);
        clone.querySelector(".taskdes").innerHTML = inputtext.value;
        clone.style.textTransform = "uppercase"
        document.querySelector(".searchbar").appendChild(clone);
    }
    inputtext.value = "";
    savedata();
    // document.querySelector(".listPopup").style.display="contents"
}

function removetask(element) {
    const parentdiv = element.closest(".customdiv")
    if (parentdiv) {
        parentdiv.remove();
    }
    savedata();
}

function done(element) {
    const donetask = element.closest('.customdiv');
    const taskDescription = donetask.querySelector('.taskdes');

    if (taskDescription.style.textDecoration === "line-through") {
        taskDescription.style.textDecoration = "";

    } else {
        taskDescription.style.textDecoration = "line-through";
    }
    element.style.backgroundColor = element.style.backgroundColor === 'blue' ? 'aliceblue' : 'blue';
}
savedata();

function savedata() {
    const customdiv = document.querySelector(".customdiv");
    localStorage.setItem("data", customdiv.innerHTML);
}

function showtask(){
    customdiv.innerHTML = localStorage.getItem("data");
}
showtask();

/*

addToDo() function:

This function is called when a new task is added.
It first retrieves the input text from an HTML element with the ID "input."
Checks if the input is empty, and if so, displays an alert to add a task.
If the input is not empty, it clones a template task from an element with the class "customdiv" and sets its description to the input text in uppercase.
The cloned task is then appended to an element with the class "searchbar."
Finally, the input is cleared, and the savedata() function is called to update the data in local storage.
removetask(element) function:

This function is called when a task needs to be removed.
It takes an element as a parameter (presumably a button within a task).
Finds the closest parent with the class "customdiv" and removes it from the DOM.
Calls the savedata() function to update the data in local storage.
done(element) function:

This function is called when a task is marked as done.
Finds the closest parent with the class "customdiv."
Toggles the text decoration of the task description between none and "line-through."
Toggles the background color of the element between 'blue' and 'aliceblue.'
This function also calls the savedata() function to update the data in local storage.
savedata() function:

Saves the HTML content of an element with the class "customdiv" to local storage using localStorage.setItem("data", customdiv.innerHTML).
showtask() function:

Retrieves the saved data from local storage and sets the HTML content of an element with the class "customdiv" to this saved data.
A few notes:

It seems that customdiv is referenced in the showtask() function without being defined within that function. It might be a global variable or should be defined within the function for clarity.
The addToDo() function references a class "customdiv " (with a space at the end) and the querySelector method. Ensure that the class is correctly defined in your HTML, and the extra space is intentional.
There's a commented-out line related to a class "listPopup" in the addToDo() function, which could be uncommented or removed based on your requirements.
*/


