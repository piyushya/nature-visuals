import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

export default function Nav(){
    return(
        <>
            <nav className="nav-bar">
                <img src={reactLogo} className="nav-bar-logo"/>
                <img src={viteLogo} className="nav-bar-logo vite-logo"/>
                <ul className='nav-bar-links'>
                    <li><a className="button-link nav-link" href="https://www.instagram.com/piyush_4r7/" target='_blank' rel="noreferrer">Contact</a></li>
                    <li><a className="button-link nav-link" href="https://read.cv/piyush_yadav" target='_blank' rel="noreferrer">About</a></li>
                    <li><a className="button-link nav-link" href="https://github.com/piyushya" target='_blank' rel="noreferrer">Projects</a></li>
                </ul>
            </nav>
        </>
    )
}