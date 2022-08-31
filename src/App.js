import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  Rock: {
    name: "Rock",
    img: "https://multiplayer.net-cdn.it/thumbs/images/2022/06/02/dwaynejohnsoninte_3685353_jpg_750x400_crop_q85.jpg"
  },
  Scissors: {
    name: "Scissors",
    img: "http://db.kookje.co.kr/news2000/photo/2019/1224/L20191224.99099011181i1.jpg"
  },
  Paper: {
    name:"Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("")
  const play = (userChoice) =>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if(user.name == computer.name){
      return "tie"
    } else if(user.name == "Rock") return computer.name == "Scissors" ? "Win" : "Lose"
      else if(user.name == "Scissors") return computer.name == "Paper" ? "Win" : "Lose"
      else if(user.name == "Paper") return computer.name == "Rock" ? "Win" : "Lose"
  };
    
  
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 key값을 배열로 만드는 함수
    console.log("itemArray", itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="you" item = {userSelect} result={result}/>
        <Box title="computer" item={computerSelect} result={result}/> 
      </div>
      <div className="main">
        <button onClick={ () => play("Rock")}>rock</button>
        <button onClick={ () => play("Scissors")}>scissors</button>
        <button onClick={ () => play("Paper")}>paper</button>
      </div>
    </div>
  );
}

export default App;
