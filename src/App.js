
import React,{useState,useEffect} from "react";
import "./style/app.scss";
import MovieCard from "./component/moviCard";

//99bd74e4
//http://www.omdbapi.com/?apikey=99bd74e4

const apiUrl = "http://www.omdbapi.com/?apikey=99bd74e4"

function App() {


const [storeData, setStoreData] = useState([]);
const [inputData, setInputData] = useState("");

 const searchMovies = async(title)=>{
  const response = await fetch(`${apiUrl}&s=${title}`);
  const data = await response.json();
  setStoreData(data.Search);
  console.log(data);
}
  useEffect(()=>{searchMovies({})
  },[]);


  return (
    <div className="App">
      <center><h1>Heat Movies App</h1></center>
      <div className="search">
        
        <input type="text" placeholder="Enter the movie name here..." value = {inputData} onChange={(e)=> setInputData(e.target.value)}></input>
        <button onClick={()=>{searchMovies(inputData)}}>Submit</button>
    
      </div>
    <div className="appBody">
    {storeData && storeData.map((e)=>{
        return (
          <MovieCard myData={e}/>
        )
      })}
    </div>
    </div>
  );
}

export default App;
