// Import CSS styles for the component.
import "./add-product-form.styles.scss";

// Import necessary dependencies and functions from external modules.
import { useState } from "react";
import { addProduct } from "../../store/products/product.action";
import { selectProductsArray } from "../../store/products/product.selector";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

// Define the AddProductForm component.
function AddProductForm() {
  // Define state variables for form input values.
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  // Get the Redux dispatch function and products array from the store.
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);

  // Get the 'navigate' function from React Router to handle navigation.
  const navigate = useNavigate();

  // Function to handle adding a new product.
  const handelAddProduct = () => {
    // Create a new product object with form input values and a unique ID.
    const newProduct = {
      title,
      description,
      price: Number(price),
      rating: Number(rating),
      images: [image],
      id: Date.now(),
    };

    // Dispatch an action to add the new product to the Redux store.
    dispatch(addProduct(products, newProduct));

    // Show a notification using the 'toast' library.
    toast("Product Added TO db");

    // Navigate to the '/allProds' route.
    navigate("/allProds");
  };

  // Render the form with input fields for product information.
  return (
    <div className="form-container">
      <div className="add_prod_title">Add Product</div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image Url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="add-prod-button" onClick={handelAddProduct}>
        Add Product
      </button>
    </div>
  );
}

// Export the AddProductForm component.
export default AddProductForm;
