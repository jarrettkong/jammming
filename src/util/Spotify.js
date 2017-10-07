// import React from 'react';

let accessToken;
let expiresIn;

const redirectURI = 'http://localhost:3000/';
const clientID = '6265a393789a4dbab93b705b20c85829'; // Spotify API client id
// const secret = '1722bc3a175d49638787ae6268f294b3'// Spotify API client secret

const Spotify = {

  // Retrieves the user access token from Spotify
  getAccessToken() {
    if (accessToken) { // Checks for existing token
      return accessToken;
    }

    const accessSource = window.location.href.match(/access_token=([^&]*)/); // Sources the access token
    const expiresSource = window.location.href.match(/expires_in=([^&]*)/); // Sources the expiration timer

    if (accessToken && expiresIn) {
      accessToken = accessSource[1]; // Sets access token
      expiresIn = Number(expiresSource[1]); // Sets expiration time
      window.setTimeout(() => accessToken = '', expiresIn * 1000); // Clears the url and expiration from the URL
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = redirect; // Redirects the browser to the above access url
    }
  },

  search(term) {
    Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
      authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => response.json()) // Convert to JSON
    .then(jsonResponse => { //
      if (!jsonResponse.tracks) {
        return []; // Returns empty array if no results
      } else {
        return jsonResponse.tracks.map(track => ({ // Returns search results
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      }
    });
  }
}

export default Spotify;
