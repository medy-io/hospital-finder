This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hospital Finder :hospital: :satellite:

This project has a simple premise, automatically find the nearest hospital based on the users geolocation, and provide relevant hospital data. Relevant hospital data means: **name, address, phone number, website, and google map directions**. This information is provided all automatically on visiting the webpage. The aim is to cut down time between when a user decides they need a hospital and when they find one. To aid this task the app presents all data on one page using a card component with large, legible text and a button for directions.

The app is currently implemented in reactJS, typescript, SASS, and Jest. It uses IP geolocation via the window.navigator.geolocation.getCurrentPosition() method.

Read more about getCurrentPosition() here: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

Unfortunately the getCurrentPosition() method and IP geolocation as a whole is fairly inaccurate, leading to directions that may not line up with a users physical location. This is the biggest issue facing this app right now and one relegating it for **DEMO USE ONLY**. Alternatives are being explored to get a more accurate geolocation result.


#### WARNING :warning:
**This app uses IP geolocation, rendering user positions for hospital directions inaccurately. That means you should use this app at your own risk and cannot blame this application for any risks, injuries or deaths that occur because of usage!** 


### App Structure :ferris_wheel:

```
src
|
|- components
|  |- card-action                       // contains actionable content i.e. card-button (add user actions here)
|  |- card-body                         // contains name, address, phone #, and website of nearest hospital
|  |- card-button                       // contains link to hospital directions
|  |- card-header                       // contains app name "{State} Hospital Finder", change for your state
|  |- hospital-card                     // main parent component
|- constants
|  |- global-constants.constant.tsx     // put all app constants here i.e. app name
|- data
|  |- hospitals_2018-09.json            // local JSON data, if API is available don't use, if no API drop JSON here
|- fonts
|  |- Lato.ttf                          // font library, currently using Lato. Drop other fonts here
|- interfaces
|  |- global-interfaces.interface.tsx   // contains data type for hospital, put other types here
|- services
|  |- geolocation.test.tsx              // test for geolocation service
|  |- geolocation.tsx                   // main service for JSON/calling API and matching hospital with user
App.css
App.test.tsx
App.tsx                                 // component that starts it all, this kicks the service and feeds data to card
index.css
index.tsx
react-app-env.d.ts
serviceWorker.ts
```

### App Commands
#### `npm start` :runner:

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test` :pencil:

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build` :construction:

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
