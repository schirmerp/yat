


const w = window.innerWidth
const h = window.innerHeight

function roll(max) {
    return (Math.floor(Math.random() * 6) + 1);
}


//build main play area
const board = document.createElement('div');
board.style.minHeight = '50vh'
board.style.minWidth = '70vw'
board.style.border = '5px solid black'
board.className = 'gb'
board.style.display = 'flex'
board.style.alignItems = 'center'
board.style.justifyContent = 'space-around'

document.body.appendChild(board);

const play = document.createElement('button')
play.textContent = 'Roll'
board.appendChild(play);

//build square for dice 
const sqs = (cl) => {
    let box = document.createElement('span');
    box.className = `${cl} unlocked`
    box.id = `${cl}`
    box.style.minWidth = '10vw'
    box.style.minHeight = '20vh'
    box.style.border = '5px solid red'
    box.style.display = 'inline-block'
    board.appendChild(box)

}

for (let i = 0; i < 5; i++) {
    sqs(`box-${i}`)
}
const box1 = document.getElementById('box-0')
const box2 = document.getElementById('box-1')
const box3 = document.getElementById('box-2')
const box4 = document.getElementById('box-3')
const box5 = document.getElementById('box-4')
const box6 = document.getElementById('box-5')
box1.onclick = () => {
    box1.classList.toggle('unlocked')
}
box2.onclick = () => {
    box2.classList.toggle('unlocked')
}
box3.onclick = () => {
    box3.classList.toggle('unlocked')
}
box4.onclick = () => {
    box4.classList.toggle('unlocked')
}
box5.onclick = () => {
    box5.classList.toggle('unlocked')
}

// dice functions with parent parameters
function one(x) {
    let mark = document.querySelector(`.${x}`);
    const diceone = document.createElement('div');
    diceone.className = 'dice first-face';
    diceone.style.transform = 'translate(30%, 30%)';
    const dot = document.createElement('span');
    dot.className = "dot";
    diceone.appendChild(dot);
    mark.appendChild(diceone);
}


function two(x) {
    let mark = document.querySelector(`.${x}`);
    const dicetwo = document.createElement('div');
    dicetwo.className = 'dice second-face';
    dicetwo.style.transform = 'translate(30%, 30%)';
    const dot = document.createElement('span');
    const dot1 = document.createElement('span');
    dot.className = "dot";
    dot1.className = "dot";
    dicetwo.appendChild(dot);
    dicetwo.appendChild(dot1);
    mark.appendChild(dicetwo);
}

function three(x) {
    let mark = document.querySelector(`.${x}`);
    const dicethree = document.createElement('div');
    dicethree.className = 'dice third-face';
    dicethree.style.transform = 'translate(30%, 30%)';
    const dot = document.createElement('span');
    const dot1 = document.createElement('span');
    const dot2 = document.createElement('span');
    dot.className = "dot";
    dot1.className = "dot";
    dot2.className = "dot";
    dicethree.appendChild(dot);
    dicethree.appendChild(dot2);
    dicethree.appendChild(dot1);
    mark.appendChild(dicethree);
}

function four(x) {
    let mark = document.querySelector(`.${x}`);
    const dicefour = document.createElement('div');
    dicefour.className = 'fourth-face dice';
    dicefour.style.transform = 'translate(30%, 30%)';
    const dot = document.createElement('span');
    const dot1 = document.createElement('span');
    const dot2 = document.createElement('span');
    const dot3 = document.createElement('span');
    dot.className = "dot";
    dot1.className = "dot";
    dot2.className = "dot";
    dot3.className = "dot";
    const col = document.createElement('div');
    const col1 = document.createElement('div');
    col.className = "column";
    col1.className = "column";
    dicefour.appendChild(col);
    col.appendChild(dot);
    col.appendChild(dot1);
    dicefour.appendChild(col1);
    col1.appendChild(dot2);
    col1.appendChild(dot3);
    mark.appendChild(dicefour);
}

function five(x) {
    let mark = document.querySelector(`.${x}`);
    const dicefive = document.createElement('div');
    dicefive.className = 'fifth-face dice';
    dicefive.style.transform = 'translate(30%, 30%)';
    const dot = document.createElement('span');
    const dot1 = document.createElement('span');
    const dot2 = document.createElement('span');
    const dot3 = document.createElement('span');
    const dot4 = document.createElement('span');
    dot.className = "dot";
    dot1.className = "dot";
    dot2.className = "dot";
    dot3.className = "dot";
    dot4.className = "dot";
    const col = document.createElement('div');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    col.className = "column";
    col1.className = "column";
    col2.className = "column";
    dicefive.appendChild(col);
    col.appendChild(dot);
    col.appendChild(dot2);
    dicefive.appendChild(col1);
    col1.appendChild(dot4);
    dicefive.appendChild(col2);
    col2.appendChild(dot1);
    col2.appendChild(dot3);
    mark.appendChild(dicefive);
}

function six(x) {
    let mark = document.querySelector(`.${x}`);
    const dicesix = document.createElement('div');
    dicesix.className = 'sixth-face dice';
    dicesix.style.transform = 'translate(30%, 30%)';
    const dot = document.createElement('span');
    const dot1 = document.createElement('span');
    const dot2 = document.createElement('span');
    const dot3 = document.createElement('span');
    const dot4 = document.createElement('span');
    const dot5 = document.createElement('span');
    dot.className = "dot";
    dot1.className = "dot";
    dot2.className = "dot";
    dot3.className = "dot";
    dot4.className = "dot";
    dot5.className = "dot";
    const col = document.createElement('div');
    const col1 = document.createElement('div');
    col.className = "column";
    col1.className = "column";
    dicesix.appendChild(col);
    col.appendChild(dot);
    col.appendChild(dot1);
    col.appendChild(dot4);
    dicesix.appendChild(col1);
    col1.appendChild(dot2);
    col1.appendChild(dot3);
    col1.appendChild(dot5);
    mark.appendChild(dicesix);
}

//dice rolling functionality
play.onclick = () =>{
   dice_roll()
}

const dice_roll = () =>{
    let box = document.querySelectorAll('.unlocked')
    let boxes = [...box]
    boxes.forEach((box)=>{
        const bo = document.getElementById(box.id)
        bo.innerHTML = ""
        let x = roll()
        if (x == 1){
            one(`${box.id}`)
        }
        if (x == 2){
            two(`${box.id}`)
        }
        if (x == 3){
            three(`${box.id}`)
        }
        if (x == 4){
            four(`${box.id}`)
        }
        if (x == 5){
            five(`${box.id}`)
        }
        if (x == 6){
            six(`${box.id}`)
        }
    })
}