import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import logotype from './img/Rivo_logotype.png';




export default function Header() {
  return (
    <header className="header">
        <div className="container">
        <div className="header__body">            
            <img src={logotype} alt=""/>
            <div className="header__buttons_items">
            <div className="header__items">
                    <ul className="header__items_items">
                        <li>
                            <a href="" >Services</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <nav className="Expertise">Expertise
                                <ul>
                                    <ul id="submenu">
                                        <li>
                                            <a href="" >Healthcare & Fitness</a>
                                        </li>
                                        <li>
                                            <a href="" >Retail & Ecommerce</a>
                                        </li>
                                        <li>
                                            <a href="" >Real & Estate</a>
                                        </li>
                                        <li>
                                            <a href="" >Custom & CRM</a>
                                        </li>
                                        <li>
                                            <a href="" >Education & E-Learning</a>
                                        </li>
                                        <li>
                                            <a href="" >Food & Restaurant</a>
                                        </li>
                                        <li>
                                            <a href="" >Retail & E-Commerce</a>
                                        </li>
                                        <li>
                                            <a href="" >Logistic & Distribution</a>
                                        </li>
                                    </ul>
                                </ul>
                            </nav>
                        </li>
                        <li>
                            <a href="">Contaсts</a>
                        </li>
                        <li>
                            <a href="" className="Hot">Careers</a>
                        </li>
                    </ul>
            </div>
            <a className="makeOrder_Button"  href="#">
            <p>MAKE ORDER</p> 
            <MdArrowOutward className='makeOrder_Button__arrow'/>
            </a>
            <div className="headerMainMenu">
                <div className="hamburger"></div>
                <a href="">MENU</a>
            </div>
        </div>
        </div>
    </div>

    </header>
  )
}
