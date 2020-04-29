# Getting started with React

This how-to guide describes how to integrate THEOplayer in a React application.

## Set-up sample React app
1. Download sample React app from theoplayer-react-sample-app.zip.
2. Extract it to a folder.
3. Run `npm install` inside the folder.
4. Run `npm run start` inside the folder.

## Including THEOplayer library assets
THEOplayer-related logic is residing in

- `src/THEOplayer.js`, -- Please replace the URL of the libraryLocation to the folder where your THEOplayer files (THEOplayer.js, THEOplayer.d.js, etc.) are residing.
- `src/App.js`,
- `public/index.html` -- Please replace the links to the THEOplayer assets with your own URLs.

## Creating a component
- `src/THEOplayer.js` – is an example implementation of a React Component.