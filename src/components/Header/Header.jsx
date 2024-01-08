import "./Header.css";
import reactLogoImg from "../../assets/react-core-concepts.png";

const theWords = ["Fundamentals", "Core", "Crucial"];

function numGenerator(max){
    return Math.floor(Math.random() * (max + 1));
}


export default function Header(){
  
    // const randomNum= Math.floor(Math.random()*10);
    // let theWord;
  
    // if(randomNum <= 4) {
    //     theWord = "Fundamental"
    // } else if(randomNum <=7) {
    //     theWord = "Core";
    // } else {
    //     theWord="Crucial"
    // }
  
    const finalWord = theWords[numGenerator(2)];
    
    return(
      <div>
          <header>
          <img src={reactLogoImg} alt="Stylized atom" />
          <h1>React Essentials Bro</h1>
          <p>
            {finalWord} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
      </div>
    )
  }