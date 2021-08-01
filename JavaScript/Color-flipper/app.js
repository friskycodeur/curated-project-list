const hexBtn=document.getElementById("hex-btn");
const simpleBtn=document.getElementById("num-btn");
const color=document.querySelector(".color");

const hexDict=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","E"];
const hexNumberDict=[0,1,2,3,4,5,6,7,8,9];

function getRandomNumber(){
    return hexNumberDict[Math.floor(Math.random() * hexNumberDict.length)];
}

function getRandomHex(){
    return hexDict[Math.floor(Math.random() * hexDict.length)];
}

hexBtn.addEventListener("click",() => {
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor+=getRandomHex();
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});


simpleBtn.addEventListener("click",() => {
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor+=getRandomNumber();
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

