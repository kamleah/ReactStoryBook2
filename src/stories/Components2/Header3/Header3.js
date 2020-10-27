import React from 'react'
import './Header3.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
export default function Header3({Data}) {
    return (
        <Router>
        <div className="DropDownMenu">
            <div className="MenuLogo">
                <img src="https://img.cdndtl.co.uk/umbraco2017/24011/plusnet.jpg?w=600&s=12c082e4610cc2fb11d1f8abdcbd24d2" height="250" width="250" alt="" />
            </div>
            <div className="DDMenu">
                <ul>
                    <li>
                        <Link to="/">BroadBand</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Mobile</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Entertainment</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Perks</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Help</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Sign In</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Bussiness BroadBand</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                        <ul>
                            <li><Link to="/">Home SubMenu1</Link></li>
                            <li><Link to="/">Home SubMenu2</Link></li>
                            <li><Link to="/">Home SubMenu3</Link></li>
                            <li><Link to="/">Home SubMenu4</Link></li>
                            <li><Link to="/">Home SubMenu5</Link></li>
                        </ul>
                    </li>
                </ul>                
            </div>
        </div>
        </Router>
    )
}
