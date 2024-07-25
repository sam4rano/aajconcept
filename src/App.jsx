import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";
import BoardContainer from "./components/BoardContainer";
import BoardMembers from "./components/BoardMenbers";
import HistoryContainer from "./components/HistoryContainer";
import History from "./components/History";
import AboutLayout from "./components/AboutLayout";
import About from "./components/About";




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<BoardContainer />}>
          <Route path="team" element={<BoardMembers />} />
        </Route>
        <Route element={<HistoryContainer />}>
          <Route path="services" element={<History />} />
        </Route>
        <Route element={<AboutLayout />} > 
        <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
