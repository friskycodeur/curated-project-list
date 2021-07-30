let count =0
let counter=document.getElementById("counter-element")
let savedText=document.getElementById("saved-counts")
function increment() {
    count+=1
    counter.innerHTML=count
}
function save(){
    let countStr=count + " - "
    savedText.textContent+=countStr
    counter.textContent=0
    count=0
}