import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routerConfig from "./routes/router";

export default function App() {
  const router = createBrowserRouter(routerConfig);

  return <RouterProvider router={router} />;
}
