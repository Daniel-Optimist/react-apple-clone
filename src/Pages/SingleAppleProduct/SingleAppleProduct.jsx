
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

// This helps to fetch data from our server (database, backend) and display it in front-end
function SingleAppleProduct() {
  // Singular form of product used unlike the previous question focusing on displaying multiple iPhone products
  const [product, setProduct] = useState([]);

  // useParams hook accesses parameters from the current route
  // console.log(useParams())
  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    const localjson= "/iphone.json"
    const backendApi = "http://localhost:3005/iphones"  
    fetch(backendApi)
      // Parse the fetched JSON string
      .then((res) => res.json()) //no semicolon here
      // Update the state product value with the fetched data
      .then((data) => {
        const productList = data.products;
        // console.log(productList) // Fetches all the 5 iPhone products entered in the database
        // Filter only the iPhone whose product.product_url key stored in our database matches the URL tail accessed via useParams and store this in a variable called singleProduct
        const singleProduct = productList.filter(
          (product) => product.product_url === productID
        );
        // Update our state with this single product
        setProduct(singleProduct);
      }) //no semicolon here
      // Log error if any
      .catch((error) => console.log("Error: unable to fetch!!"));
  }, [productID]); // Render only for productID

  // Check if the state has really been updated (it was initially empty when declared)
  console.log(product);

  // if product length <> 0 (proper tail) then display the singleproduct page, else if the array is empty then display the Four04 page
  if (product.length) {
    return (
      <div>
        {/* top-100 className removed */}
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {/* /* To display the productID (the tail of the URL provided by the user accessed via useParams) 
            <br />
            <br />
            <br /> <h1>{productID}</h1> */}
            {/* Easier method of flipping the iPhone image and its description sideways (right to left): use the index in the map which refers to the current index in each loop; my-auto-order-index */}
            {/* index not needed in map because only single product */}
            {product?.map((product, index) => {
              return (
                <div key={product.product_id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5 pt-5">
                      <div className="title-wrapper font-weight-bold">
                        {product.product_name}
                      </div>

                      <div className="brief-description">
                        {product.product_brief_description}
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center text-center product-holder h-100 m-5">
                    <div className="col-sm-12 col-md-6 my-auto">
                      <div className="starting-price">
                        {`Starting at ${product.starting_price}`}
                      </div>
                      <div className="monthly-price">{product.price_range}</div>
                      <div className="product-details">
                        {product.product_description}
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 my-auto">
                      <div className="product-image">
                        <img src={product.product_img} alt="product" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default SingleAppleProduct;




// import React, { useState, useEffect } from "react"; // Import React and hooks
// import { useParams } from "react-router-dom"; // Import useParams for accessing URL parameters
// import Four04 from "../Four04/Four04"; // Import 404 component for not found handling

// // Component to display a single Apple product
// function SingleAppleProduct() {
//   const [product, setProduct] = useState(null); // State to hold the fetched product, initialized to null
//   const { productID } = useParams(); // Extract productID from URL parameters

//   useEffect(() => {
//     // Effect to fetch product data when the component mounts or productID changes
//     fetch("http://localhost:3005/iphones") // Fetch all iPhone data from the server
//       .then((res) => {
//         // Check if the response is ok (status in the range 200-299)
//         if (!res.ok) throw new Error("Network response was not ok"); // Throw error if not ok
//         return res.json(); // Parse the JSON data from the response
//       })
//       .then((data) => {
//         // Find the product that matches the productID from the URL
//         const singleProduct = data.products.find(
//           (product) => product.product_url === productID
//         );
//         setProduct(singleProduct); // Update state with the found product
//       })
//       .catch((error) => console.log("Error: unable to fetch!!", error)); // Log any errors during the fetch
//   }, [productID]); // Dependency array, re-run effect if productID changes

//   // Check if product is not found (still null)
//   if (!product) {
//     return <Four04 />; // Render the Four04 component if product is null
//   }

//   // Render the product details if found
//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <h1>{product.product_name}</h1> {/* Display the product name */}
//           <div className="product-details">
//             <img src={product.product_img} alt={product.product_name} /> {/* Display product image */}
//             <div>{product.product_brief_description}</div> {/* Display brief description */}
//             <div>{`Starting at ${product.starting_price}`}</div> {/* Display starting price */}
//             <div>{product.product_description}</div> {/* Display full product description */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SingleAppleProduct; // Export the component for use in other parts of the app

