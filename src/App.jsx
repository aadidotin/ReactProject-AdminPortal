import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./Layouts/Admin/AdminLayout";
import AddStudent from "@components/Admission/AddStudent";
import SampleForm from "@components/Admission/SampleForm";
import Auth from "@components/Auth/Auth";
import StudentsList from "@components/Admission/StudentsList";
import Profile from "@components/Profile/Profile";
import Branch from "@components/Branches/Branch";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Comming Soon</h1>,
    },
    {
      path: "/portal/",
      element: <AdminLayout />,
      errorElement: <h3>404 Page Not Found</h3>,
      children: [
        {
          path: "",
          element: <h4>Hello World !!!</h4>,
        },
        {
          path: "add-student",
          element: <AddStudent />,
        },
        {
          path: "students",
          element: <StudentsList />,
        },
        {
          path: "branch",
          element: <Branch />,
        },
        {
          path: "sample-forms",
          element: <SampleForm />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/portal/authenticate",
      element: <Auth />,
    },
    {
      path: "/*",
      element: <h3>404 Page Not Found</h3>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
