console.log("Hello World")
heading.style.color = "blue"

//for(let button of radioButtons){
  //  button.addEventListener('change', ()=>{
 //       for(let button of radioButtons){
  //          if(button.checked){
   //             content.innerText = button.value
    //        }
     //   }
   // })
//}

button.addEventListener('click', ()=>{
    for(let choice of radioButtons){
        if (choice.checked){
            content.innerHTML = choice.value
        }
    }
})

textInput.addEventListener('input', ()=>{
    content.innerText = textInput.value
})



//addedList.classList.add('toDoItem')

//addedListItem.id = `toDo ${toDo.id}`

//if(toDo.complete === true){
    //addedListItem.classList.add//('complete')
//}

//const orderedList = document.querySelector('ol')
//above todo funct

//orderedList.appendChild('addItem')

//function printAll(arr){
//for(let object of arr){

//}
//}
