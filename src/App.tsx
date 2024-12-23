import "./core-ui/Global.css";
import { Navbar } from "./components/layouts";
import { MainRoute } from "./routes/routesConfig";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <div className="md:container md:mx-auto">
        <Navbar />
        <Routes>
          {MainRoute.map(({ path, component: Component, allowedRoles }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
