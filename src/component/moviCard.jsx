import React from "react";
import "../style/style.scss";

const MovieCard = (props)=>{
return(
    <div className="cardMain">
        <div className="img">{
            (props.myData.Poster) === "N/A" ? (<div className="noImage"> No image </div>) : 
            (<img src={props.myData.Poster} alt="Movie poster"></img>)
        }
        </div>
        <div className="cardBody">
            <h1 className="title">{props.myData.Title}</h1>  
                <span>{props.myData.Year}</span>
                <span>{props.myData.Type}</span>
        </div>
    </div>
)

}

export default MovieCard;