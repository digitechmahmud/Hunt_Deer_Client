import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Pages/Routers/Routes/Routes";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
