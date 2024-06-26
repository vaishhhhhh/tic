let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector(".reset");
let msg = document.getElementById('msg');
let msgContainer = document.querySelector("msg-container")
let turn0 = "true";

const winPatterns =[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
]
const reset =() => {
    turn0 = true;
    enableBoxes();
    msg.innerText = " ";
}
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
     if(turn0)
     {
        box.innerText = "O";
        turn0 =false;
     }
     else{
        box.innerText = "X"
        turn0 = true;
     }
     box.disabled = true;

     checkWinner();
    })
})

const disableBoxes=() =>{
for(let box of boxes) {
    box.disabled = true;
}
}

const enableBoxes=() =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner =(winner) =>{
        msg.innerText = `winner is ${winner}`;
        disableBoxes();  
}
const checkWinner=()=>{
 for (let pattern of winPatterns){
      let pos1Val =  boxes[pattern[0]].innerText;
      let pos2Val =  boxes[pattern[1]].innerText;
      let pos3Val =  boxes[pattern[2]].innerText;

      if (pos1Val != "" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
          else 
           msg.innerText = "MATCH IS DRAW";
      }
} 
}

restBtn.addEventListener("click", reset);
