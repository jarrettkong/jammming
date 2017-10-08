let accessToken;
let expiresIn;

const redirectURI = 'http://localhost:3000';
const clientID = '6265a393789a4dbab93b705b20c85829'; // Spotify API client id

const Spotify = {

  // Retrieves the user access token from Spotify
  getAccessToken() {
    if (accessToken) { // Checks for existing token
      return accessToken;
    }

    const accessSource = window.location.href.match(/access_token=([^&]*)/); // Sources the access token
    const expiresSource = window.location.href.match(/expires_in=([^&]*)/); // Sources the expiration timer

    if (accessSource && expiresSource) {
      accessToken = accessSource[1]; // Sets access token
      expiresIn = Number(expiresSource[1]); // Sets expiration time
      window.setTimeout(() => accessToken = '', expiresIn * 1000); // Clears the url and expiration from the URL
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = accessURL; // Redirects the browser to the above access url
    }
  },

  // Searches the Spotify API
  search(term) {
    const accessToken = Spotify.getAccessToken(); // Gets token for search
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
        return jsonResponse.tracks.items.map(track => ({ // Returns search results
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      }
    });
  },

  // Saves the playlist to a user account
  savePlaylist(playlistName, trackURIs) {
    const accessToken = Spotify.getAccessToken();
    const headers = {Authorization: `Bearer ${accessToken}`};
    let userID;

    // Get user's id
    return fetch(`https://api.spotify.com/v1/me`, {headers: headers})
    .then(response => response.json())
    .then(jsonResponse => {
      userID = jsonResponse.id;

      console.log(userID);

      // Makes new playlist with user specified name
      return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: playlistName })
      })
      .then(response => response.json())
      .then(jsonResponse => {
        const playlistID = jsonResponse.id;

        // Saves playlist to user
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackURIs })
        });
      });
    });
  }
}

export default Spotify;
