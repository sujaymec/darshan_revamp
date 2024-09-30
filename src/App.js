// import logo from './logo.svg';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';

function App(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='darshan-container'>
      <Navbar {...args} className="navbar-expand-md">
        <NavbarBrand href="/">Darshan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Downloads
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Disciplines
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>GaanaPurna</DropdownItem>
                <DropdownItem>ChitraPurna</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>VadyaPurna</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
