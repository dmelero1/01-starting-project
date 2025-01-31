import React from "react";

function UserInput({
  initialInvestment,
  setInitialInvestment,
  annualInvestment,
  setAnnualInvestment,
  expectedReturn,
  setExpectedReturn,
  duration,
  setDuration,
}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          type="number"
          value={annualInvestment}
          onChange={(e) => setAnnualInvestment(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="expectedReturn">Expected return</label>
        <input
          type="number"
          value={expectedReturn}
          onChange={(e) => setExpectedReturn(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserInput;
