import React from "react";
import { useState, useEffect } from "react";
import  '../components/News.css';
const NewsBoard = () => {
  const [art, setArt] = useState([]);

  const getrequest = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d40391dfab54afeaedf05803e64c4c5");
      const data = await response.json();
      setArt(data.articles);
    }
    console.log(art);

    useEffect(() => {
      getrequest();
    },[])

  return (
    <>
      <div className="maindiv">
    { art.map((ele,index)=>{
        console.log(ele)
          return( 
              <div key={index} className="card"  style={{width:"400px" ,height:"450px",marginLeft:"4rem",marginTop:"2rem"}} data-bs-theme="dark" >
            <img src={ele.urlToImage==null?"https://ichef.bbci.co.uk/news/1024/branded_news/163C1/production/_133037019_reutersoctober20232.jpg":ele.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{ele.author}</h5>
              <p className="card-text">{ele.title}</p>
              <a href={ele.url} target="_blank" className="btn btn-primary">Read More</a>
            </div>
            </div>
           )
          })
        }
        </div>
   </>
  );
};

export default NewsBoard;
