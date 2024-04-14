import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./components/getUser/Users";
import AddUser from "./components/addUser/AddUser";
import UpdateUser from "./components/updateUser/UpdateUser";
import ViewUser from "./components/viewUser/ViewUser";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/edit/:id",
      element: <UpdateUser />,
    },
    {
      path: "/view/:id",
      element: <ViewUser />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route}>
        <h1 className="text-red-500">Hello</h1>
      </RouterProvider>
    </div>
  );
}

export default App;
