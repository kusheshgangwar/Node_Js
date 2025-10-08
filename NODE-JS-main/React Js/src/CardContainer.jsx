import Card from "./Card.jsx";
import './cardContainer.css';
import { useState } from "react";

function CardContainer() {
const[value,setValue]=useState(0);

function plusHandler(){
  console.log(value);
  setValue(value+1);
}

function minusHandler(){
  console.log(value);
  setValue(value-1);
}

  return (
    <div>
      <div className="card-container">
      <Card heading="Heading1" paragraph="paragraph1" buttonText="Button1" value={value}/>
      <Card heading="Heading2" paragraph="paragraph2" buttonText="Button2" value={value}/>
      <Card heading="Heading3" paragraph="paragraph3" buttonText="Button3" value={value}/>
      <Card heading="Heading4" paragraph="paragraph4" buttonText="Button4" value={value}/>
      <Card heading="Heading5" paragraph="paragraph4" buttonText="Button5" value={value}/>
    </div>

    <div className="btn-container">
      <span id="minus-btn" onClick={minusHandler}>
        -
      </span>
      <span id="number">
       {value}
      </span>
      <span id="plus-btn" onClick={plusHandler}>
        +
      </span>
    </div>
   
      
    
    </div>

  );
}

export default CardContainer;
