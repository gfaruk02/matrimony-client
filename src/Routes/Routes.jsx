
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
// import PremiumProfilesDetails from "../pages/Home/PremiumProfiles/demoworks/PremiumProfilesDetails";
import Detailsbiodata from "../pages/Biodatas/Detailsbiodata";
import Dashboard from "../Layout/Dashboard";
import Fovarites from "../pages/Dashboard/Fovarites/Fovarites";
import EditBiodata from "../pages/Dashboard/EditBiodata/EditBiodata";
import ViewBiodata from "../pages/Dashboard/ViewBiodata/ViewBiodata";
import GotMarried from "../pages/Dashboard/GotMarried/GotMarried";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ApprovedPremium from "../pages/Dashboard/Admin/ApprovedPremium";
import ApprovedContactRequest from "../pages/Dashboard/Admin/ApprovedContactRequest";
import SuccessStory from "../pages/Dashboard/Admin/SuccessStory";
import Checkout from "../componets/Checkout";
import ContactRequest from "../pages/Dashboard/ContactRequest/ContactRequest";
import AdminRoute from "./AdminRoute";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import ErrorPage from "../componets/ErrorPage/ErrorPage";
import Faq from "../pages/Faq/Faq";
import FaqPost from "../pages/Dashboard/Admin/FaqPost";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/biodatas',
                element: <Biodatas></Biodatas>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/detailsbiodata/:_id',
                element: <PrivateRoute> <Detailsbiodata></Detailsbiodata> </PrivateRoute>,
                loader: () => fetch('https://matrimony-server-smoky.vercel.app/biodatas')
            },
            {
                path: '/checkout/:_id',
                element: <Checkout></Checkout>,
                loader: () => fetch('https://matrimony-server-smoky.vercel.app/biodatas')
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            //admin routes
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'approvedpremium',
                element: <AdminRoute><ApprovedPremium></ApprovedPremium></AdminRoute>
            },

            {
                path: 'approvedcontactrequest',
                element: <AdminRoute><ApprovedContactRequest></ApprovedContactRequest></AdminRoute>
            },
            {
                path: 'successStory',
                element: <AdminRoute><SuccessStory></SuccessStory></AdminRoute>
            },
            {
                path: 'faqpost',
                element: <AdminRoute> <FaqPost></FaqPost> </AdminRoute>
            },

            //user routes
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'favouritebiodata',
                element: <Fovarites></Fovarites>
            },
            {
                path: 'editbiodata',
                element: <EditBiodata></EditBiodata>
            },
            {
                path: 'viewbiodata',
                element: <ViewBiodata></ViewBiodata>
            },
            {
                path: 'contactrequest',
                element: <ContactRequest></ContactRequest>
            },
            {
                path: 'gotmarried',
                element: <GotMarried></GotMarried>
            }

        ]
    },
]);