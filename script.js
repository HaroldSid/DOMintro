// !!!!!!! Tools
const randomN = (min, max) => {
    let n;
    n = Math.round(Math.random() * (max - min) + min);
    return n;
}
const randomColor = () => {
    return `rgb(${randomN(0, 255)},${randomN(0, 255)},${randomN(0, 255)})`
}

// !!!!!!!! 7. DOM-drill

const filmL = document.querySelector("ul");
const films = document.querySelector("ul").children;
const alertF = (e) => {
    if (e.target.classList.contains('important')) {
        alert(`The most important franchise ever, the story of DOM(inic) Toretto's family.It's not about car, it's about family.`)
    }
    else {
        alert(e.target.textContent);
    }

}

const eraseDouble = (els) => {
    let lengthL = films.length;
    for (let i = 0; i < lengthL; i++){
        for (let j = i + 1; j < lengthL; j++){
            if (els.children[i].isEqualNode(els.children[j])) {
                els.children[j].remove();
                lengthL--;
            }
        }
    }
}

const randomSort = () => {
    
}

const keyupE = (e) => {
    if (e.key === 'r') {
        randomSort();
    }
}

eraseDouble(filmL);

for (const film of films) {
    if (film.nodeType === Node.ELEMENT_NODE) {
        if (film.textContent === "Fast and Furious") {
            filmL.insertBefore(film, filmL.children[0]);
            film.classList.add('important');
        }
        film.addEventListener('click', alertF);
    }
}

document.body.addEventListener('keyup', keyupE());

// // !!!!!!! 6. forms

// const inputName = document.querySelector('#firstname');
// const inputAge = document.querySelector('#age');
// const inputPwd = document.querySelector('#pwd');
// const inputPwdC = document.querySelector('#pwd-confirm');
// const selectM = document.querySelector('#toggle-darkmode');
// const showN = document.querySelector('#display-firstname');
// const hardT = document.querySelector('#a-hard-truth');

// const showName = (e) => {
//     showN.textContent = inputName.value;
// }

// const showTrue = (e) => {
//     if (inputAge.value >= 18) {
//         hardT.style.visibility = 'visible';
//     }
//     else {
//         hardT.style.visibility = 'hidden';
//     }
// }

// const verifyPwd = (e) => {
//     if (inputPwd.value.length < 7) {
//         inputPwd.style.backgroundColor = 'red';
//     }
//     else {
//         inputPwd.style.backgroundColor = 'green';
//     }
// }

// const verifyPwdC = (e) => {
//     if (inputPwd.value != inputPwdC.value) {
//         inputPwdC.style.backgroundColor = 'red';
//     }
//     else {
//         inputPwdC.style.backgroundColor = 'green';
//     }
// }

// const changeM = (e) => {
//     if (selectM.value == "dark") {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//     }
//     else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     }
// }

// inputName.addEventListener('keyup', showName);
// inputAge.addEventListener('keyup', showTrue);
// inputAge.addEventListener('change', showTrue);
// inputPwd.addEventListener('keyup', verifyPwd);
// inputPwdC.addEventListener('keyup', verifyPwdC);
// selectM.addEventListener('change', changeM);



// !!!!!!! 5.Events

//Var with the time you open .JS
// const _initTime = Date.now()

// //time between you open .js and now
// const getElapsedTime = () =>
// {
//     return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
// }

// //prompt the second class of e (the square color) and the time after your doc is open
// //add a new square on top with de color aof the square click
// const clickOnSquare = (e) =>
// {
//     const squareColor = e.target.classList[1];
//     const newDiv = document.createElement('div');

//     //add the color and displaysquare class 
//     newDiv.classList.add("displayedsquare", squareColor, "alertColor");
//     newDiv.addEventListener('click', clickOnDisplayS)
//     // add the newly created element into the DOM
//     const currentEl = document.querySelector(".displayedsquare-wrapper");
//     currentEl.append(newDiv);

//     actionLog("square", squareColor);

// }

// const clickOnDisplayS = (e) =>
// {
//     const squareColor = e.target.classList[1];
//     alert(`${squareColor} square pressed`);
// }

