import React, { useState, useEffect} from "react";
import classes from './Pages.module.scss';
 
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
 
 
    return (
    <div>
        <div className={classes.quote}>
        <blockquote>
            <p>{quote}</p>     
            <cite>{author}</cite>
            </blockquote>
        </div>
        <div className={classes.button}>
            <blockquote>
            <p>Log new workout</p>
            </blockquote>
        </div>
    </div>
    );
  }
  
  export default HomePage;
