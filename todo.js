const input_box=document.getElementById("input-box");
const list_Container=document.getElementById("list-container");
function addTask(){
    if(input_box.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input_box.value;
        list_Container.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
    }
    input_box.value= " ";
}
list_Container.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
saveData();
} ,false);
function saveData(){
    localStorage.setItem("data",list_Container.innerHTML);
}
function showTask(){
list_Container.innerHTML=localStorage.getItem("data");
}
showTask();