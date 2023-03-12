import React, { useState } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useAuth0 } from "@auth0/auth0-react";

import loadingImg from '../../images/writing-loading.gif'

const Header = () => {
  const [promptEvent, setPromptEvent] = useState(null);
  const [appAccepted, setAppAccepted] = useState(false);
  const { isAuthenticated, isLoading, user } = useAuth0();

  let isAppInstalled = false;

  if (window.matchMedia('(display-mode: standalone)').matches || appAccepted) {
    isAppInstalled = true;
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    setPromptEvent(e);
  });

  const installApp = () => {
    promptEvent.prompt();
    promptEvent.userChoice.then(result => {
      if (result.outcome === 'accepted') {
        setAppAccepted(true);
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  };

  return (
    <Menu divided stackable size="massive" style={{ 'background': '#570E0E' }}>
      <Menu.Item header style={{ 'background': '#570E0E' }}>
        <h1 style={{ color: 'white' }}>KET&nbsp;-&nbsp;Kailasa&nbsp;eligiblity&nbsp;test</h1>
      </Menu.Item>

      {isAuthenticated && !isLoading && (
        <>
          <Menu.Item position="right" style={{ 'background': '#570E0E', 'color': 'white' }}>
            <h1>Welcome {user.nickname}!&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <img src={user.picture} alt="" />
          </Menu.Item>
        </>
      )}
      {(isLoading) && (
        <>
          <Menu.Item position="right">
            <img src={loadingImg} alt="" />
          </Menu.Item>
        </>
      )
      }
    </Menu >
  );
};

export default Header;
