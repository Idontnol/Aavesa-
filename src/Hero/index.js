import './index.css';

const Hero=()=>{
    return(
        <div className="HeroContainer">
            <img src="bobWoodWard1.png" alt="" className="heroImage" />
            <div className="HeroDescription">
                <p className='heroHeaderPara'><span className='heroHeaderSpecial'>Investigative Journalism:</span> Uncover the Truth with Bob Woodward</p>
                <h3>Learn from the legendary reporter who exposed Watergate and shaped American history.</h3>
                <button className='enrollNowHero'>Enroll Now</button>
            </div>
        </div>
    )
}

export default Hero;