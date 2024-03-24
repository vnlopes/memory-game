arrImg = [
  "🤑",
  "💩",
  "🤬",
  "🙊",
  "🤪",
  "🤯",
  "🤑",
  "💩",
  "🤬",
  "🙊",
  "🤪",
  "🤯",
];

let arrRand = arrImg.sort(() => (Math.random() > 0.5 ? 2 : -1));

let cont = 12;

const vire = (aqui) => {
  cont--;

  aqui.classList.add("virar");
  aqui.innerHTML = arrImg[cont];
};

// document.querySelector(".one1").innerHTML
// document.querySelector(".two2").innerHTML
// document.querySelector(".tree3").innerHTML
// document.querySelector(".four4").innerHTML
// document.querySelector(".five5").innerHTML
// document.querySelector(".six6").innerHTML
// document.querySelector(".seven7").innerHTML
// document.querySelector(".eight8").innerHTML
// document.querySelector(".nine9").innerHTML
// document.querySelector(".ten10").innerHTML
// document.querySelector(".eleven11").innerHTML
// document.querySelector(".twoelve12").innerHTML
