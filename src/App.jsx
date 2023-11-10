import Card from "./Components/Card";
import './App.css'
import { useState } from "react";
import PlayButton from "./Components/Playbutton";

const getRandomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min)

const playerCard ={
  image: 'http://placekitten.com/120/100?image='+getRandomInt(0,15),
  stats:[{name:'Cutenes かわいさ', value: getRandomInt(1,100)},{ name:'Weight 重さ',value:getRandomInt(1,100)},{name:'Speed スピード', value: getRandomInt(1,100)}]
 
};
const enemyCard ={
  image: 'http://placekitten.com/120/100?image='+getRandomInt(0,15),
  stats:[{name:'Cutenes かわいさ', value: getRandomInt(1,100)},{ name:'Weight 重さ',value: getRandomInt(1,100)},{name:'Speed スピード', value: getRandomInt(1,100)}]
  
};

const createCard = index =>({
  image: 'http://placekitten.com/120/100?image='+ index,
  stats:[{name:'Cutenes かわいさ', value: getRandomInt(1,100)},
          {name:'Weight 重さ',value:getRandomInt(1,100)},
          {name:'Speed スピード', value: getRandomInt(1,10-0)}],
 
  id:crypto.randomUUID()
})

const deck = Array(16).fill(null).map((_,index) => createCard(index));
const half = Math.ceil(deck.length / 2);

const dealCards = () => {
  shuffle(deck);
  return{
    player: deck.slice(0,half),
    opponent: deck.slice(half)
  };

};

function shuffle(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i +1));
    [array[i], array[j]] = [array[j], array[i]];

  }
  return array;
}

export default function app(){
  const [result, setResult] = useState('');
  const[cards, setCards] = useState(dealCards)
  const[gameState, setGameState] = useState('Play')
  const[selectedStat, setSelectedStat] = useState(0);
 

  function compareCards(){



     
 


    const playerStat = cards.player[0].stats[0];
    const opponentStat = cards.opponent[0].stats[0];

   

    if (playerStat.value === opponentStat.value){
      setResult('Draw')
    }
    else if (playerStat.value > opponentStat.value){
      setResult('Win')
    }
    else{
      setResult('Loss')
    }

    setGameState('result');
  }


  function nextRound(){
    setCards(cards =>{
      const playedCards = [{...cards.player[0]}, {...cards.opponent[0]}]
      const player = cards.player.slice(1);
      const opponent = cards.opponent.slice(1);
      if(result === 'Draw'){
        return{
          player,
          opponent
        };
        
      }
      if(result === 'Win'){
        return{
          player: [...player, ...playedCards],
          opponent
        };

      }
      if(result === 'Loss'){
        return{
          player,
          opponent:[...opponent, ...playedCards]
        }
      }
      return cards;

    });
    setGameState('Play');
    setResult('');
  }


  return(
    <>
    <h1>Hello world</h1>
    <div className='game'>
      
      <ul className='card-list'>
          {cards.player.map((pCard, index) =>(
            <li className="card-list-item player" key={pCard.id}>
                <Card card = {index === 0 ? pCard : null}/>

            </li>
          ))}
      </ul>
      
      <div className="center-area">
        <p>{result || 'Press the button'}</p>
        {
          gameState === 'Play'?(
            <PlayButton text={'Play'} handleClick={compareCards}/>
          ) : (
            <PlayButton text={'Next'} handleClick={nextRound}/>
          )
        }
      
      </div>
   
      
      
      <ul className='card-list opponent'>
          {cards.opponent.map(oCard =>(
            <li className="card-list-item opponent" key={oCard.id}>
                <Card card = {oCard}/>

            </li>
          ))}
      </ul>
   
    </div>
    {console.log(dealCards())}
  </>
  );
}
