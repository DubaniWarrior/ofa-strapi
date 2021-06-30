import React, { useState } from 'react';
import HeaderStc from './Header.stc';
import {
  Collapse,
  
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import Menu from '../Menu'

const Header = (props) => {

    const Listes=[
        {
            lien:"/",
            texte:"Accueil"
        },
        {
            lien:"/etablissement",
            texte:"établisements"
        },
        {
            lien:"/formation",
            texte:"formations"
        },
        {
            lien:"/metier",
            texte:"Métiers"
        },
        {
            lien:"/",
            texte:"Vols & guides"
        },
        {
            lien:"/",
            texte:"Logement"
        },
        {
            lien:"/",
            texte:"Partenaire"
        },
    ]

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <HeaderStc light expand="md">
        <NavbarBrand href="/"><img style={{height:"35px"}} src="https://virtuallydemo.com/ofaoriente/wp-content/uploads/2021/02/ofa_oriente.png" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

              {
                  Listes.map((liste,index)=>(<Menu key={index} texte={liste.texte} lien={liste.lien} />))
              }
            
          
          </Nav>
        </Collapse>
      </HeaderStc>
    </div>
  );
}

export default Header;