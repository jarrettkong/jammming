import React from 'react';

let accessToken;
let expiresIn;

const redirect = 'http://localhost:3000/';
const clientID = '6265a393789a4dbab93b705b20c85829'; // Spotify API client id
const secret = '1722bc3a175d49638787ae6268f294b3'// Spotify API client secret

class Spotify extends React.Component {


  // Retrieves the user access token from Spotify
  getAccessToken() {
    if (accessToken) { // Checks for existing token
      return accessToken;
    }

    const url = window.location.href;

    accessToken = url.match(/access_token=([^&]*)/); // Sources the access token
    expiresIn = url.match(/expires_in=([^&]*)/); // Sources the expiration timer

    window.setTimeout(() => accessToken = '', expiresIn * 1000); // Clears the url and expiration from the URL
    window.history.pushState('Access Token', null, '/');
  }
}

export default Spotify;
