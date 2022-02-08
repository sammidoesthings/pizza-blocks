function LandingPage(){
    return (
        <div className='landingpage-container'>
            <div className='hero-container'>
                <img className='hero-image' src={require('../pizzahero.png')} alt='pizza'/>
            </div>

            <div>
                I'm a landing page!
            </div>

        {/* END OF LANDINGPAGE-CONTAINER */}
        </div>
    )
}

export default LandingPage