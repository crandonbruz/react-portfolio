import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
// import Error from "./pages/Error/Error";
// import About from "./pages/About/About";
// import Portfolio from "./pages/Portfolio/Portfolio";
// import Contact from "./pages/Contact/Contact";
// import Resume from "./pages/Resume/Resume";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/portfolio",
//         element: <Portfolio />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/resume",
//         element: <Resume />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
