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