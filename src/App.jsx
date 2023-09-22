import Card from "./Components/Card";
import './App.css'


const playerCard ={
  image: 'http://placekitten.com/120/100',
  stats:[{name:'Cutenes かわいさ', value: 9},{ name:'Weight 重さ',value: 20},{name:'Speed スピード', value: 200}]
  //stats2:[{name:'Weight 重さ', value: 20}]
};
const enemyCard ={
  image: 'http://placekitten.com/120/100?image=2',
  stats:[{name:'Cutenes かわいさ', value: 23},{ name:'Weight 重さ',value: 4},{name:'Speed スピード', value: 16}]
};


export default function app(){
  return(
  <div>
    
    <h1>Hello world</h1>
    <Card card = {playerCard}/>
    <Card card = {enemyCard}/>
   
  </div>
 
  );
}
