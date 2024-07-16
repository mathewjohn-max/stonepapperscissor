let score = JSON.parse(localStorage.getItem('score'));
            
if(score === null){
    score ={
    win:0,
    lose:0,
    tie:0
    }
}

let statuss = false;
let intervals;

let button = false;
function resetScore(){
    
    if(!button){
        document.querySelector('.js-confirmation')
         .innerHTML=`Are you sure you want to reset score?
                     <button class='js-yes-button' onclick="
                     score.win=0
                     score.lose=0
                     score.tie=0
                     localStorage.clear(score);
                     document.querySelector('.js-confirmation')
         .innerHTML='';
                     ">Yes</button>
                     <button class='js-no-button' onclick="
                     document.querySelector('.js-confirmation')
         .innerHTML='';
                     ">No</button>`;
        button=true;             
    }
    else{
        document.querySelector('.js-confirmation')
         .innerHTML='';
         button=false;
    }
    
}


function autoplay(){
    if(!statuss){
        intervals = setInterval(() => {
            const computer = pickComparingValue();
            const player = playerValue();
            comparingValue(player,computer);
            document.querySelector('.js-autoplay').innerHTML='Stop playing';
        },1000);
        statuss = true;
        
    }
    else {
        clearInterval(intervals);
        statuss = false;
        document.querySelector('.js-autoplay').innerHTML='Auto-play';
    }
};

    document.querySelector('.js-stone-button')
    .addEventListener('click',() => {
        computerValue = pickComparingValue();
        comparingValue('stone',computerValue);
    });

    document.querySelector('.js-papper-button')
    .addEventListener('click',() => {
        computerValue = pickComparingValue();
        comparingValue('papper',computerValue);
    });

    document.querySelector('.js-scissors-button')
    .addEventListener('click',() => {
        computerValue = pickComparingValue();
        comparingValue('scissors',computerValue);
    });

    document.querySelector('.js-autoplay').innerHTML='Auto-play';
    document.querySelector('.js-autoplay-button')
    .addEventListener('click',() => {
        autoplay();
        
    });

    document.querySelector('.js-reset-button')
    .addEventListener('click',() => {
        resetScore();
    });

    document.body
    .addEventListener('keydown',() => {
        resetScore();
    });

    document.body
    .addEventListener('keydown',(event) => {
        if(event.key === 'a'){
            autoplay();
        }
    });

    document.body
        .addEventListener('keydown',(event) => {
            if(event.key === 'r'){
                computerValue = pickComparingValue()
                comparingValue('stone',computerValue)
            }
            else if(event.key === 'p'){
                computerValue = pickComparingValue()
                comparingValue('papper',computerValue)
            }
            else if(event.key ==='s'){
                computerValue = pickComparingValue()
                comparingValue('scissors',computerValue)
            }
        });

    
function comparingValue(playerMove,computerValue){
let result='';
if( playerMove ==='scissors'){
if(computerValue ==='scissors'){
    result='Tie';
}
else if(computerValue ==='stone'){
    result='You Lose';
}
else if(computerValue ==='papper'){
    result='You Win';
}
}

else if(playerMove ==='papper'){
    if(computerValue ==='papper'){
    result='Tie';
}
else if(computerValue ==='scissors'){
    result='You Lose';
}
else if(computerValue ==='stone'){
    result='You Win';
}
}
else if(playerMove ==='stone'){
    if(computerValue ==='stone'){
    result='Tie';
}
else if(computerValue ==='scissors'){
    result='You Lose';
}
else if(computerValue ==='papper'){
    result='You Win';
}
}

if(result === 'You Win'){
    score.win++;
}
else if(result === 'You Lose'){
    score.lose++;
}
else if(result === 'Tie'){
    score.tie++;
}
localStorage.setItem('score',JSON.stringify(score));

/* alert(`You Choose ${playerMove}.Computer choose ${computerValue}.So ${result}.
Wins ${score.win} Loses ${score.lose} Tie ${score.tie}`)*/

document.querySelector('.js-versus').innerHTML=`${result}`;
document.querySelector('.js-score').innerHTML= `Wins ${score.win} Loses ${score.lose} Tie ${score.tie}`;
console.log(score.win);
document.querySelector('.js-yourResult').innerHTML= `You
<img src="${playerMove}-imoji.png" class="imoji-setup">
<img src="${computerValue}-imoji.png" class="imoji-setup">
Computer`;

}

function pickComparingValue()
{  const randomNumber=Math.random();

    let computerValue='';

if(randomNumber>=0 && randomNumber<1/3){
computerValue='stone';
}
else if(randomNumber>=1/3 && randomNumber<1/2){
computerValue='papper';
}
else if(randomNumber>=1/2 && randomNumber<1){
computerValue='scissors';
}
console.log(computerValue);
return computerValue;
}

function playerValue()
{  const randomNumber=Math.random();

    let computerValue='';

if(randomNumber>=0 && randomNumber<1/3){
computerValue='scissors';
}
else if(randomNumber>=1/3 && randomNumber<1/2){
computerValue='stone';
}
else if(randomNumber>=1/2 && randomNumber<1){
computerValue='papper';
}
console.log(computerValue);
return computerValue;
}




