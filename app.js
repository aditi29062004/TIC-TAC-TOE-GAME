let btns=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msg_container=document.querySelector(".msg-container");
let turnO=true;
let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const disablebtn=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
};
const enablebtn=()=>{
    for(btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
};
const resetGame=()=>{
    turnO=true;
    enablebtn();
    msg_container.classList.add("hide");
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turnO){
            btn.innerText="O";
            turnO=false;
        }else{
            btn.innerText="X";
            turnO=true;
        }
        btn.disabled=true;
        checkWinner();
    });
})
const checkWinner=()=>{
    for(let pattern of winPattern){
        let val1=btns[pattern[0]].innerText;
        let val2=btns[pattern[1]].innerText;
        let val3=btns[pattern[2]].innerText;
        
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                showWinner(val1);
            }
        }
    }
};
const showWinner=(win)=>{
    msg.innerText=`Congratulations!! Winner is ${win}`;
    msg_container.classList.remove("hide");
    disablebtn();
}
reset_btn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);