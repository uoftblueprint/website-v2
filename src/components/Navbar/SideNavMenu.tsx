import React from 'react'
import { Button } from '@mantine/core';
import "@/components/Navbar/SideNavMenu.css"





function SideNavMenu({links}) {
      
    const items = links.map((link) => 
        <Button variant="transparent" component="a" href={link.link} color="white" className="nav-link side-nav-link">{link.label}</Button>
    )

    items.push(
        <Button variant="filled" color="white" className="nav-join-btn">Join our Team!</Button>
    )
    return (
        <div className='side-nav'>
            <div className='side-menu'>
                {items}
            </div>
        </div>
    )
}

export default SideNavMenu