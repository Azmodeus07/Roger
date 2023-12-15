let userMove ='';
let comMove = '';
let result='';
const game={
    win:0,
    lose:0,
    tie:0,
    play:0,
};

function getComputerMove(){
    const random=Math.random();
    if(random<1/3)
        comMove ='Rock';
    else if(random<2/3)
        comMove='Paper';
    else
        comMove='Scissors';
    return comMove;
}

function evaluateMove(userMove,comMove){
    game.play+=1;
    if((userMove=='Rock' &&comMove=='Scissors')||(userMove=='Paper'&&comMove=='Rock')||(userMove=='Scissors'&&comMove=='Paper')){
        result='win';
        game.win+=1;
    }
    else if((userMove=='Rock' &&comMove=='Paper')||(userMove=='Paper'&&comMove=='Rock')||(userMove=='Scissors'&&comMove=='Rock')){
        result='lose';
        game.lose+=1;
    }
    else{
        result='Tie';
        game.tie+=1;
    }
    return result;
}
