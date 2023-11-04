import React from 'react'
import './style.css'
import Div from '@jumbo/shared/Div'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Switch } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


import useJumboTheme from "@jumbo/hooks/useJumboTheme";
import { mainTheme as mainThemeDark } from "../../themes/main/dark";
import { headerTheme as headerThemeDark } from "../../themes/header/dark";
import { footerTheme as footerThemeDark } from "../../themes/footer/dark";
import { sidebarTheme as sidebarThemeDark } from "../../themes/sidebar/dark";

import { mainTheme as mainThemeDefault } from "../../themes/main/default";
import { headerTheme as headerThemeDefault } from "../../themes/header/default";
import { footerTheme as footerThemeDefault } from "../../themes/footer/default";
import { sidebarTheme as sidebarThemeDefault } from "../../themes/sidebar/default";
import useJumboSidebarTheme from "@jumbo/hooks/useJumboSidebarTheme";
import useJumboHeaderTheme from "@jumbo/hooks/useJumboHeaderTheme";
import useJumboFooterTheme from "@jumbo/hooks/useJumboFooterTheme";

const Index = () => {
  const navigate = useNavigate()
  const handleButtonClick = (action) => {
    switch (action) {
      case "login":
        navigate('/login');
        break;
      case "profile":
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  const { theme, setTheme } = useJumboTheme();
  const { setSidebarTheme } = useJumboSidebarTheme();
  const { setHeaderTheme } = useJumboHeaderTheme();
  const { setFooterTheme } = useJumboFooterTheme();

  const handleModeChange = React.useCallback(async (event) => {
    if (event.target.checked) {
      await setTheme({ mode: "dark", ...mainThemeDark });
      setHeaderTheme({ ...theme, ...headerThemeDark });
      setSidebarTheme({ ...theme, ...sidebarThemeDark });
      setFooterTheme({ ...theme, ...footerThemeDark });
      return;
    }
    await setTheme({ mode: "light", ...mainThemeDefault });
    setHeaderTheme({ ...theme, ...headerThemeDefault });
    setSidebarTheme({ ...theme, ...sidebarThemeDefault });
    setFooterTheme({ ...theme, ...footerThemeDefault });
  }, []);

  return (
    <>
      <Div className='header-main-div' >
        <Div className='header-name-div' >
          <h1 className='web-name'>
            Mahesh Chudasama
          </h1>
        </Div>

        <Div className='header-option-div'>
          <ul>
            <li>HOME</li>
            <li>About</li>
            <li onClick={() => handleButtonClick("profile")}>Profile</li>
            <li onClick={() => handleButtonClick("login")}>Setting </li>
            <li>
              <Switch
                checked={theme?.mode === "dark"}
                onChange={handleModeChange}
                name="header-fixed" />
              <IconButton aria-label="Theme" size="small" onChange={handleModeChange}J>
                <FontAwesomeIcon icon={faCircleHalfStroke} size='20px' />
              </IconButton>
            </li>
          </ul>
        </Div>
      </Div >
    </>
  )
}

export default Index
