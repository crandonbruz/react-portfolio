import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import PortfolioContainer from "./components/PortfolioContainer";


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      {/* <NavTabs /> */}
      <PortfolioContainer/>
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
