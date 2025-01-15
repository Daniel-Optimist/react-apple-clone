// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import "./css/bootstrap.css";
// import "./css/styles.css";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/bootstrap.css";
import "./css/styles.css";
// import BrowserRouter from "react-router-dom" and wrap your app with it to make routing functionality available to your app
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);



// npm install react-router-dom  while in the react-apple project ; In vite the latest version is "react-router-dom": "^6.27.0"; it is different from the version in create-react-app; official website: https://reactrouter.com/en/main
{/* <BrowserRouter></BrowserRouter>; */}
// Browser-Router component : is used to wrap your applications and provides the routing functionality to our application 