const board = document.getElementById('board');
const box_one = document.getElementById('dice-1');
const box_two = document.getElementById('dice-2');
const box_three = document.getElementById('dice-3');
const box_four = document.getElementById('dice-4');
const box_five = document.getElementById('dice-5');
const boxes = document.querySelectorAll('.box');
const p11 = document.getElementById('p1-1');
const p12 = document.getElementById('p1-2');
const p13 = document.getElementById('p1-3');
const p14 = document.getElementById('p1-4');
const p15 = document.getElementById('p1-5');
const p16 = document.getElementById('p1-6');
const p1b = document.getElementById('p1-b');
const p1tl = document.getElementById('p1-tl');
const p13k = document.getElementById('p1-3k');
const p14k = document.getElementById('p1-4k');
const p1fh = document.getElementById('p1-fh');
const p1ss = document.getElementById('p1-ss');
const p1ls = document.getElementById('p1-ls');
const p1y = document.getElementById('p1-y');
const p1c = document.getElementById('p1-c');
const p1tu = document.getElementById('p1-tu');
const rsts = document.querySelectorAll('.reset')
// const ss = document.getElementById('show-score')
const r = document.getElementById('rolls')
const sr = document.getElementById('show-rolls')
const st = document.getElementById('show-turns')
const score = document.getElementById('score')
const pname = document.getElementById('playerName')
const pnamed = document.getElementById('playerNameDisplay')

const dice_roll = () =>{
    let num = Math.floor(Math.random() * 6) + 1
    return num
}

const p1_name = document.getElementById('p1-name');
const rolling = document.getElementById('roll');

//game objects 
let game = {
    active: false,
    player: ''
}
const track = {
    lower : 0,
    upper : 0,
    total : 0
}
const diceThrow = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
}

box_one.onclick = () => {
    box_one.classList.toggle('locked')
}
box_two.onclick = () => {
    box_two.classList.toggle('locked')
}
box_three.onclick = () => {
    box_three.classList.toggle('locked')
}
box_four.onclick = () => {
    box_four.classList.toggle('locked')
}
box_five.onclick = () => {
    box_five.classList.toggle('locked')
}

//game functions
function roll(){
    
    boxes.forEach((b)=>{
        if(b.classList.contains('locked')){
            console.log(b)
        }
        else{
        let x = dice_roll()
        b.innerHTML = x
        }
    })
    score.innerHTML = game.player.score ? game.player.score : 0
}
function board_reset(){
    boxes.forEach((b)=>{
        if(b.classList.contains('locked')){
        b.classList.remove('locked')
        }
        b.innerHTML = ''
    })
    sr.innerHTML = game.player.rolls ? game.player.rolls : 0
}
function rst_game(){ 
    game.player = ''
    game.active = false
    pnamed.style.display = 'none'
    st.style.display = 'none'
    r.style.display = 'none'
    
    board.style.backgroundColor = 'white'
    rsts.forEach(e => e.innerHTML = '')
}
function end_cut(){
    const message = document.createElement('div')
    const but = document.createElement('button')
    message.style.position = 'fixed'
    message.style.top = '50%'
    message.style.left = '50%'
    message.style.transform = 'translate(-50%, -50%)'
    message.style.height = '50vh'
    message.style.width = '60vh'
    message.style.fontSize = '5vw'
    message.style.zIndex = 10
    message.style.border = "5px solid blue"
    message.style.backgroundColor = "white"
    message.innerHTML = `${game.player.name} \n score: ${game.player.score} \n`
    message.style.textAlign = "center"
    but.textContent = "close"
    but.style = "position:relative;"
    board.appendChild(message)
    message.appendChild(but)
    but.onclick = () => {board.removeChild(message)}
}
function end_game(){
    game.player.rolls = 3
    // alert(game.player.score)
    end_cut()
    game.player.score = 0
    rst_game()
}
function update(){
    // ss.innerHTML = game.player.score
    sr.innerHTML = game.player.rolls
    st.innerHTML = (13 - track.total)
}
function Player(name){
    this.name = name,
    this.active = false,
    this.rolls = 3,
    this.score = 0
}
function active_roll(){
    if (game.player.rolls > 0){
        roll()
        game.player.rolls -= 1
        score.innerHTML = game.player.score
        console.log(game.player.rolls)
    }
    else{
        alert('You need to enter a score!')
    }
    if(three_kind(read())){
        p13k.style.border = "3px solid green"
        p13k.style.backgroundColor = "lightgreen"
    }else{p13k.style.border = "3px solid black";p13k.style.backgroundColor = "white"}
    if(four_kind(read())){
        p14k.style.border = "3px solid green"
        p14k.style.backgroundColor = "lightgreen"
    }else{p14k.style.border = "3px solid black";p14k.style.backgroundColor = "white"}
    if(full_house(read())){
        p1fh.style.border = "3px solid green"
        p1fh.style.backgroundColor = "lightgreen"
    }else{p1fh.style.border = "3px solid black"; p1fh.style.backgroundColor = "white"}
    if(small(read())){
        p1ss.style.border = "3px solid green"
        p1ss.style.backgroundColor = "lightgreen"
    }else{p1ss.style.border = "3px solid black";p1ss.style.backgroundColor = "white"}
    if(large(read())){
        p1ls.style.border = "3px solid green"
        p1ls.style.backgroundColor = "lightgreen"
    }else{p1ls.style.border = "3px solid black";p1ls.style.backgroundColor = "white"}
    if(yatty(read())){
        p1y.style.border = "3px solid green"
        p1y.style.backgroundColor = "lightgreen"
    }else{p1y.style.border = "3px solid black";p1y.style.backgroundColor = "white"}
    update()
}

