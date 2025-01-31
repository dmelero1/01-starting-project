import React, { useEffect } from "react";
import { calculateInvestmentResults } from "../util/investment";

function ResultTable() {
  /**duration, initialInvestment, annualInvestment, expectedReturn*/

  /* const investmentResults = calculateInvestmentResults((duration, initialInvestment, annualInvestment, expectedReturn)); */

  return (
    <table id="result">
      <thead>
        <tbody>
          <th>
            Year
            <tr>1</tr>
          </th>
          <th>
            Investment Value
            <tr>10000</tr>
          </th>
          <th>
            Interest (Year)
            <tr>600</tr>
          </th>
          <th>
            Totsl Interest
            <tr>600</tr>
          </th>
          <th>
            Invested Capital
            <tr>10600</tr>
          </th>
        </tbody>
      </thead>
    </table>
  );
}

export default ResultTable;
