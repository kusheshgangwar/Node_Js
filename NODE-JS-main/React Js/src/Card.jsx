import './card.css'

function Card({heading,paragraph,buttonText,value}){
    return(
        <div className="card">
             <h1>
                {heading}
             </h1>
             <p>
               {paragraph}
             </p>   
             <button>
                {buttonText }
             </button>
             {
              (value>=0) && <span>
              {value}
             </span>
             }
        </div>
    )
}




export default Card;