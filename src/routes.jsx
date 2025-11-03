import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./componnents/features/layout/Applayout/Applayout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/Home" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
