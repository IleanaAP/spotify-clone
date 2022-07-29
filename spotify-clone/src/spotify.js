//not a component, that is why si not capitalized
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
//we need an endpoint: where we sent the user in order for them to login

export const authEndpoint = "https://accounts.spotify.com/authorize";//spotify takes care of the authentication and then comes back
const redirectUri = "https://localhost:3000";