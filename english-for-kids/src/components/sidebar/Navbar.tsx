import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link, NavLink } from 'react-router-dom';
import SidebarData from './SidebarData';
import ToggleSwitch from '../toggleSwitch/toggleSwitch';
import AuthBtn from '../authBtn/authBtn';
import './Navbar.css';

interface Props {
  mode: string,
  setMode: React.Dispatch<React.SetStateAction<string>>,
  token: undefined,
  setToken: React.Dispatch<() => undefined>
}

function Navbar({
  mode, setMode, token, setToken,
}: Props): JSX.Element {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = (): void => setSidebar(!sidebar);

  if (token) {
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="navbar">
            <h1>English for kids</h1>
            <AuthBtn token={token} setToken={setToken} />
          </div>
        </IconContext.Provider>
      </>
    );
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1>English for kids</h1>
          <div className="navbar-btn">
            <ToggleSwitch setMode={setMode} mode={mode} />
            <AuthBtn token={token} setToken={setToken} />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul
            className="nav-menu-items"
            onClick={showSidebar}
            onKeyDown={showSidebar}
            role="presentation"
          >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item) => (
              <li key={item.title} className={item.className}>
                <NavLink exact to={item.path} activeClassName="active-item">
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
