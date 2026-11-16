
import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Salary",
    "Other"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount || Number(amount) <= 0) {
      alert("Please enter a valid title and amount.");
      return;
    }

    const transaction = {
      id: crypto.randomUUID(),
      title: title.trim(),
      amount: Number(amount),
      type,
      category,
      date
    };

    onAddTransaction(transaction);

    setTitle("");
    setAmount("");
    setType("expense");
    setCategory("Food");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className="panel">
      <h3>Add Transaction</h3>

      <form onSubmit={handleSubmit} className="transaction-form">
        <label>Transaction Name</label>
        <input
          type="text"
          placeholder="e.g. Grocery Shopping"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter amount"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label>Transaction Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit" className="primary-btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
