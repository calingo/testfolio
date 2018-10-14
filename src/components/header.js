import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {
    
    state = {
        hasScrolled: false,
        value: 50
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const scrollTop = window.pageYOffset
        console.log(scrollTop)

        if (scrollTop > 50) {
            this.setState ({ hasScrolled: true})
        } else {
            this.setState ({ hasScrolled: false})
        }

    }
    
    render() {
        return (
            <div>
                <div className={ this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header' }>
                    <div className="HeaderGroup">
                        <Link to="/">Lukey Warda</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact"><img alt="Luke Warda FacePile" className="HeaderFace" src="./images/Luke-Warda-Profile-Small.png" /></Link>
                    </div>
                </div>
            </div>  
        )
    }
}



export default Header 
