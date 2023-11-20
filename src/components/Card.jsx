/* eslint-disable react/prop-types */
import "./card.css";

function Card(props) {



    return(
        <div className="Card">
            <img className="icon" src={props.src}></img>
            <h1 className="text1" >{props.text1}</h1>
            <h2 className="text2" >{props.text2}</h2>
        </div>
    )
}
export default Card;