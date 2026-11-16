
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

function TransactionList({
  transactions,
  onDelete,
  onEdit
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");

  const filteredTransactions = transactions.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || item.type === filter;

    return matchesSearch && matchesFilter;
  });

  const startEditing = (item) => {
    setEditingId(item.id);
    setEditTitle(item.title);
    setEditAmount(String(item.amount));
  };

  const saveEdit = (item) => {
    if (!editTitle.trim() || Number(editAmount) <= 0) {
      alert("Enter a valid title and amount.");
      return;
    }

    onEdit({
      ...item,
      title: editTitle.trim(),
      amount: Number(editAmount)
    });

    setEditingId(null);
  };

  const formatAmount = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR"
    }).format(amount);

  return (
    <div className="panel transactions-panel">
      <div className="list-header">
        <h3>Transaction History</h3>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Transactions</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="transaction-list">
        {filteredTransactions.length === 0 ? (
          <p className="empty-message">No transactions found.</p>
        ) : (
          filteredTransactions.map((item) => (
            <div className="transaction-item" key={item.id}>
              <div className="transaction-info">
                {editingId === item.id ? (
                  <div className="edit-fields">
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      aria-label="Edit transaction title"
                    />
                    <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={editAmount}
                      onChange={(e) => setEditAmount(e.target.value)}
                      aria-label="Edit transaction amount"
                    />
                    <button
                      onClick={() => saveEdit(item)}
                      className="save-btn"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <h4>{item.title}</h4>
                    <span>
                      {item.category} · {item.date}
                    </span>
                  </>
                )}
              </div>

              {editingId !== item.id && (
                <>
                  <strong className={
                    item.type === "income" ? "positive" : "negative"
                  }>
                    {item.type === "income" ? "+" : "-"}
                    {formatAmount(item.amount)}
                  </strong>

                  <div className="action-buttons">
                    <button
                      onClick={() => startEditing(item)}
                      aria-label="Edit transaction"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => onDelete(item.id)}
                      aria-label="Delete transaction"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TransactionList;
