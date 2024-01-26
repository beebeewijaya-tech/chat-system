import { createBrowserRouter } from "react-router-dom";

import Pages from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.Home />,
  },
  {
    path: "chat",
    element: <Pages.Chat />,
  },
]);

export default router;
