//access boxs element
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");


let newbtn=document.querySelector("#new");
let wincontainer=document.querySelector(".win-container");
let para=document.querySelector("#win");
//player turn- player x , player 0

let turn0=true; 

// condition for play winning chance
//2-d array
let Winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
];
//when btn was click some perform action

boxes.forEach(function (box){ //normal function with parameter is box.
    box.addEventListener("click",()=>{  //arrow function 

        if(turn0){     //for player 0 turn0===true hai to
            box.innerText="0";
            turn0=false;     //player 0 ki turn end and player x ki turn start
        }else{      //for player x turn0 jab false hai to
            box.innerText="X";    //player x turn
            turn0=true;   //player x turn end and player 0 ki turn start
        }
        //for button ki dissable krne ki liye doubble click pr value change na ho
        box.disabled=true;

        // check who is Winner

        checkWinner();
    });
});

//for disable btn After  Winning
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

// for enable btn
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
};
//Show Who is Winner
const ShowWinner=(winner)=>{
    para.innerText=`Congratulation ,Winner is ${winner}`;
    wincontainer.classList.remove("hide"); //hide is a class 

    //disable btn function call
    disableBox();
}


const checkWinner =()=>{
    for(let pattern of Winpattern){//for boxes position, innerText use for value on the boxes
        let pos1v=boxes[pattern[0]].innerText; //position 1
        let pos2v=boxes[pattern[1]].innerText; // position 2
        let pos3v=boxes[pattern[2]].innerText; //position 3
        
        if(pos1v !="" && pos2v !="" && pos3v !=""){ // check position value id empty
            if(pos1v===pos2v && pos2v===pos3v){   //check position value are equal or not if equal then winner
                console.log("Winner", pos1v);

                //Winner Function call
                ShowWinner(pos1v);
            }

        }
    }
};

//Create function for reset and new btn 
const resetGame=()=>{
    turn0=true;
    enablebox();
    wincontainer.classList.add("hide");
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);