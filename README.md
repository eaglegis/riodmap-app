## RiodMap

This is the main map component, it has the following props
- id = the webmap id you want to use
- onMarkerClick = this the callback for clicking on a feature in the map
- proxyUrl = the url to the proxy which will handle authentication and filtering at a global level
- userIdentity = the bearer token to be used
- layerDefs = an array of layer definitons to filter layers at a local level. This has the form of 

`{
  title:"layer name",
  where:"any valid where clause"
}`

More details on the where clause is [here](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#definitionExpression)

Details on valid SQL queries is [here](http://desktop.arcgis.com/en/arcmap/latest/map/working-with-layers/building-a-query-expression.htm#GUID-EC06FE3F-38BA-4CF2-AEAF-F69D65C7C567)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



