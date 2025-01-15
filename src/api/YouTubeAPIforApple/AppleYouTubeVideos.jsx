

// export default AppleYouTubeVideos; // Export the component for use in other parts of the app

import React, { useState, useEffect } from "react";// Import React and hooks
import "./AppleYouTubeVideos.css";
// dotenv: for managing environment variables (API keys and sensitive information)- to keep your code clean and secrets safe.
// Load .env variables
// require("dotenv").config();

// function AppleYouTubeVideos() {
//   const [videos, setVideos] = useState([]); // Initialize videos as an empty array
//   const [loading, setLoading] = useState(true); // Initialize loading state as true
//   const [error, setError] = useState(null); // Initialize error state as null

//  /* mixing string and values for API key and channel Id; so use template literal
//  `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=${process.env.REACT_APP_APPLE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=8`*/

//   useEffect(() => {
//         //   fetch( "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDcQ9m8OeHc0MgjB7dLEwmB5lptCz9u7_8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9")
//     fetch("/appleYoutubeVideos.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setVideos(data.items); // Update state with fetched video items
//       })
//       .catch((error) => {
//         console.log(error);
//         setError("Failed to fetch videos. Please try again later.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []); // Runs once on mount

//   if (loading) return <div>Loading...</div>; // Loading message
//   if (error) return <div>{error}</div>; // Error message



// function AppleYouTubeVideos() {
//   // initiate a state to hold the youtube videos and updater function; initial value of the array is empty; destrucure it and store it as const variable
//   const [videos, setVideos] = useState([]);

//   // fetch the data and display on the browser upon initial render; useEffect(()=>{},[]) : used to fetch data  ( vs MUD componentdidmount, didupdate, componentwillunmount in class-based component)

//   useEffect(() => {
//     // JS fetch method is asynchronous
//     fetch("/appleYoutubeVideos.json")
//       // fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDcQ9m8OeHc0MgjB7dLEwmB5lptCz9u7_8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9")

//       //logic for resolving the promise to an object ; using json() method on a string changes(parses) it to JSON
//       .then((res) => res.json())
//       // take only the items object from the JSON object since this is pertaining to the videos
//       .then((data) => {
//         //log the data; note we are interested with the data.items
//         console.log(data);

//         // update the state with the fetched object
//         setVideos(data.items);
//       })
//       .catch((error) => console.log(error));
//   }, []);

 const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 
  function AppleYouTubeVideos() {
    const [videos, setVideos] = useState([]); // Initialize videos as an empty array
    const [loading, setLoading] = useState(true); // Initialize loading state as true
    const [error, setError] = useState(null); // Initialize error state as null
  //  const API_KEY = import.meta.env.YOUTUBE_API_KEY; 

    useEffect(() => {
            // fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`)
              fetch("/appleYoutubeVideos.json")
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Network response was not ok");
                }
                return res.json();
              })
              .then((data) => {
                setVideos(data.items); // Update state with fetched video items
              })
              .catch((error) => {
                console.log(error);
                setError("Failed to fetch videos. Please try again later.");
              })
              .finally(() => {
                setLoading(false);
              });
    }, []); // Runs once on mount
    //  if we want to reset 

    if (loading) return <div>Loading...</div>; // Loading message
    if (error) return <div>{error}</div>; // Error message

  //Now that the state has been updated, log videos to see its current value
  console.log(videos);

  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1> Latest Videos</h1>
                <br />
              </div>
            </div>
            {/* question mark prior to map: optional chainning : map only if there is data fetched; this ensures that the application doesn't break if data fetching fails due to expired API Key */}
            {videos?.map((singleVideo, i) => {
              //create easy variable for videoId
              let vidId = singleVideo.id.videoId; //get video ID

              let vidLink = `https://www.youtube.com/watch?v=${vidId}`; // construct video link; same pattern for every video link
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      {/* video link via anchor link and then high quality video thumbnail (small img representation) via img*/}
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        {/* target_blank in anchor tag: linked video opens in a new tab; rel=no-opener & no-referrer info for privacy */}
                        <a
                          href={vidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              //return the videoWrapper
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppleYouTubeVideos;


// import React, { useState, useEffect } from "react"; // Import React and hooks
// import "./AppleYouTubeVideos.css"; // Import CSS for styling

// function AppleYouTubeVideos() {
//   const [videos, setVideos] = useState([]); // Initialize videos as an empty array
//   const [loading, setLoading] = useState(true); // Initialize loading state as true
//   const [error, setError] = useState(null); // Initialize error state as null

//  /* mixing string and values for API key and channel Id; so use template literal
//  `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=${process.env.REACT_APP_APPLE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=8`*/

//   useEffect(() => {
//         //   fetch( "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDcQ9m8OeHc0MgjB7dLEwmB5lptCz9u7_8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9")
//     fetch("/appleYoutubeVideos.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setVideos(data.items); // Update state with fetched video items
//       })
//       .catch((error) => {
//         console.log(error);
//         setError("Failed to fetch videos. Please try again later.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []); // Runs once on mount

//   if (loading) return <div>Loading...</div>; // Loading message
//   if (error) return <div>{error}</div>; // Error message

//   return (
//     <div>
//       <div className="allVideosWrapper">
//         <div className="container-fluid">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wrapper">
//                 <h1>Latest Videos</h1> {/* Title for the video section */}
//               </div>
//             </div>
//             {/* Map over videos to create a video card for each */}
//             {videos?.map((singleVideo) => {
//               const vidId = singleVideo.id.videoId; // Get video ID
//               const vidLink = `https://www.youtube.com/watch?v=${vidId}`; // Construct video link

//               return (
//                 <div key={vidId} className="col-12 col-md-6">
//                   <div className="singleVideoWrapper">
//                     <div className="videoThumbnail">
//                       <a href={vidLink} target="_blank" rel="noopener noreferrer">
//                         <img
//                           src={singleVideo.snippet.thumbnails.high.url} // Video thumbnail image
//                           alt={singleVideo.snippet.title} // Alt text for the image
//                         />
//                       </a>
//                     </div>
//                     <div className="videoInfoWrapper">
//                       <div className="videoTitle">
//                         <a href={vidLink} target="_blank" rel="noopener noreferrer">
//                           {singleVideo.snippet.title}
//                         </a>
//                       </div>
//                       <div className="videoDesc">
//                         {singleVideo.snippet.description} {/* Video description */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ); // Return the video card for each video
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
