
import React from 'react'
import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'

export default function Header(props) {

const getNavLinkClass = path => {
  return props.location.pathname === path ? "active" : "";
};
  return (
    <header className='spacing-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <BrandIcon/>
       
        <div className='collapse navbar-collaps'>
          <ul className='navbar-nav ml-auto'>
            <li className={`navbar-item${getNavLinkClass("/")}`}>
              <Button className='nav-link' type='link' href='/'> 
              Home
              </Button>
            </li>
            <li className={`navbar-item${getNavLinkClass("/browse-by")}`}>
              <Button className='nav-link' type='link' href='/browse-by'>
                Browse By
              </Button>
            </li>
            <li className={`navbar-item${getNavLinkClass("/stories")}`}>
              <Button className='nav-link' type='link' href='/stories'>
                Stories
              </Button>
            </li>
            <li className={`navbar-item${getNavLinkClass("/agents")}`}>
              <Button className='nav-link' type='link' href='/agents'>
                Agents
              </Button>
            </li>

          </ul>

        </div>
        </nav>

      </div>

    </header>
  )
}
