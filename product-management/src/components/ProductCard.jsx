function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">

      <img
        src={product.thumbnail || "https://placehold.co/300x200?text=Product"}
        alt={product.title}
      />

      <div className="product-info">

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <div className="product-buttons">

          <button
            className="edit-btn"
            onClick={() => onEdit(product)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;