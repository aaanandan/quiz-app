import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-88bircurddzvffqn.us.auth0.com"
      clientId="IlSZ7rPwgaPRDt81GGYnC7W138mdDyWA"
      authorizationParams={{
        audience: 'kerserver.onrender.com',
        redirect_uri: window.location.href,
      }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
