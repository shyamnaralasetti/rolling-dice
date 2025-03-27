
function rolldice(){
    const numdice=document.getElementById("textbox").value;
const diceresult=document.getElementById("diceresult");
const diceimages=document.getElementById("diceimage");
let values=[];
let images=[];
    for(let i=0;i< numdice;i++)
    {
        const value=Math.floor(Math.random()*6) + 1;
        values.push(value)
        images.push(`<img src="dice_images/${value}.png">`);
    }
    diceresult.textContent="DICE VALUE-  "+values.join(", ");
    diceimages.innerHTML = images.join("")
}