'use strict';
let i=0
let highscore=localStorage.getItem('highscore');
document.querySelector('.highscore').innerHTML=highscore;
let score=20;
var randomnum= Math.floor(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click',function(){
    let val=document.querySelector('.guess').value;
    console.log(val);
    if(val==randomnum){
        let btn=document.querySelector('body');
        document.querySelector('.message').innerHTML="<h3>🎉  Correct Answer !</h3>";
        btn.style.cssText="background-color:rgb(156, 210, 30)";
        document.querySelector('.number').innerHTML=randomnum;
        if(score>=highscore){
            document.querySelector('.highscore').innerHTML=score;
            highscore=score;
            localStorage.setItem('highscore',score);
        }
    }
    else{
        var ans=val<randomnum?'Too Low !':'Too High !';
        document.querySelector('.message').innerHTML=ans;
        score-=1;
        document.querySelector('.score').innerHTML=score;
    }
});
document.querySelector('.again').addEventListener('click',function(){
    randomnum= Math.floor(Math.random() * 20) + 1;
    score=20;
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.message').innerHTML="Start guessing...";
    let btn=document.querySelector('body');
    btn.style.cssText="background-color:#222";
    document.querySelector('.number').innerHTML='?';
});