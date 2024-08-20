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
import TeamContainer from "./components/TeamContainer";
import TeamMembers from "./components/TeamMembers";
import AboutLayout from "./components/AboutLayout";
import About from "./components/About";
// import ServicePage from "./components/ServicePage";
// import Service from "./components/Service";





const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<TeamContainer />}>
          <Route path="team" element={<TeamMembers />} />
        </Route>
        {/* <Route element={<ServicePage />}>
          <Route path="services" element={<Service />} />
        </Route> */}
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
