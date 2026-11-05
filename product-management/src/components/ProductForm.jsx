function ProductForm({
  formData,
  setFormData,
  onSubmit,
  editingId,
  saving,
  onCancel,
}) {
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form className="product-form" onSubmit={onSubmit}>

      <h2>
        {editingId ? "Update Product" : "Add New Product"}
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Product Name"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formData.price}
        onChange={handleChange}
        min="0"
        step="0.01"
        required
      />

      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={saving}>
        {saving
          ? "Saving..."
          : editingId
          ? "Update Product"
          : "Add Product"}
      </button>

      {editingId && (
        <button
          type="button"
          className="cancel-btn"
          onClick={onCancel}
        >
          Cancel
        </button>
      )}

    </form>
  );
}

export default ProductForm;