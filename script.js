const cal =[];

//grouping event listeners

let buttons = document.querySelector(".entire-cal");

buttons.addEventListener("click",(e)=>{//to get each button's id when clicked
    let target = e.target;
    let targetID = target.id;
    if (targetID.length >0 ){console.log(targetID);}//make sure its not empty string
})

