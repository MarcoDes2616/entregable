import React, { useState } from 'react';
import quotes from "../quotes.json"
import colors from "../colors.json"


const Quotes_card = () => {
    
    const [quoteR, setQuoteR] = useState(Math.floor(Math.random() * quotes.length))
    const [colorR, setColorR] = useState(Math.floor(Math.random() * colors.length))
    
    const change = () => {
        setQuoteR(Math.floor(Math.random() * quotes.length))
        setColorR(Math.floor(Math.random() * colors.length))
    }

    return (
        <div className="general_contain" style={{ backgroundColor: colors[colorR].body }}>
            <div className='card' style={{ color: colors[colorR].text, boxShadow: colors[colorR].text}}>
                <div className='quote'>
                    <i className='bx bxs-quote-left bx-lg'></i>
                    <p>{quotes[quoteR].quote}</p>
                </div>
                <div className='section'>
                    <h2>{quotes[quoteR].author}</h2>
                    <div className='icon' onClick={change} style={{backgroundColor: colors[colorR].text, color: colors[colorR].body}}>
                        <i className='bx bx-chevrons-right bx-md'></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quotes_card;