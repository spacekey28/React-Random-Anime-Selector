# React-Random-Anime-Selector

## Introduction

This SPA app has been deployed to Heroku(free tier) at <a target="_blank" href="https://random-anime.herokuapp.com/">https://random-anime.herokuapp.com/</a>.

The app was created using Webpack4, React16, Sass and Jikan API.

Public API: <a target="_blank" href="https://jikan.moe/">Jikan API</a>.

* Node v8.11.1 used
* NPM v6.1.0 used

## Install

```
npm install
npm run start
```

index.html, css file and js file will be created in publid folder.
start for development.
build for production.

## Key Features and Issues

* Getting a random anime with its title, thumbnail and synopsis by click a button.

After fetching a get request Jikan server responses back JSON objects containing a specific anime with a corresponding ID. At the moment the app makes a request for one anime after one another.
The state array saves each anime info - title, image_url and synopsis. But, some IDs for Jikan API apprently doesn't have JSON objects. Therefore I made it call another request when there was status responses between 400 and 500.
If there would have been more time I could use more specific parameter in Jikan API to make a correct API request to get corresponding JSON objects except non-existent files.
Also, I could have used Redux to manage states more efficiently.






* This side project is for a test with Allied Telesis Labs Ltd.
