import React, { useState, useEffect} from "react";
import Header from '../components/Header';
 
const HomePage = () => {
    let [quote, setQuote]= useState(null)
    let [author, setAuthor]= useState(null)
 
 
    useEffect(() => {
        async function getDailyQuote() {
            let response = await fetch("https://quotes.rest/qod/sports");
            const data = await response.json();            
            setQuote(data.contents.quotes[0].quote);
            setAuthor(data.contents.quotes[0].author);
        }
        getDailyQuote()
    }, [])
 
 
    return <div>
        <Header></Header>
        <h2>{quote}</h2>     
        <h4>{author}</h4>
    </div>;
  }
  
  export default HomePage;
