import { useState } from "react";
import Header from "./Header/Header";
import UserInput from "./UserInput/UserInput";
import ResultTable from "./ResultTable/ResultTable";

function App() {
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  const [initialInvestment, setInitialInvestment] = useState(10000);

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
      <ResultTable />
    </div>
  );
}

export default App;
