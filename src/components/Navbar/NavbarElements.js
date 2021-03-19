import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: sticky;
    top: 0;
    z-index: 10;
`

export const NavContainer = styled.div`

`

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;   
`

export const NavItem = styled.li`
    cursor: pointer;

`

export const NavLinks = styled(NavLink)`
    padding: 10px 30px;
    text-decoration: none;
    color: black;
    font-weight: 600;    
    &.active_nav {
        color: pink;
        border-bottom: 2px solid pink;
    }
`
