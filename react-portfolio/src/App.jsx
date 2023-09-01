import { Outlet } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <PortfolioContainer />
      <Outlet />
    </>
  );
}

export default App;
