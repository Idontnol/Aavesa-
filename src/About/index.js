import './index.css';

const About=()=>{
    return(
        <div className="AboutContainer">
           <h1 className=''>Meet Bob Woodward: A Pioneering Investigative Journalist</h1> 
            <div className="AboutInnerContainer">
                <div className="AboutLeft">
                    <div className='aboutLeftContent'>
                        <p>Bob Woodward is a legend in journalism. For over 50 years, his relentless pursuit of truth has informed and empowered the public.
                            Woodward's reporting on the Watergate scandal, alongside Carl Bernstein, led to President Nixon's resignation and forever changed 
                            American politics.  He has won numerous awards, including two Pulitzer Prizes, and authored 21 bestselling books that provide unparalleled 
                            insider access to the highest levels of power.</p>
                        <q>Democracy dies in darkness. Journalism is the flashlight. In this course, 
                        I'll teach you the tools to uncover the facts, hold powerful people accountable, 
                        and shine a light on the truth.</q>
                        <span className='aboutQuoteSpecialTag'>- Bob Woodward</span>
                    </div>
                </div>
                <img src="bobWoodWard2.png" alt="" className='aboutImage' />
            </div>
        </div>
    )
}

export default About;