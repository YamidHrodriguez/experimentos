import React, { useState } from 'react';
import '../styles/Container.css';
import Header from './Header';
import FormLogin from './FormLogin';
import Menu from './Menu';
import Content from './Content';

const Container = () => {
  const [isFormVisible, setFormVisible] = useState(true);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setFormVisible(false);
    setMenuVisible(true);
  };

  const showFormLogin = () => {
    setFormVisible(true);
    setMenuVisible(false);
  };

  return (
    <>  
      <div className="dark-background"></div>
      <div id="container" className="container">
        <Content>
          <Header />
          {isFormVisible && <FormLogin showMenu={showMenu} />}
          {isMenuVisible && <Menu showFormLogin={showFormLogin} />}
        </Content>
      </div>
    </>
  );
};

export default Container;
