//import bootstrap.css first and then styles.css ; biruk did otherwise in here
import "./css/bootstrap.css";
import "./css/styles.css";


// Question 1: React API
// import shared route for apple youtube videos, music, and TV (SharedVideo: appleYoutubeVideos and Outlet: components sharing route with the video : music and TV )
import SharedVideo from "./routes/SharedRoutes/SharedVideo";

//  Question 2 and 3 : React Routing 
//import Route and Routes from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";

import Iphone from "./Pages/Iphone/Iphone"
import SingleAppleProduct from "./Pages/SingleAppleProduct/SingleAppleProduct"
// import  Shared Routes i.e. multiple Routes wrappers or (sharedLayout: Header and Footer and Outlet: other components sharing route with them; 
import SharedLayout from "./routes/SharedRoutes/SharedLayout"  



//Imports for bonus exercise
import Mac from "./Pages/Mac/Mac";
import Ipad from "./Pages/Ipad/Ipad";
import Watch from "./Pages/Watch/Watch";
import TV from "./Pages/TV/TV";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";

// import component for 404: page not found 
import Four04 from "./Pages/Four04/Four04";


//Bonus exercise on filtering phones by brand
import ListPhones from "./components/FilteringPhonesByBrandBonus/ListPhones";

import AppleYouTubeVideos from "./api/YouTubeAPIforApple/AppleYouTubeVideos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




// wrap those components dependent on routing by <Routes> </Routes>; i.e. all except header and footer; we don't want header and footer to be dependent on routes

function App() {
  return (
    <>
      {/* <h1>It is working fine</h1> */}
      {/* <ListPhones/> */}

      {/* put the youtube videos between Main and Footer */}
      {/* <Header/>
      <Main/>
      <AppleYouTubeVideos/>
      <Footer/> */}
      {/* <AppleYouTubeVideos /> */}
      <Routes>
        {/* SharedLayout's route tag is not self-closing  */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<AppleYouTubeVideos/>}/>
          <Route path="Mac" element={<Mac />} />
          <Route path="Iphone" element={<Iphone />} />
          {/* route for a single iphone product; when users type url "iphone/:productID"; render the single iphone product requested on ProductPage component  */}
          <Route path="iphone/:productID" element={<SingleAppleProduct />} />

          <Route path="Ipad" element={<Ipad />} />
          <Route path="Watch" element={<Watch />} />

          {/* Apple youtube videos appear below music and TV pages when they are clicked  */}
          <Route path="/" element={<SharedVideo />}>
            <Route path="TV" element={<TV />} />
            <Route path="Music" element={<Music />} />
          </Route>

          <Route path="support" element={<Support />} />
          <Route path= "search" element= {<Search/>}/>
          <Route path="cart" element={<Cart />} />
          {/* catch-all for 404 : the path could be "*" w/c represents any non-existign routes */}
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;

// Route component: define the r/p b/n a path and a component to be rendered when the path is matched. Route objects have 1) a path property, w/c specifies the path to match, and 2) an element property, w/c specifies the component to render
