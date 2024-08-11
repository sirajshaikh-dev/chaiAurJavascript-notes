const inputBox=document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const button = document.querySelector('button');

const addTask=()=>{
    if(inputBox.value ==='') alert("You must write something");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);

        let editspan = document.createElement('span');
        editspan.innerHTML = "✎";
        editspan.classList.add("edit");
        li.appendChild(editspan);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){

        if(e.target.classList.contains("edit")){
            editTask(e.target.parentElement);
        }
        else if(e.target.innerHTML === '\u00d7')
        e.target.parentElement.remove();
        saveData();
    }
},false)

button.addEventListener('click',()=>{
    addTask()
})

const saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}

const showTask=()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

const editTask = (taskElement)=>{
    let newValue = prompt("Edit your task:", taskElement.firstChild.textContent);
    if(newValue){
        taskElement.firstChild.textContent = newValue;
        saveData();
    }
}

const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
      element.disabled = bool;
    });
  };