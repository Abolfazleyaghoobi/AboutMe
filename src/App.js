import "./App.css";
import { useRoutes } from "react-router-dom";
import { routers } from "./router";
function App() {
  let router = useRoutes(routers);
  return router;
}

export default App;
