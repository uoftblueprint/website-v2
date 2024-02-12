import React from 'react'
import { Button, UnstyledButton } from '@mantine/core';
import "@/components/Navbar/SideNavMenu.css"


const links = [
    { link: '/projects', label: 'Projects' },
    { link: '/team', label: 'Team' },
    { link: '/chapters', label: 'Chapters' },
  ];
  
const items = links.map((link) => 
    <Button variant="transparent" component="a" href={link.link} color="white" className="side-nav-link">{link.label}</Button>
)

items.push(
    <Button variant="filled" color="white" className="nav-join-btn">Join our Team!</Button>
)

function SideNavMenu() {
  return (
    <div className='side-nav'>
        <div className='side-menu'>
            {items}
        </div>
    </div>
  )
}

export default SideNavMenu