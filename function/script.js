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
  aqui.style = 'border: dashed 2px #0066ff8a'

  aqui.disabled = true

  if(cont != 0){
    cont--
  } else{
    vire = null
  }


  aqui.classList.add("virar");
  aqui.innerHTML = arrImg[cont];
};
