// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   // Convert image to base64
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => setImage(reader.result);
//     if (file) reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const res = await fetch("http://localhost:5000/api/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, description, image }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setMessage("✅ Product added successfully!");
//         setTimeout(() => navigate("/more-details"), 1000);
//       } else {
//         setMessage("❌ " + data.message);
//       }
//     } catch (err) {
//       console.error("Error adding product:", err);
//       setMessage("⚠️ Failed to add product");
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h1>Add Product</h1>
//       <form onSubmit={handleSubmit} className="add-product-form">
//         <label>Title:</label>
//         <input
//           type="text"
//           placeholder="Enter product title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <label>Description:</label>
//         <textarea
//           placeholder="Enter description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         ></textarea>

//         <label>Image:</label>
//         <input type="file" accept="image/*" onChange={handleImageChange} required />

//         <button type="submit">Add Product</button>
//       </form>

//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default AddProduct;







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [preview, setPreview] = useState(null);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   // ✅ Fetch all products from backend
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/products");
//       const data = await res.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // ✅ Convert image to base64 for preview + storage
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//       setPreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

  
//   // ✅ Submit new product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setLoading(true);



//     try {
//       const res = await fetch("http://localhost:5000/api/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, description, image }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setMessage("✅ Product added successfully!");
//         setTitle("");
//         setDescription("");
//         setImage("");
//         setPreview(null);
//         fetchProducts(); // refresh product list instantly
//       } else {
//         setMessage("❌ " + data.message);
//       }
//     } catch (err) {
//       console.error("Error adding product:", err);
//       setMessage("⚠️ Failed to add product");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Delete a product
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         setProducts(products.filter((product) => product._id !== id));
//       }
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h1>Add Product</h1>

//       <form onSubmit={handleSubmit} className="add-product-form">
//         <label>Title:</label>
//         <input
//           type="text"
//           placeholder="Enter product title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <label>Description:</label>
//         <textarea
//           placeholder="Enter description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         ></textarea>

//         <label>Image:</label>
//         <input type="file" accept="image/*" onChange={handleImageChange} required />

//         {preview && (
//           <div className="image-preview">
//             <img src={preview} alt="Preview" />
//           </div>
//         )}

//         <button type="submit" disabled={loading}>
//           {loading ? "Adding..." : "Add Product"}
//         </button>
//       </form>

//       {message && <p className="message">{message}</p>}

//       {/* ✅ Product list below the form */}
//       <h2 className="product-list-title">Added Products</h2>

//       {products.length === 0 ? (
//         <p className="no-products">No products added yet.</p>
//       ) : (
//         <div className="product-grid">
//           {products.map((product) => (
//             <div className="product-card" key={product._id}>
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="product-thumb"
//               />
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(product._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // ✅ Cloudinary configuration (replace with your credentials)
   const cloudName = "djuihd2af"; 
  const uploadPreset = "rjatlas";

  // ✅ Fetch all products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://squareone-server.onrender.com/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ Upload image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    if (!res.ok) throw new Error(result.error?.message || "Upload failed");
    return result.secure_url;
  };

  // ✅ Submit new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      let imageUrl = "";

      // Upload image to Cloudinary first
      if (image) {
        imageUrl = await uploadImageToCloudinary(image);
      }

      const res = await fetch("https://squareone-server.onrender.com/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, image: imageUrl }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Product added successfully!");
        setTitle("");
        setDescription("");
        setImage(null);
        setPreview(null);
        fetchProducts(); // refresh product list instantly
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error adding product:", err);
      setMessage("⚠️ Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`https://squareone-server.onrender.com/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} className="add-product-form">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} required />

        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>

      {message && <p className="message">{message}</p>}

      {/* ✅ Product list below the form */}
      <h2 className="product-list-title">Added Products</h2>

      {products.length === 0 ? (
        <p className="no-products">No products added yet.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-thumb"
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button
                className="delete-btn"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddProduct;
