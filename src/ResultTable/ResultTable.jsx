import React from "react";
import { formatter } from "../util/investment.js";

function ResultTable({ results = [] }) {
  if (!results || results.length === 0) {
    return <p className="center">No investment data available.</p>; // Show a message if no data is available
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>
              {formatter.format(
                row.valueEndOfYear - row.annualInvestment * row.year
              )}
            </td>
            <td>{formatter.format(row.annualInvestment * row.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
