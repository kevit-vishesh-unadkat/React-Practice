
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#6366f1",
  "#f59e0b",
  "#10b981",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#64748b"
];

function ExpenseChart({ transactions }) {
  const categoryData = Object.values(
    transactions
      .filter((item) => item.type === "expense")
      .reduce((result, item) => {
        if (!result[item.category]) {
          result[item.category] = {
            name: item.category,
            value: 0
          };
        }

        result[item.category].value += item.amount;

        return result;
      }, {})
  );

  return (
    <div className="panel chart-panel">
      <h3>Expense Breakdown</h3>

      {categoryData.length === 0 ? (
        <p className="empty-message">No expense data available.</p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip formatter={(value) => `₹${value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ExpenseChart;
