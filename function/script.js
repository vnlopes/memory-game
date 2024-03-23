const vire = (aqui) => {
  aqui.classList.add("virar");
};

arrImg = ["🤑", "💩", "🤪", "💩", "🤑", "🙊", "🤬", "🙊", "🤪", "🤯", "🤬", "🤯",];

let arrRand = arrImg.sort(() => (Math.random() > 0.5)? 2 : -1);


const constructor = () => {
    document.querySelector(".twoelve12").innerHTML = arrImg[0]
    document.querySelector(".one1").innerHTML = arrImg[1]
    document.querySelector(".two2").innerHTML = arrImg[2]
    document.querySelector(".tree3").innerHTML = arrImg[3]
    document.querySelector(".four4").innerHTML = arrImg[4]
    document.querySelector(".five5").innerHTML = arrImg[5]
    document.querySelector(".six6").innerHTML = arrImg[6]
    document.querySelector(".seven7").innerHTML = arrImg[7]
    document.querySelector(".eigth8").innerHTML = arrImg[8]
    document.querySelector(".nine9").innerHTML = arrImg[9]
    document.querySelector(".ten10").innerHTML = arrImg[10]
    document.querySelector(".eleven11").innerHTML = arrImg[11]
};

// constructor()