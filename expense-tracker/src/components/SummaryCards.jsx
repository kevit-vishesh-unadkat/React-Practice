import { FaWallet,FaArrowDown,FaArrowUp } from "react-icons/fa";

function SummaryCards({balance,income,expenses}){
    const cards = [
    {
      title: "Total Balance",
      amount: balance,
      icon: <FaWallet />,
      className: "balance-card"
    },
    {
      title: "Total Income",
      amount: income,
      icon: <FaArrowDown />,
      className: "income-card"
    },
    {
      title: "Total Expenses",
      amount: expenses,
      icon: <FaArrowUp />,
      className: "expense-card"
    }
  ];

  const formatAmount=(amount)=>
    new Intl.NumberFormat("en-IN",{
        Style:"currency",
        currency:"INR",
        maximumFractionDigits:2
    }).format(amount);
  

    return (
        <div className="summary-grid">
      {cards.map((card) => (
        <div className={`summary-card ${card.className}`} key={card.title}>
          <div className="summary-header">
            <span>{card.title}</span>
            <div className="summary-icon">{card.icon}</div>
          </div>

          <h2>{formatAmount(card.amount)}</h2>
        </div>
      ))}
    </div>
    );
}

export default SummaryCards;