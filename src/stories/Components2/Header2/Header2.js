import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header2.css";
export default function Header2({ logoalt, HeaderData }) {
  return (
    <div className="menus">
      <div className="logo">
        {HeaderData.map((item, key) => (
          <img
            src={item.logo.imgUrl}
            height="60"
            width="60"
            alt={logoalt}
            style={item.logo}
          />
        ))}
      </div>
      <div className="menu-bar">
        <ul>
          {HeaderData.map((item, key) =>
            item.menuItems.map((menu) => (
              <Router>
                <li>
                  <Link to="/">{menu.name}</Link>

                  <div className="sub-menu-1">
                    <ul>
                      {menu.subMenuItems.map((submenu) => (
                        <Router>
                          <li>
                            <Link to={`/${submenu.url}`}>{submenu.name}</Link>
                          </li>
                        </Router>
                      ))}
                    </ul>
                  </div>
                </li>
              </Router>
            ))
          )}
        </ul>
      </div>
      <div className="last-content">
        <div>
          {HeaderData[0].searchBox === true ? (
            <input type="search" placeholder="Search" />
          ) : (
            ""
          )}
        </div>
        <div className="notification">
          <ul>
            <li>
              <Router>
                <li>
                  <Link to="/notification" className="notification">
                    Notification
                  </Link>
                </li>
              </Router>
            </li>
          </ul>
        </div>
        <div>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

Header2.propTypes = {
  HeaderData: PropTypes.array,
};
Header2.defaultProps = {
  HeaderData: [
    {
      background: {
        imgUrl:
          "http://thecareforum.co.uk/wp-content/uploads/2016/06/Sky-Logo-1.png",
        opacity: 0.2,
        color: " #fff",
      },
      logo: {
        imgUrl:
          "http://thecareforum.co.uk/wp-content/uploads/2016/06/Sky-Logo-1.png",
        opacity: 0.2,
        position: "left",
      },
      menuItems: [
        {
          name: "Prepaid",
          url: "abc.com",
          subMenuItems: [
            {
              name: " Prepaid Plan1",
              url: "abc.com",
            },
            {
              name: "Prepaid Plan2",
              url: "abc.com",
            },
          ],
        },
        {
          name: "Postpaid",
          url: "abc.com",
          subMenuItems: [
            {
              name: "Postpaid Plan1",
              url: "abc.com",
            },
            {
              name: "Postpaid Plan2",
              url: "abc.com",
            },
          ],
        },
      ],
      searchBox: true,
      login: {
        status: true,
        redirectionUrl: "/login",
        redirectionType: "external/internal",
      },
      register: {
        status: true,
        redirectionUrl: "/register",
        redirectionType: "external/internal",
      },
    },
  ],
};
