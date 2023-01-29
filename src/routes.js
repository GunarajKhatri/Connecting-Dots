
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Challange from "./components/challange";
import Featured from "./components/feature";
import PostChallenge from "./components/fillchallenge";
import ViewChallenge from "./components/viewchallenge";
import Solution from "./components/solution";
import Submissions from "./components/submissions";
import ViewSubmissions from "./components/viewsubmission";


export default createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/login",
        element:<Login />
        // element:(
        //   <Guest><Login /></Guest>
         
        // ),
      },
      {
      path: "/home",
      element:<Featured />
        // element:(
        //   <Guest><Login /></Guest>
         
        // ),
      },
      {
        path: "/register",
        element:<Login />
        // element: (
        //   <Guest>
        //     <Register />
        //   </Guest>
        // ),
      },
      {
        path: "/explore",
        element: <Challange />
      },
      {
        path: "/create/challenge",
        element: <PostChallenge />
      },
      {
        path: "/1/challenge",
        element: <ViewChallenge />
      },
      {
        path: "/1/challenge/solution",
        element: <Solution />
      },
      {
        path: "/challenge/submissions",
        element: <Submissions />
      },
      {
        path: "/1/challenge/submissions",
        element: <ViewSubmissions />
      },
     
    ],
  },
]);
