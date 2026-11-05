import { useState, useEffect } from "react";

import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";

import "./App.css";

const API_URL = "https://dummyjson.com/products";

function App() {

  // Product State
  const [products, setProducts] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(true);

  // Saving State
  const [saving, setSaving] = useState(false);

  // Error State
  const [error, setError] = useState("");

  // Editing State
  const [editingId, setEditingId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });


  // 1. GET PRODUCTS

  async function fetchProducts() {

    try {

      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}?limit=12`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products);

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  }


  // 2. POST / PUT PRODUCT

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setSaving(true);
      setError("");

      const productData = {
        title: formData.title.trim(),
        price: Number(formData.price),
        description: formData.description.trim(),
      };

      // UPDATE PRODUCT

      if (editingId) {

        const response = await fetch(`${API_URL}/${editingId}`, {

          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(productData),

        });

        if (!response.ok) {
          throw new Error("Failed to update product");
        }

        const updatedProduct = await response.json();

        setProducts((previousProducts) =>
          previousProducts.map((product) =>
            product.id === editingId
              ? { ...product, ...updatedProduct }
              : product
          )
        );

        alert("Product updated successfully!");

      }

      // ADD PRODUCT

      else {

        const response = await fetch(`${API_URL}/add`, {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(productData),

        });

        if (!response.ok) {
          throw new Error("Failed to add product");
        }

        const newProduct = await response.json();

        setProducts((previousProducts) => [
          {
            ...newProduct,
            thumbnail: newProduct.thumbnail || "",
          },
          ...previousProducts,
        ]);

        alert("Product added successfully!");

      }

      // RESET FORM

      resetForm();

    } catch (error) {

      setError(error.message);

    } finally {

      setSaving(false);

    }

  }


  // 3. EDIT PRODUCT

  function handleEdit(product) {

    setEditingId(product.id);

    setFormData({
      title: product.title,
      price: product.price,
      description: product.description,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }


  // 4. DELETE PRODUCT

  async function handleDelete(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      await response.json();

      setProducts((previousProducts) =>
        previousProducts.filter((product) => product.id !== id)
      );

      alert("Product deleted successfully!");

    } catch (error) {

      setError(error.message);

    }

  }


  // 5. RESET FORM

  function resetForm() {

    setEditingId(null);

    setFormData({
      title: "",
      price: "",
      description: "",
    });

  }


  // 6. CALL API WHEN COMPONENT LOADS

  useEffect(() => {

    fetchProducts();

  }, []);


  // UI

  return (

    <div className="container">

      <h1>Product Management App</h1>

      <p className="subtitle">
        Manage your products using React and Fetch API
      </p>


      {/* PRODUCT FORM */}

      <ProductForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        editingId={editingId}
        saving={saving}
        onCancel={resetForm}
      />


      {/* ERROR MESSAGE */}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}


      {/* PRODUCT SECTION */}

      <div className="product-header">

        <h2>All Products ({products.length})</h2>

        <button onClick={fetchProducts}>
          Refresh Products
        </button>

      </div>


      {/* LOADING */}

      {loading && <h3>Loading products...</h3>}


      {/* PRODUCT LIST */}

      {!loading && !error && products.length === 0 && (
        <p>No products available.</p>
      )}

      {!loading && (

        <div className="product-grid">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          ))}

        </div>

      )}

    </div>

  );

}

export default App;