import React, { useState, useEffect} from "react";
import Header from '../components/Header';
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
        <Header></Header>
        <div className={classes.quote}>
        <blockquote>
            <p>{quote}</p>     
            <cite>{author}</cite>
            </blockquote>
        </div>
        <div class={classes.button}>
            <blockquote>
            <p>Log new workout</p>
            </blockquote>
        </div>
    </div>
    );
  }
  
  export default HomePage;
