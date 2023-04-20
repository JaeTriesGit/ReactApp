import Logo from '../assets/react.svg'

export default function Navbar(){
    return(
        <nav>
            <div className='ReactLogo'>
                <img src={Logo} className='reactImg'/>
                <p className='ReactFacts'>ReactFacts</p>
            </div>
            <p className='RC'>React Course - Project 1</p>
        </nav>
    )
};