// const actionLog = (type, color) =>
// {
//     const elapsedTime = getElapsedTime();
//     const newLi = document.createElement('li');
//     const newContent = document.createTextNode("");;
//     if (type == "square")
//     {
//         newContent.textContent = `[${elapsedTime}] Created a new ${color} square `;
//     }
//     else if (type == "space")
//     {
//         newContent.textContent = `[${elapsedTime}] Created a new ${color} background `;
//     }
//     newLi.append(newContent);
//     const currentUl = document.querySelector("ul");
//     currentUl.append(newLi);
// }

// //fun that laucnh fun according to the key pressed
// const keyPressed = (code) => 
// {
//     const color = randomColor();
//     if (code == "Space")
//     {
//         document.body.style.backgroundColor = color;
//         actionLog("space", color);
//     }
//     else if (code == "KeyL")
//     {
//         const elLi = document.querySelectorAll("li");
//         for (const el of elLi)
//         {
//             el.remove();
//         }
//     }
//     else if (code == "KeyS") {
//         const elLi = document.querySelectorAll(".displayedsquare");
//         for (const el of elLi) {
//             el.remove();
//         }
//     }
// }

// //add the clickonsquare fun at each actionsquare on click
// const actionSquares = document.querySelectorAll('.actionsquare')
// for (let actionSquare of actionSquares) {
//     actionSquare.addEventListener('click', clickOnSquare)
// }

// // Add event listener on keydown
// document.body.addEventListener('keydown', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    
//     //lauch fun to si the key pressed
//     keyPressed(code);

// }, false);


// !!!!!!! First 4 chapters


// let team = ["Nicolas", "Youssef", "Edouard", "Aurore", "Jacinto", "Youri", "Anna", "Obaida"];
// let team2 = team.sort(function ()
// {
//     return Math.random() - 0.5;
// })
// const elemOl = document.querySelector("ol").lastElementChild;
// // créer un element elme, du texte inText, le place a la fin de elemBef avec un background si ranBG est true
// const addElem = (elem, elemBef, inText, ranBG) =>
// {
//     // create a new element
//     const newElem = document.createElement(elem);

//     // and give it some content 
//     const newContent = document.createTextNode(inText);

//     // add the text node to the newly created div
//     newElem.appendChild(newContent);

//     // add the newly created element and its content into the DOM
//     const currentEl = document.querySelector(elemBef);
//     currentEl.insertBefore(newElem, currentEl.lastElementChild);

//     // rajoute un BG aléatoire si demandé
//     if (ranBG)
//     {
//         const r = randomN(0,255);
//         const g = randomN(0,255);
//         const b = randomN(0,255);
//         newElem.style.background = `rgb(${r},${g},${b})`;
//         newElem.style.color = ((0.3 * r) + (0.59 * g) + (0.11 * b) <= 128) ? '#FFF' : '#000';
//     }
// }
// const putLast = (elem, place) =>
// {
//     place.insertBefore(elem,place.children[0])
// }
// putLast(elemOl, document.querySelector('ol'))
// const a = document.querySelector('main').children[1];
// const b = document.querySelector('main').children[2];
// const c = a.querySelector('h2');
// const d = b.querySelector('h2');
// b.appendChild(c);
// a.appendChild(d);
// b.remove()


// for (let i = team.length - 1; i >= 0; i--)
// {
//     const ran = randomN(0, i);
//     addElem("section", "article", team[ran], true);
//     team.splice(ran, 1);

// }
// for (const element of document.body.children)
// {
//     console.log(element);
// }
// for (const element of document.querySelectorAll('.important'))
// {
//     element.title = "This is an important item";
//     console.log(element.title)
// }
// for (const element of document.images)
// {
//     let imp = false;
//     for (const element2 of element.classList)
//     {
//         if (element2 == 'important')
//         {
//             imp = true;
//         }
//     }
//     if (imp == false)
//     {
//         element.style.display = "none";
//     }
// }
// for (const element of document.querySelectorAll('p')) {
//     console.log(element.innerText);
//     if (Number(element.classList.length) > 0)
//     {
//         console.log(element.className);
//     }
//     else
//     {
//         element.style.background = randomColor();
//     }
// }
// document.body.style.backgroundColor = 'rgb(' + randomN(0, 255) + ',' + randomN(0, 255) + ',' + randomN(0, 255) + ')';
