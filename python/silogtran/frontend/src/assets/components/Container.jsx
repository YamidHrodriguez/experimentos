import React, { useState } from "react";
import '../styles/Container.css';
import Header from './Header';
import FormLogin from './FormLogin';
import Menu from './Menu';

const Container = () => {
  const [isFormVisible, setFormVisible] = useState(true);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setFormVisible(false);
    setMenuVisible(true);
  };

  return (
    <>  
      <div className="dark-background"></div>
      <div id="container" className="container">
        <div className="content">
          <Header />
          {isFormVisible && <FormLogin showMenu={showMenu} />}
          {isMenuVisible && <Menu />}
        </div>
      </div>
    </>
  );
}

export default Container;
