function rollDice(){
 const numOfdice =  document.getElementById("numOfdice").value;
const diceResult =  document.getElementById("diceResult");
const diceImages =  document.getElementById("diceImages");
const values = [];
const images = [];
for(let i = 0; i < numOfdice; i++){
    const value = Math.floor(Math.random()*6)+1;
   values.push(value);
     images.push(`<img src="imog/${value}.png" alt= "Dice${value}">`);
}
  diceResult.textContent = `dice:${values.join(', ')}`;
  diceImages.innerHTML = images.join('');


}