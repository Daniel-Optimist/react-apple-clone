import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//this helps to fetch data from our server (database, backend)
function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const iphonejson = "/iphone.json";
    const backendApi = "http://localhost:3005/iphones";
    fetch(iphonejson)
    // fetch("/iphone.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);
        setProducts(data.products); // No need for an arrow function here
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  console.log(products);

  return (
    <div>
      {/* open tags for section and the divs sandwiching it  */}
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {/* Div for the iphones: best for brightest wrappers start here */}
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {/* Div for the iphones: best for brightest wrappers ends here */}

          {products?.map((product, index) => (
            // umbrella div within map logic starts here
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              {/* There are two div's (for product detail and product image) */}
              {/* Product Details start here */}
              <div
                className={`col-sm-12 col-md-6 order-sm-1 order-${
                  index % 2 === 0 ? 1 : 2
                }`}
              >
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">
                  {product.product_brief_description}
                </div>
                <div className="starting-price">{`Starting at ${product.starting_price}`}</div>
                <div className="monthly-price">{product.price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      {/* don't forget the slashes before and after iphone */}
                      <Link to={`/iphone/${product.product_url}`}>
                        Learn more
                      </Link>
                      {/* check if it works for hard coded static data  */}
                      {/* <Link to="/iphone/iphonese">Learn more</Link> */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* Product Details ends here */}

              {/* Product Image starts here */}
              <div
                className={`col-sm-12 col-md-6 order-sm-2 order-${
                  index % 2 === 0 ? 2 : 1
                }`}
              >
                <div className="product-image">
                  <img src={product.product_img} alt={product.product_name} />
                </div>
              </div>
              {/* Product Image ends here */}
            </div>
            // closing div tag above is for the umbrella div within map containing product detail and image divs; the map logic ends in the next line
          ))}
          {/* closing tags for section and the divs sandwiching it  */}
        </div>
      </section>
    </div>
  );
}
export default Iphone;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// //this helps to fetch data from our server (database, backend) and display it in front-end
// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     // fetch("http://localhost:3005/iphones");
//     fetch("/iphone.json")
//       // parse the fetched JSON string
//       .then((response) => {if (!response.ok) {
//         throw new Error ("Network response was not ok");
//       }
//       return  response.json()}) // ensure return is on the same line as the res.json() and no semicolon here
//       // update the state product value with the fetched data
//       .then((data) => {
//         console.log("Data fetched:", data); //log the fetched data
//         setProducts(() => data.products); // ? do we need arrow function here?
//       }) //no semicolon here
//       // log error if any
//       .catch((error) => console.log("Error fetching data:", error));
//   }, []);

//   //check if the state has really been updated
//   console.log(products);
// //   let flip = true; // Biruk's version to flip images and description right and left ; outside the loop
//   // let order = 1;
//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold">Iphones</div>
//               <div className="brief-description">
//                 The best for the brightest.
//               </div>
//             </div>
//           </div>

//           {/* easier method of flipping the iphone image and its decription sideways (right to left): use the index in the map w/c refers to the current index in each loop ; my-auto-order-index*/}
//           {/* question mark prior to .map optional chainning: If product is undefined or null, the code won’t throw an error—it will simply return undefined  */}
//           {products?.map((product, index) => {
//             let productDiv = (
//               <div
//                 key={product.product_url}
//                 className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
//               >
//                 {/* notice location of the  description (name,desc, price) : my-auto-order-(index#: if even then 1 else 2) ; see the one for image which is opposite to this one*/}
//                 <div
//                   className={`col-sm-12 col-md-6 my-auto-order-${
//                     index % 2 === 0 ? "1" : "2"
//                   }`}
//                 >
//                   <div className="product-title">{product.product_name}</div>
//                   <div className="product-brief">
//                     {product.product_brief_description}
//                   </div>
//                   <div className="starting-price">
//                     {`Starting at ${product.starting_price}`}{" "}
//                   </div>
//                   <div className="monthly-price">{product.price_range}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         {/* when Learn more is clicked go to (link to) path /iphone/product.product_url e.g. iphone/iphone14 */}
//                         <Link to={`iphone/${product.product_url}`}>
//                           Learn more
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div
//                 //  my-auto-order-(index#: if even then 2 (right) else 1(left)) ; see the one for description above (name, desc, price) which is opposite to this one
//                   className={`col-sm-12 col-md-6 order-${
//                     index % 2 === 0 ? "2" : "1" }`}>
//                   <div className="product-image">
//                     <img src={product.product_img} alt={product.product_name} />
//                   </div>
//                 </div>
//               </div>
//             );
//             return productDiv;
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }
// export default Iphone;

// function Iphone() {
//   return (
//     <div>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12 mt-5 pt-5">
//               {/* div changed to h1; title-wraper bold--changed to  */}
//               <h1 className="font-weight-bold">Iphone Page</h1>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Iphone
