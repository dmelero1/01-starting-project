import { useState } from "react";
import Header from "./Header/Header";
import UserInput from "./UserInput/UserInput";
import ResultTable from "./ResultTable/ResultTable";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  const [initialInvestment, setInitialInvestment] = useState(10000);

  const inputIsValid = UserInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  const investmentResults =
    duration > 0
      ? calculateInvestmentResults({
          initialInvestment,
          annualInvestment,
          expectedReturn,
          duration,
        })
      : [];

  return (
    <div>
      <Header />
      <UserInput
        annualInvestment={annualInvestment}
        setAnnualInvestment={setAnnualInvestment}
        expectedReturn={expectedReturn}
        setExpectedReturn={setExpectedReturn}
        duration={duration}
        setDuration={setDuration}
        initialInvestment={initialInvestment}
        setInitialInvestment={setInitialInvestment}
      />
      <ResultTable result={investmentResults} />
    </div>
  );
}

export default App;
