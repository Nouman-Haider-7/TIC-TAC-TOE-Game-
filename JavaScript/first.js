let boxes=document.querySelectorAll(".box");
let resetbt=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let bariO=true;

let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    let bariO=true;
    enableBtns();
     msgContainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(bariO){
            box.innerText="O";
            bariO=false;
        }
        else{
            box.innerText="X";
            bariO=true; 
        }
        box.disabled=true;
        check();
    });
});
const disableBtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtns=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText = `"${winner}" is Winner`;
    msgContainer.classList.remove("hide");
    disableBtns();
}
const check=()=>{
    for(let pattern of arr){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
}
newGamebtn.addEventListener("click",resetGame);
resetbt.addEventListener("click",resetGame)