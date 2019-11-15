# React simple image search

![screenshot of image search](https://res.cloudinary.com/dwfzniyyh/image/upload/v1573794668/screenshot-search.png)

This app allows users to search for images and will display up to 10 images at a time (demo api limitations).

The image search api is from [Unsplash](https://unsplash.com/developers).

The purpose of this app is to practice react, axios, and css grid.

The following files have comments for explanation:
```
// For css grid
ImageCard.js
ImageCard.less

// For unsplash api
App.js
unsplash.js
```

## Run this app locally

1. Clone the project and sign up for a unsplash developer account using the link above.
2. When prompted, create a new app and scroll down to find your api keys.
3. Create a new file `.env` in the root directory.
4. Copy and paste `REACT_APP_UNSPLASH_ACCESS_KEY=your-api-key` into the newly create file.
5. Copy and paste the access key from your app on unsplash, replacing `your-api-key` in the new file.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
