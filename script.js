let team = ["Nicolas", "Youssef", "Edouard", "Aurore", "Jacinto", "Youri", "Anna", "Obaida"];
let team2 = team.sort(function ()
{
    return Math.random() - 0.5;
})
const elemOl = document.querySelector("ol").lastElementChild
const randomN = (min, max) =>
{
    let n;
    n = Math.round(Math.random() * (max - min) + min);
    return n;
}
const randomColor = () =>
{
    return `rgb(${randomN(0, 255)},${randomN(0, 255)},${randomN(0, 255)})`
}
// créer un element elme, du texte inText, le place a la fin de elemBef avec un background si ranBG est true
const addElem = (elem, elemBef, inText, ranBG) =>
{
    // create a new element
    const newElem = document.createElement(elem);

    // and give it some content 
    const newContent = document.createTextNode(inText);

    // add the text node to the newly created div
    newElem.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentEl = document.querySelector(elemBef);
    currentEl.insertBefore(newElem, currentEl.lastElementChild);

    // rajoute un BG aléatoire si demandé
    if (ranBG)
    {
        const r = randomN(0,255);
        const g = randomN(0,255);
        const b = randomN(0,255);
        newElem.style.background = `rgb(${r},${g},${b})`;
        newElem.style.color = ((0.3 * r) + (0.59 * g) + (0.11 * b) <= 128) ? '#FFF' : '#000';
    }
}
const putLast = (elem, place) =>
{
    place.insertBefore(elem,place.children[0])
}
putLast(elemOl, document.querySelector('ol'))
const a = document.querySelector('main').children[1];
const b = document.querySelector('main').children[2];
const c = a.querySelector('h2');
const d = b.querySelector('h2');
b.appendChild(c);
a.appendChild(d);
b.remove()


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
