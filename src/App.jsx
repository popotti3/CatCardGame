import Card from "./Components/Card";
import './App.css'


const playerCard ={
  image: 'http://placekitten.com/120/100',
  stats:[{name:'Cutenes かわいさ', value: 9}]

};


export default function app(){
  return(
  <div>
    
    <h1>Hello world</h1>
    <Card/>
  </div>
 
  );
}
