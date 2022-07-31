//not a component, that is why si not capitalized
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
//we need an endpoint: where we sent the user in order for them to login

export const authEndpoint = "https://accounts.spotify.com/authorize";//redirect to spotify as it takes care of the authentication and then comes back
const redirectUri = "http://localhost:3000/"; //brings you back to the home page
const clientId = "992deb35950b42749cff91a4061afd0d";

//scopes: you're telling what the user can do
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//We get the accesstoken from the url
export const getTokenFromUrl = () => {
    return window.location.hash //go to the Url and to the point where the hash is
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            //example: #accessToken=mysupersecretkey& name=sonny&se
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {}); //return an empty object
}

//login url
//we use %20 for the space in ascii and in bringing the array of the scope
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;