import Card from "./Components/Card";
import './App.css'
import { useState } from "react";

const getRandomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min)

const playerCard ={
  image: 'http://placekitten.com/120/100?image='+getRandomInt(0,15),
  stats:[{name:'Cutenes かわいさ', value: getRandomInt(1,100)},{ name:'Weight 重さ',value:getRandomInt(1,100)},{name:'Speed スピード', value: getRandomInt(1,100)}]
 
};
const enemyCard ={
  image: 'http://placekitten.com/120/100?image='+getRandomInt(0,15),
  stats:[{name:'Cutenes かわいさ', value: getRandomInt(1,100)},{ name:'Weight 重さ',value: getRandomInt(1,100)},{name:'Speed スピード', value: getRandomInt(1,100)}]
  
};

const createCaed = index =>({
  image: 'http://placekitten.com/120/100?image='+ index,
  stats:[{name:'Cutenes かわいさ', value: getRandomInt(1,100)},
          {name:'Weight 重さ',value:getRandomInt(1,100)},
          {name:'Speed スピード', value: getRandomInt(1,100)}],
 
  id:crypto.randomUUID()
})


export default function app(){
  const [result, setResult] = useState('');
  function compareCards(){

    const playerStat = playerCard.stats[0];
    const opponentStat = enemyCard.stats[0];

   

    if (playerStat.value === opponentStat.value){
      setResult('Draw')
    }
    else if (playerStat.value > opponentStat.value){
      setResult('Win')
    }
    else{
      setResult('Loss')
    }

    console.log(result)
  }



  return(
    <>
    <h1>Hello world</h1>
    <div className='game'>
    
      
      <Card card = {playerCard}/>
      <div className="center-area">
        <p>{result || 'Press the button'}</p>
            <button onClick={compareCards}type="button">Play</button>
      </div>
   
      
      
      <Card card = {enemyCard}/>
   
    </div>
  </>
  );
}
