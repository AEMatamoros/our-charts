# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Demo
### Follow the link for demo
https://our-expence-2g5fie2jn-aematamoros.vercel.app/

## Proyect Structure
    .
    ├── public
    │   ├── env.js
    │   ├── favicon.png
    │   ├── index.html
    │   ├── robots.txt
    │   └── manifest.json.ts                                                     
    ├── src  
    │   ├── app         
    │   │    ├── actions
    │   │    │    ├── categoryActions.tsx
    │   │    │    ├── productActions.tsx
    │   │    │    └──  trackActions.tsx
    │   │    ├── components
    │   │    │    ├── expense
    │   │    │    │    ├── Categories.tsx
    │   │    │    │    ├── Reports.tsx
    │   │    │    │    └── Tracker.tsx
    │   │    │    └── home
    │   │    │    │    └── home.tsx
    │   │    ├── interfaces
    │   │    │    │    ├── category.tsx
    │   │    │    │    ├── product.tsx
    │   │    │    │    └── track.tsx
    │   │    ├── layouts
    │   │    │    │    ├── Footer.tsx
    │   │    │    │    ├── Navbar.scss
    │   │    │    │    ├── Sideoptions.scss
    │   │    │    │    └── layaout.scss
    │   │    ├── reducers
    │   │    │    │    ├── CategoriesReducer.tsx
    │   │    │    │    ├── productsReducer.tsx
    │   │    │    │    ├── rootReducer.tsx
    │   │    │    │    └── trackReducer.tsx
    │   │    ├── shareds
    │   │    │    │    └── TrackCard.scss
    │   │    ├── store
    │   │    │    └── store.tsx
    │   │    └── types 
    │   │    │    └── types.tsx         
    │   ├── repositories 
    │   │        ├── category.repository.ts
    │   │        ├── product.repository.ts
    │   │        └── track.repository.ts 
    │   ├── services   
    │   │        ├── category.service.ts
    │   │        ├── product.service.ts
    │   │        └── track.service.ts 
    │   ├── assets   
    │   │        ├── Fonts
    │   │        └── Img  
    │   ├── helpers   
    │   │        ├── fetch.tsx
    │   │        └── trackAlerts.tsx       
    │   ├── App.css
    │   ├── App.test.tsx
    │   ├── App.tsx
    │   ├── colors.scss
    │   ├── index.scss
    │   ├── index.tsx
    │   ├── report.webVitals.ts
    │   ├── setupTest.ts
    │   └── react-app-env.d.ts
    ├── test    
    │   ├── app.e2e-spec.ts
    │   └── jest-e2e.json                  
    ├── .env
    ├── tsconfig.json
    ├── package-lock.json
    ├── package.json
    └── README.md


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
