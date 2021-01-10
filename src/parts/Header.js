import React, {useState} from 'react'
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'

export default function Header(props) {

    //getting current path location
    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : ""
    }

    //for collapse button 
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    if (props.isCentered){
        return (
            <Fade>
                <header className="spacing-sm">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Button className="brand-text-icon mx-auto" href="" type="link">
                                Stay<span className="text-gray-900">cation.</span>
                            </Button>
                        </nav>
                    </div>
                </header>
            </Fade>
        )
    }

    return (
        <Fade>
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon/>      

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>              
                
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                                <Button className="nav-link" type="link" href="/browse-by">
                                    Browse By
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/stories")}`}>
                                <Button className="nav-link" type="link" href="/stories">
                                    Stories
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/agents")}`}>
                                <Button className="nav-link" type="link" href="/agents">
                                    Agents
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        </Fade>
    )
}
