import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import "./styles/global.scss";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";

export const queryClient = new QueryClient();
function App() {
  const RequireAuth = ({ children }: { children: ReactNode }) => {
    return JSON.parse(localStorage.getItem("user") as string) != null ? (
      children
    ) : (
      <Navigate to={"/login"} />
    );
  };

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <RequireAuth>
              <Home />
            </RequireAuth>
          ),
        },
        {
          path: "/users",
          element: (
            <RequireAuth>
              <Users />
            </RequireAuth>
          ),
        },
        {
          path: "/users/:id",
          element: (
            <RequireAuth>
              <User />
            </RequireAuth>
          ),
        },
        {
          path: "/products",
          element: (
            <RequireAuth>
              <Products />
            </RequireAuth>
          ),
        },
        {
          path: "/products/:id",
          element: (
            <RequireAuth>
              <Product />
            </RequireAuth>
          ),
        },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
