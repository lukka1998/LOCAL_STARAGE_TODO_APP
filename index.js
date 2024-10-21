let form = document.getElementById("save")
let display = document.getElementById("text_content")

let number = 0;
form.addEventListener("click" , (event)=>{
    if(document.getElementById("user_task").value.trim() === '' ){
        alert("input is empty")
        return;
    }
    if(localStorage.getItem(`task ${number}`) === document.getElementById("user_task").value ){
        alert("Task is same please change it ")
        return;
    }
    
    number ++;
    const task = document.getElementById("user_task").value
    localStorage.setItem(`task ${number}` , task)
    displaytask(number);

})
 function displaytask(number){
    const storedname = localStorage.getItem(`task ${number}`);
    if(storedname){
        display.innerHTML += `       Task${number}:    ${storedname} <br>`
        
    }

    
 }

//  localStorage.clear()

