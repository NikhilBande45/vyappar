
import Partners from "./components/Partners/Partners";
import Hero from "./components/Hero/Hero";
import Accounts from "./components/Accounts/Accounts";
import Testinomial from "./components/Testinomial/Testinomial";
import Count from "./components/Counter/Count";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Partners/>
      <Count/>
      <Testinomial/>
      <Accounts/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
