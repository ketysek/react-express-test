# Example application with React & Express

This application was created to demonstrate the usage of history object outside React components, however it doesn't work as expected. We want to achieve redirect to `/not-authorized` route whenever we get `403` status from our api. You can see, that if you visit the home page `/`, the browser's location changes to `/not-authorized`, but the page remains same (`NotAuthorized` page component is not rendered).

## How to start the example

1. run `yarn install` or `npm install`
2. run `node server.js`
3. go to `client` folder and run `yarn install` or `npm install`
4. run `npm start` or `yarn start`

Created via create-react-app and Express
