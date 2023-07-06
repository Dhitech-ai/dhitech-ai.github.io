
var valuee = 230;

// fetch(endpoint)
// .then((result) => result.json())
// .then((data) => document.getElementById("ubah").innerHTML = data) 

async function hitapi(){
const red = "https://blynk.cloud/external/api/update?token=G5NHNvM9jFzq9Joci7ypO0dLXwpZkNMm&pin=V1&value="+ r
const blue = "https://blynk.cloud/external/api/update?token=G5NHNvM9jFzq9Joci7ypO0dLXwpZkNMm&pin=V2&value=" + g
const green = "https://blynk.cloud/external/api/update?token=G5NHNvM9jFzq9Joci7ypO0dLXwpZkNMm&pin=V3&value=" + b

    await fetch (red)
    await fetch (blue)
    await fetch (green)
    console.log(r , g, b)
}
var r = 0
var g = 0
var b = 0
async function matii(){
     await fetch("https://blynk.cloud/external/api/update?token=G5NHNvM9jFzq9Joci7ypO0dLXwpZkNMm&pin=V1&value=0")
        await fetch("https://blynk.cloud/external/api/update?token=G5NHNvM9jFzq9Joci7ypO0dLXwpZkNMm&pin=V2&value=0")
        await fetch("https://blynk.cloud/external/api/update?token=G5NHNvM9jFzq9Joci7ypO0dLXwpZkNMm&pin=V3&value=0")
}
function printColor(ev) {
    const color = ev.target.value
     r = parseInt(color.substr(1, 2), 16)
     g = parseInt(color.substr(3, 2), 16)
     b = parseInt(color.substr(5, 2), 16)
    
    console.log([r, g, b])
   hitapi()
}
   
   
const navbarnav = document.querySelector('.navbar-nav');
const gamode = document.querySelector('.colorpick');
const x =  document.querySelector('.warna p');


document.querySelector('#menu').onclick = () => {
    navbarnav.classList.toggle('active');
};
document.querySelector('.switch input').onclick = () => {
    gamode.classList.toggle('active');
  

    if (x.innerHTML === "turn on game mode to choose a color") {
        x.innerHTML = "select to change the light color";
      } else {
        matii()
        x.innerHTML = "turn on game mode to choose a color";
      }

};
