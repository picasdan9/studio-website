import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from 'styles/Home.module.css'

export default function CustomNavbar() {
  return (
    <Navbar collapseOnSelect bg="white" expand="sm">
        <Navbar.Brand href="/" className={styles['navbar-home']}>dan n. tran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {navButtons.map(button => (
              <div key={button.path} className={styles['navbar-button']}>
                <Nav.Link href={button.path}>{button.label}</Nav.Link>
              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

const navButtons = [
  {
    label: "texts",
    path: "/texts"
  },
  {
    label: "works",
    path: "/works"
  },
  {
    label: "contact",
    path: "/contact"
  }
];