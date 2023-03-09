import React, { useState } from 'react';
import { Menu, Button } from 'semantic-ui-react';

const Header = () => {
  const [promptEvent, setPromptEvent] = useState(null);
  const [appAccepted, setAppAccepted] = useState(false);

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
        <h1 style={{ color: 'white' }}>KET</h1>
      </Menu.Item>
      <Menu.Item header style={{ 'background': '#570E0E' }}>
        <h2 style={{ color: 'white' }}>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kailasa&nbsp;eligiblity&nbsp;test</h2>
      </Menu.Item>



      {promptEvent && !isAppInstalled && (
        <Menu.Item position="right">
          <Button
            color="teal"
            icon="cloud download"
            labelPosition="left"
            content="Install App"
            onClick={installApp}
          />
        </Menu.Item>
      )}
    </Menu >
  );
};

export default Header;
