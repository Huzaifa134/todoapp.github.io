console.log("hello world")
let btn = document.querySelector('#btn')

btn.addEventListener("click",(e)=>{
    if(text.value !=""){
        
        
        e.preventDefault()
        let newDiv = document.createElement('div')
    newDiv.classList.add('item')
    newDiv.innerHTML+=`
    <div id="para">
            <p>${text.value}</p>
          </div>
          <div class="item-btn">
            <button id="edit" class="edit">Completed</button>
            <button id="delet" class="delet ">Delete</button>
          </div>
    
    `
    taskparent.appendChild(newDiv)

    taskparent.style.display="block"
    console.log(text.value)
    text.value =""
    }
    else{
        alert("please enter value to proceeed")
    }
})


taskparent.addEventListener("click" , (e)=>{
    console.log("clicked")
    if(e.target.classList.contains('delet')){
        e.target.parentElement.parentElement.remove()
    }
    // e.target.classList.remove()
    // newDiv.classList.remove("item")
})

taskparent.addEventListener("click" , (e)=>{
    console.log("clicked")
    if(e.target.classList.contains('edit')){
        e.target.parentElement.parentElement.classList.toggle('complete')
    }
})
