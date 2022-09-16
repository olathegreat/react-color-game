import React,{useState, useEffect} from 'react';

import "./Style.css";

const App = () => {
  
  const [resultComment, setResultComment] = useState("");
  const [ checker, setChecker] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [scoreAnimation, setScoreAnimation] = useState(false);
  const [trialNumber, setTrialNumber] = useState(0);
  const [next, setNext] = useState(false);

  const [ColorGenerated, setColorGenerated] = useState("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
  const [ColorGenerated1, setColorGenerated1] = useState("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
  const [ColorGenerated2, setColorGenerated2] = useState("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
  const [ColorGenerated3, setColorGenerated3] = useState("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
  const [ColorGenerated4, setColorGenerated4] = useState("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
  const [ColorGenerated5, setColorGenerated5] = useState("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");




  

//   const RandomColor= () =>{
      
     
    
//      console.log(ColorGenerated);
   
//  };
 const colorArraySix = [ColorGenerated, ColorGenerated1, ColorGenerated2,ColorGenerated3,ColorGenerated4,ColorGenerated5];

 const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random()* colorArraySix.length));
  useEffect(() => {
  

    if(checker===true){

    
    setScore(score + 10);
    setResultComment("");
    setColorGenerated(colorArraySix[randomIndex]);
    setColorGenerated1(colorArraySix[randomIndex]);
    setColorGenerated2(colorArraySix[randomIndex]);
    setColorGenerated3(colorArraySix[randomIndex]);
    setColorGenerated4(colorArraySix[randomIndex]);
    setColorGenerated5(colorArraySix[randomIndex]);
    setScoreAnimation(!scoreAnimation);
    }
    
  }, [checker]);

  const clickChecker = (item) =>{

    setTrialNumber(trialNumber + 1)
    
    
    if(item=== colorArraySix[randomIndex]){
       
       setChecker(true);
      
    }else{
      
      setResultComment("Wrong!")
  
    }
    
  
   
  }
const nextBtnClick = () =>{
    setColorGenerated("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
    setColorGenerated1("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
    setColorGenerated2("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
    setColorGenerated3("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
    setColorGenerated4("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
    setColorGenerated5("rgb" + "(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + ")");
  setChecker(false);
  setRandomIndex(Math.floor(Math.random()* colorArraySix.length));
  if(level<10){
    setLevel(level + 1);
  }
 
  
  setResultComment("");
  setScoreAnimation(!scoreAnimation);
}


  


  return (
    <div className='mainContainer'>
      <div className='nav'>
        <div>Level: {level}/10</div>
        <h1>Color Game</h1>
        <div >Score: {score}</div>

      </div>
      <div className='difficulty'>
        <div className='difficultyButton'>Trial Number : {trialNumber}</div>

      </div>
      <div className='gameInfo'>
        <h5>Click on tile that correspond with the code in the pallete</h5>
        <div className='colorPallete'>{colorArraySix[randomIndex]}</div>
        <h2>{resultComment}</h2>
        {
          checker ? <div onClick={()=>{nextBtnClick()}} style={{cursor:"pointer", backgroundColor: colorArraySix[randomIndex] }} className='colorPallete'>NEXT</div>  : "" 
        }
      </div>

          <div className='game-box'>
              <div className='generalRowBlock'>
                <div className='row'>
                      {
                         colorArraySix.map((item, index) =>(
                          <div className='box' key={index} style={{backgroundColor: item}} onClick={()=>clickChecker(item)}></div>
                         ))

                      }
                </div>
               
              </div>

          </div>


      <div className='scorecountanimation' style={{display: scoreAnimation ? "block" : "none", opacity:0}}>
        
       +10
        </div>
        {  level === 10 && (
          <div div className='finalmodal'>
            <div>Your color guessing strength is</div>
            <div className='scoreStrength'>{((level/trialNumber)*100).toFixed(1) + "%"}</div>

            <div className='colorPallete'><a href='/'>Try Again!</a></div>
          </div>
            )
        }

    </div>
   
    
  );
}

export default App;
