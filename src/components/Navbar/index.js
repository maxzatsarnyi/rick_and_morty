import React from 'react';
import {Nav, NavContainer, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = () => {
    return (
        <>
           <Nav>
                <NavContainer>
                    <NavMenu>
                        {/* <NavItem><NavLinks to="/characters/:1" activeClassName="active_nav">Characters</NavLinks></NavItem> */}
                        <NavItem><NavLinks to="/" exact activeClassName="active_nav">Characters</NavLinks></NavItem>
                        <NavItem><NavLinks to="/episodes" activeClassName="active_nav">Episodes</NavLinks></NavItem>
                        <NavItem><NavLinks to="/locations" activeClassName="active_nav">Locations</NavLinks></NavItem>
                        <NavItem><NavLinks to="/watchlist" activeClassName="active_nav">My watch list</NavLinks></NavItem>
                    </NavMenu>
                </NavContainer>   
            </Nav> 
        </>
    )
}

export default Navbar;
