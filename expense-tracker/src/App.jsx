
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  // Load saved transactions when the application starts
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem("transactions");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save transactions whenever the state changes
  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  // CREATE
  const addTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  // DELETE
  const deleteTransaction = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    setTransactions((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // UPDATE
  const editTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((item) =>
        item.id === updatedTransaction.id
          ? updatedTransaction
          : item
      )
    );
  };

  // Calculate total income
  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  // Calculate total expenses
  const totalExpenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  // Calculate balance
  const balance = totalIncome - totalExpenses;

  return (
    <div className="app">
      <Navbar />

      <main className="dashboard">
        <div className="welcome-section">
          <div>
            <h1>Dashboard</h1>
            <p>Track and manage your money in one place.</p>
          </div>
        </div>

        <SummaryCards
          balance={balance}
          income={totalIncome}
          expenses={totalExpenses}
        />

        <div className="dashboard-grid">
          <TransactionForm
            onAddTransaction={addTransaction}
          />

          <ExpenseChart
            transactions={transactions}
          />
        </div>

        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
          onEdit={editTransaction}
        />
      </main>

      <footer className="footer">
        ExpenseTracker © 2026 | Manage your money better.
      </footer>
    </div>
  );
}

export default App;
