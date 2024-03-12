import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import router from "./router/routes";

import "slick-carousel/slick/slick-theme.css";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <QueryClientProvider client={queryClient} />
    </>
  );
}

export default App;
