
const vire = (aqui) => {
  aqui.classList.add("virar");
};


arrImg = ["🤑", "💩", "🤬", "🙊", "🤪", "🤯",];

let arrRand = arrImg.sort(() => (Math.random() > 0.5)? 2 : -1);


arrImg2 = ["🤑", "💩", "🤬", "🙊", "🤪", "🤯",];

let arrRand2 = arrImg2.sort(() => (Math.random() > 0.5)? 2 : -1);



const constructor = () => {
  document.querySelector(".one1").innerHTML = arrImg[0]
  document.querySelector(".two2").innerHTML = arrImg[1]
  document.querySelector(".tree3").innerHTML = arrImg[2]
  document.querySelector(".four4").innerHTML = arrImg[3]
  document.querySelector(".five5").innerHTML = arrImg[4]
  document.querySelector(".six6").innerHTML = arrImg[5]
  document.querySelector(".seven7").innerHTML = arrImg2[0]
  document.querySelector(".eigth8").innerHTML = arrImg2[1]
  document.querySelector(".nine9").innerHTML = arrImg2[2]
  document.querySelector(".ten10").innerHTML = arrImg2[3]
  document.querySelector(".eleven11").innerHTML = arrImg2[4]
  document.querySelector(".twoelve12").innerHTML = arrImg2[5]
};

constructor()


const manter = () => {
  // if(arrRand.indexOf(2) == arrRand2.indexOf(1)){
  //   alert('dasd')
  // }
}

manter()