function game_init() {
    let p1 = ''
    p1 = prompt('Please Eneter a Name')
    let player = new Player(p1)
    game.player = player
    game.active = true
    board.style.backgroundColor = 'lightgreen'
    // ss.style.display = 'inline-block'
    sr.style.display = 'inline-block'
    r.style.display = 'inline-block'
    st.style.display = 'inline-block'
    // ss.innerHTML += game.player.score
    sr.innerHTML = game.player.rolls
    st.innerHTML = (13 -track.total)
    pnamed.style.display = 'inline-block'
    pname.innerHTML = game.player.name

}   
//---- diceThrow reset------
function dtreset(){
    Object.keys(diceThrow).forEach((v)=>{
        diceThrow[v] = 0
    })
 }

function read(){
    let dice = []
    boxes.forEach((b)=>{
       dice.push(parseInt(b.innerHTML))
    })
    return dice
}

// score verifiers 
function three_kind(a){
    dtreset()
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    let three = false
    Object.values(diceThrow).forEach((v)=>{
        if (v > 2){
            three = true
        }
    }) 
    return three
}
function four_kind(a){
    dtreset()
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    let four = false
    Object.values(diceThrow).forEach((v)=>{
        if (v > 3){
            four = true
        }
    }) 
    return four
}
function full_house(a){
    dtreset()
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    const values = Object.values(diceThrow)
    let full = false
    values.forEach((v)=>{
        if (v == 3){
            values.pop(v)
            values.forEach((v)=>{
                if (v == 2){
                    full = true
                }
            })
        }
    })
    return full
}
function small(a){
    // a.forEach((d)=>{
    //     diceThrow[d] += 1
    // })
    const values = a.sort()
    console.log(values)
    let ss = false
    if((values.includes(1) && values.includes(2) && values.includes(3) && values.includes(4)) || (values.includes(2) && values.includes(3) && values.includes(4) && values.includes(5)) || (values.includes(3) && values.includes(4) && values.includes(5) && values.includes(6))){
        ss = true
    }
    return ss
}
function large(a){
    // a.forEach((d)=>{
    //     diceThrow[d] += 1
    // })
    const values = a.sort()
    let ss = true
    let check = 0
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i + 1] - values[i] != 1 ){
            ss = false
        }
    }
    return ss
}
function yatty(a){
    dtreset()
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    const values = a.sort()
    let yat = true
    values.forEach((a)=>{
        if(a != values[0]){
            yat = false
        }
    })
    
    return yat
}

