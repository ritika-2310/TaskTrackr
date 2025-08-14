const input = document.getElementById("input");/*text from input*/
const addbtn = document.getElementById("add");
const tasklist = document.getElementById("tasklist"); 
addbtn.addEventListener("click",()=>{
    const tasktext = input.value.trim();
    if(tasktext !=""){
        const li = document.createElement("li");
        li.innerText = tasktext;
        li.classList.add("task-text"); /*it creates class for css* /*idk what use is this*/
        const donebtn = document.createElement("button");
        donebtn.innerText = "done";
        donebtn.classList.add("donebtn"); /*it creates class for css*/
        const dltbtn = document.createElement("button");
        dltbtn.innerText = "delete";
        dltbtn.classList.add("dltbtn");/*it creates class for css*/
        li.appendChild(donebtn);
        li.appendChild(dltbtn);
        tasklist.appendChild(li); /*tasklist is id of unordered list so to append list item to it*/ 
        input.value = "";
        /*done button logic*/
        donebtn.addEventListener("click",()=>{
            li.classList.toggle("completed");
        });
        /*delete button logic*/
        dltbtn.addEventListener("click",()=>{
            li.remove();
        });
    }
});