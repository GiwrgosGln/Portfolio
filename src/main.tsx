import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { injectSpeedInsights } from "@vercel/speed-insights";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

injectSpeedInsights();

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
