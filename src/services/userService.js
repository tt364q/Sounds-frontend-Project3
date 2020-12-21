import { setToken, getUserFromToken, removeToken } from './tokenService';

const BASE_URL = 'https://git.heroku.com/project3-sounds-backend.git';



function signup(user) {
    return fetch(BASE_URL + '/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Email already taken');
    }).then(({ token }) => setToken(token));
}

function login(credentials) {
    return fetch(BASE_URL + '/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Credentials');
    }).then(({ token }) => setToken(token));
}

function logout() {
    removeToken();
}

function getUser() {
    return getUserFromToken();
}

function getSoundPacks(){
    return fetch(BASE_URL + '/soundPacks', {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json'
        },
    }).then(response => {
        if(response.ok) return response.json();
    });

}


export {
    signup,
    login,
    logout,
    getUser,
    getSoundPacks
}