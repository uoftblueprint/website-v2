import React from "react";
import Image from "next/image";
import '@/components/Navbar/Navbar.css';
import { Button, Group } from '@mantine/core';
import '@mantine/core/styles.css';

const links = [
  { link: '/projects', label: 'Projects' },
  { link: '/team', label: 'Team' },
  { link: '/chapters', label: 'Chapters' },
];

const items = links.map((link) => 
  <Button variant="transparent" component="a" href={link.link} color="white" classNames={{label: "nav-link"}}>{link.label}</Button>
)

function Navbar() {
  return (
    <header className='nav'>
      <div className='nav-logo_container'>
        <Image src='/logo-with-text.svg' alt='Blueprint Logo' className='nav-logo-img' height={30} width={150}/>
      </div>
      <div className='nav-menu_container'>
        {items}
        <Button variant="outline" color="white" className="nav-join-btn"> Join our Team!</Button>
      </div>
    </header>
  )
}

export default Navbar