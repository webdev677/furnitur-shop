import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorRouter from "./routes/ErrorRouter";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorRouter />,
    children: [
      {
        path: "/",
        element: <Homepage />
      }
    ]
  },
  
]);


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