//Score Sheet functions
//write onclick functions for each score card position 
//consider prompting to make score entry official
function ones_click(){
    //write me
    if (p11.innerText == ''|| check == true){
        console.log('add score')
        dtreset()
        read().forEach((d)=>{
            diceThrow[d] += 1
        })
        let total = diceThrow[1] * 1
        if (total == 5){
            game.player.score += 50
        }
        p11.innerText = total
        game.player.score += total
        game.player.rolls = 3
        track.total += 1
        track.lower += total
        board_reset()
        if(track.lower > 62){
            if(p1b.innerText == ''){
            p1b.innerText = '35'
            game.player.score += 35
            }
            else{
                console.log('bonus alread applied')
            }
        }
        if(track.total == 13){
            end_game()    
        }
        check = false
    }
    else{
        alert('already scored ones')
    }
}
function twos_click(){
    //write me\
    if(p12.innerText == '' || check == true){
        let twoscore = 0
        read().forEach((d)=>{
            if (parseInt(d) == 2) {
                twoscore += 2
            }
        })
        p12.innerText = twoscore
        console.log(twoscore)
        game.player.score += twoscore
        game.player.rolls = 3
        track.total += 1
        track.lower += twoscore
        board_reset()
        if(track.lower > 62){
            if(p1b.innerText == ''){
            p1b.innerText = '35'
            game.player.score += 35
            }
            else{
                console.log('bonus alread applied')
            }
        }
        if (twoscore == 10){
            game.player.score += 50
        }
        if(track.total == 13){
            end_game()    
        }
        check = false
    }
    else{
        alert('already scored twos')
    }
}
function threes_click(){
    //write me
    if(p13.innerText == '' || check == true){
        let threescore = 0
        read().forEach((d)=>{
            if (parseInt(d) == 3) {
                threescore += 3
            }
        })
        p13.innerText = threescore
        game.player.score += threescore
        game.player.rolls = 3
        track.total += 1
        track.lower += threescore
        board_reset()
        if(track.lower > 62){
            if(p1b.innerText == ''){
            p1b.innerText = '35'
            game.player.score += 35
            }
            else{
                console.log('bonus alread applied')
            }
        }
        if (threescore == 15){
            game.player.score += 50
        }
        if(track.total == 13){
            end_game()    
        }
        check = false
    }
    else{
        alert('already scored threes')
    }
}
function fours_click(){
    //write me
    if(p14.innerText == '' || check == true){
        let fourscore = 0
        read().forEach((d)=>{
            if (parseInt(d) == 4) {
                fourscore += 4
            }
        })
        p14.innerText = fourscore
        game.player.score += fourscore
        game.player.rolls = 3
        track.total += 1
        track.lower += fourscore
        board_reset()
        if(track.lower > 62){
            if(p1b.innerText == ''){
            p1b.innerText = '35'
            game.player.score += 35
            }
            else{
                console.log('bonus alread applied')
            }
        }
        if (fourscore == 20){
            game.player.score += 50
        }
        if(track.total == 13){
            end_game()    
        }
        check = false
    }
    else{
        alert('already scored twos')
    }
}
function fives_click(){
    //write me
    if(p15.innerText == '' || check == true){
        let fivescore = 0
        read().forEach((d)=>{
            if (parseInt(d) == 5) {
                fivescore += 5
            }
        })
        p15.innerText = fivescore
        game.player.rolls = 3
        game.player.score += fivescore
        track.total += 1
        track.lower += fivescore
        board_reset()
        if(track.lower > 62){
            if(p1b.innerText == ''){
            p1b.innerText = '35'
            game.player.score += 35
            }
            else{
                console.log('bonus alread applied')
            }
        }
        if (fivescore == 25){
            game.player.score += 50
        }
        if(track.total == 13){
            end_game()    
        }
        check = false
    }
    else{
        alert('already scored twos')
    }
}
function sixes_click(){
    //write me
    if(p16.innerText == '' || check == true){
        let sixscore = 0
        read().forEach((d)=>{
            if (parseInt(d) == 6) {
                sixscore += 6
            }
        })
        p16.innerText = sixscore
        game.player.score += sixscore
        game.player.rolls = 3
        track.total += 1
        track.lower += sixscore
        board_reset()
        if(track.lower > 62){
            if(p1b.innerText == ''){
            p1b.innerText = '35'
            game.player.score += 35
            }
            else{
                console.log('bonus alread applied')
            }
        }
        if (sixscore == 30){
            game.player.score += 50
        }
        if(track.total == 13){
            end_game()    
        }
        check = false
    }
    else{
        alert('already scored sixes')
    }
}
function three_kind_click(){
    //write me
    if (p13k.innerText == '' || check == true){
        if (three_kind(read())){
            let tkscore = 0
            if(yatty(read())){
                game.player.score += 50
            }
            read().forEach((d)=>{
                tkscore += d
            })
            p13k.innerText = tkscore
            game.player.rolls = 3
            game.player.score += tkscore
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else{
            var answer = window.confirm("Take 0 points?");
            if (answer) {
                p13k.innerText = 0
                game.player.rolls = 3
                track.total += 1
                board_reset()
                if(track.total == 13){
                    end_game()    
                }
                check = false
            }
            else {
                pass
            }
        }
    }
}
function four_kind_click(){
    //write me
    if (p14k.innerText == '' || check == true){
        if (four_kind(read())){
            let fkscore = 0
            read().forEach((d)=>{
                fkscore += d
            })
            
            p14k.innerText = fkscore
            game.player.rolls = 3
            game.player.score += fkscore
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else{
            var answer = window.confirm("Take 0 points?");
            if (answer) {
                p14k.innerText = 0
                game.player.rolls = 3
                track.total += 1
                board_reset()
                if(track.total == 13){
                    end_game()    
                }
                check = false
            }
            else {
                pass
            }
        }
    }
}
function full_click(){
    //write me
    if (p1fh.innerText == '' || check == true){
        if (full_house(read())){
            
            p1fh.innerText = '25'
            game.player.rolls = 3
            game.player.score += 25
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else{
            var answer = window.confirm("Take 0 points?");
        if (answer) {
            p1fh.innerText = 0
            game.player.rolls = 3
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else {
            pass
        }
        }
    }
}
function small_click(){
    //write me
    if(p1ss.innerText == '' || check == true){
        if(yatty(read())){
            p1ss.innerText = '30'
            game.player.score += 80
            game.player.rolls = 3
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        if(small(read())){
            p1ss.innerText = '30'
            game.player.score += 30
            game.player.rolls = 3
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else{
            var answer = window.confirm("Take 0 points?");
        if (answer) {
            p1ss.innerText = 0
            game.player.rolls = 3
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else {
            pass
        }
        }
    }
    else{
        alert('small straight scored already')
    }
}
function large_click(){
    //write me
    if(p1ls.innerText == '' || check == true){
        if(yatty(read())){
            p1ls.innerText = '40'
            game.player.score += 90
            game.player.rolls = 3
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        if(large(read())){
            p1ls.innerText = '40'
            game.player.score += 40
            game.player.rolls = 3
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else{
            var answer = window.confirm("Take 0 points?");
        if (answer) {
            p1ls.innerText = 0
            game.player.rolls = 3
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else {
            pass
        }
        }
    }
    else{
        alert('large straight scored already')
    }
}
function yat_click(){
    //write me
    if(p1y.innerText == '' || check == true){
        if(yatty(read())){
            p1y.innerText = '50'
            game.player.score += 50
            game.player.rolls = 3
            track.total += 1
            board_reset()
            if(track.total == 13){
                end_game()    
            }
            check = false
        }
        else{
            var answer = window.confirm("Take 0 points?");
            if (answer) {
                p1y.innerText = 0
                game.player.rolls = 3
                track.total += 1
                board_reset()
                if(track.total == 13){
                    end_game()    
                }
                check = false
            }
            else {
                pass
            }
        }
    }
    else{
        alert('yahtzee scored already')
    }
}
function chance_click(){
    //write me
    if(p1c.innerText == '' || check == true){
        let cscore = 0
        read().forEach((d)=>{
            cscore += d
        })
        p1c.innerText = cscore
        game.player.score += cscore
        game.player.rolls = 3
        track.total += 1
        board_reset()
        if(track.total == 13){
            end_game()    
        }
        check = false
    }
    else{
        alert('chance already scored')
    }
}
let check = false

function oneCheck(){
    if (p11.innerText == ''){
        let ans = 0
        read().forEach((d)=>{
            if (d == 1){
                ans += 1
            }
        })
        p11.innerHTML = ans
        check = true
    }
}
function oneOut(){
    if(check === true){
        p11.innerHTML = ''
    }
    check = false
}
function twoCheck(){
    if (p12.innerText == ''){
        let ans = 0
        read().forEach((d)=>{
            if (d == 2){
                ans += 2
            }
        })
        p12.innerHTML = ans
        check = true
    }
}
function twoOut(){
    if(check === true){
        p12.innerHTML = ''
    }
    check = false
}
function threeCheck(){
    if (p13.innerText == ''){
        let ans = 0
        read().forEach((d)=>{
            if (d == 3){
                ans += 3
            }
        })
        p13.innerHTML = ans
        check = true
    }
}
function threeOut(){
    if(check === true){
        p13.innerHTML = ''
    }
    check = false
}
function fourCheck(){
    if (p14.innerText == ''){
        let ans = 0
        read().forEach((d)=>{
            if (d == 4){
                ans += 4
            }
        })
        p14.innerHTML = ans
        check = true
    }
}
function fourOut(){
    if(check === true){
        p14.innerHTML = ''
    }
    check = false
}
function fiveCheck(){
    if (p15.innerText == ''){
        let ans = 0
        read().forEach((d)=>{
            if (d == 5){
                ans += 5
            }
        })
        p15.innerHTML = ans
        check = true
    }
}
function fiveOut(){
    if(check === true){
        p15.innerHTML = ''
    }
    check = false
}
function sixCheck(){
    if (p16.innerText == ''){
        let ans = 0
        read().forEach((d)=>{
            if (d == 6){
                ans += 6
            }
        })
        p16.innerHTML = ans
        check = true
    }
}
function sixOut(){
    if(check === true){
        p16.innerHTML = ''
    }
    check = false
}
function tkCheck(){
    if (p13k.innerText == ''){
        let ans = 0
        if (three_kind(read())){
            read().forEach((d)=>{
                ans += parseInt(d)
            })
            p13k.innerHTML = ans
            check = true
        }
    }
}
function tkOut(){
    if(check === true){
        p13k.innerHTML = ''
    }
    check = false
}
function fkCheck(){
    if (p14k.innerText == ''){
        let ans = 0
        if (four_kind(read())){
            read().forEach((d)=>{
                ans += parseInt(d)
            })
            p14k.innerHTML = ans
            check = true
        }
    }
}
function fkOut(){
    if(check === true){
        p14k.innerHTML = ''
    }
    check = false
}
function fhCheck(){
    if (p1fh.innerText == ''){
        let ans = 0
        if (full_house(read())){
            ans = 25
            p1fh.innerHTML = ans
            check = true
        }
    }
}
function fhOut(){
    
    if(check === true){
        p1fh.innerHTML = ''
    }
    check = false
    
}
function ssCheck(){
    if (p1ss.innerText == ''){
        let ans = 0
        if (small(read())){
            ans = 30
            p1ss.innerHTML = ans
            check = true
        }
    }
}
function ssOut(){
    if(check === true){
        p1ss.innerHTML = ''
    }
    check = false
}
function lsCheck(){
    if (p1ls.innerText == ''){
        let ans = 0
        if (large(read())){
            ans = 40
            p1ls.innerHTML = ans
            check = true
        }
    }
}
function lsOut(){
    if(check === true){
        p1ls.innerHTML = ''
    }
    check = false
}
function cCheck(){
    if (p1c.innerText == ''){
        let ans = 0
        read().forEach((d)=>{
            ans += parseInt(d)
        })
            p1c.innerHTML = ans
            check = true
        
    }
}
function cOut(){
    if(check === true){
        p1c.innerHTML = ''
    }
    check = false
}
function yCheck(){
    if (p1y.innerText == ''){
        let ans = 0
        if (yatty(read())){
            ans = 50
            p1y.innerHTML = ans
            check = true
        }
    }
}
function yOut(){
    if(check === true){
        p1y.innerHTML = ''
    }
    check = false
}