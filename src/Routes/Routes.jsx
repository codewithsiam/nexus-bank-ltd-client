import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import OpenAccount from "../Pages/UserDashboard/OpenAccount/OpenAccount";
import MyProfile from "../Pages/UserDashboard/ProfileManage/MyProfile/MyProfile";
import ApplyLoan from "../Pages/UserDashboard/ApplyLoan/ApplyLoan";
import Contact from "../Pages/Contact/Contact";
import TransactionHistory from "../Pages/UserDashboard/TransactionHistory/TransactionHistory";
import AddMoney from "../Pages/UserDashboard/AddMoney/AddMoney";
import Dashboard from '../Layouts/Dashboard'
import AdminDashboard from '../Pages/AdminDashboard/Dashboard/AdminDashboard'
import Employees from "../Pages/AdminDashboard/Employees/Employees";
import Users from "../Pages/AdminDashboard/Users/Users";
import Analytics from "../Pages/AdminDashboard/Analytics/Analytics";
import SavingAccountForm from "../Pages/UserDashboard/OpenAccount/Accounts/SavingAccount/SavingAccountForm";
import AboutDetails from "../Pages/Home/About/AboutDetails/AboutDetails";
import BlogPage from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ChatUs from "../Pages/Chat/ChatUs";
import PrivetRout from "./PrivetRout";
import EditProfile from "../Pages/UserDashboard/ProfileManage/EditProfile/EditProfile";
import TransferMoney from "../Pages/UserDashboard/TransferMoney/TransferMoney";
import { baseUrl } from "../config/server";
import AccountRequest from "../Pages/AdminDashboard/Account-Request/AccountRequest";
import Accounts from "../Pages/AdminDashboard/Accounts/Accounts";
import LoanRequest from "../Pages/AdminDashboard/LoanRequest/LoanRequest";
import Feedback from "../Pages/AdminDashboard/LoanRequest/Feedback";
import UserProfile from "../Pages/AdminDashboard/Users/UserProfile";
import CreditCardApply from "../Pages/UserDashboard/MyProfile/CardTab/CreditCardApply/CreditCardApply";
import Careers from "../Pages/Careers/Careers";
import FundTransfer from "../Pages/UserDashboard/FundTransfer/FundTransfer/FundTransfer";
import CardBeneficiaryList from "../Pages/UserDashboard/CardServices/CardBeneficiaryList/CardBeneficiaryList";
import AccountBeneficiaryList from "../Pages/UserDashboard/FundTransfer/FundTransferBeneficiary/AccountBeneficiaryList";
import MobilTopUpHistory from "../Pages/UserDashboard/TopUp/MobilTopUpHistory/MobilTopUpHistory";
import AddBeneficiary from "../Pages/UserDashboard/AddBeneficiary/AddBeneficiary";
import EStatement from "../Pages/UserDashboard/E-statement/EStatement";
import PaymentPinVerification from "../Pages/UserDashboard/CardServices/PaymentPinVerification/PaymentPinVerification";
import AccountOverview from "../Pages/UserDashboard/AccountOverview/AccountOverview";
import PasswordChange from "../Pages/UserDashboard/ProfileManage/PasswordChange/PasswordChange";
import CurrentAccount from "../Pages/UserDashboard/OpenAccount/Accounts/CurrentAccount/CurrentAccount";
import StudentAccount from "../Pages/UserDashboard/OpenAccount/Accounts/StudentAccount/StudentAccount";
import AdminDashboardLayout from "../Layouts/AdminDashboardLayout";
import TopUpBeneficiaryList from "../Pages/UserDashboard/TopUp/TopUpBeneficiaryList/TopUpBeneficiaryList";
import FundTransferPin from "../Pages/UserDashboard/FundTransfer/FundTransferPin/FundTransferPin";
import MyAccounts from "../Pages/UserDashboard/MyAccounts/MyAccounts";
import BkashFundTransfer from "../Pages/UserDashboard/BkashTransfer/BkashFundTransfer/BkashFundTransfer";
import PaymentSuccessful from "../Pages/UserDashboard/CardServices/PaymentPinVerification/PaymentSuccessful";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/chat',
        element:<PrivetRout><ChatUs></ChatUs></PrivetRout>
      },
      {
        path: "aboutDetails",
        element: <AboutDetails></AboutDetails>,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // ..........User dashboard routes............
      {
        path: "account-overview",
        element: <AccountOverview />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />
      },
      {
        path: "change-password",
        element: <PasswordChange />
      },    
      {
        path: "saving-account",
        element: <OpenAccount />
      },
      {
        path:"current-account",
        element:<CurrentAccount/>
      },
      {
        path:"student-account",
        element:<StudentAccount/>
      },
      {
        path: "apply-loan",
        element: <ApplyLoan />,
      },
      {
        path: "Fund-transfer",
        element: <FundTransfer/>,
      },
      {
        path: "fund-transfer-pin-verification",
        element: <FundTransferPin/>,
      },
      {
        path: "topup-beneficiary-list",
        element: <TopUpBeneficiaryList/>,
      },
      {
        path: "card-beneficiary-list",
        element: <CardBeneficiaryList/>,
      },
      {
        path: "FundTransferBeneficiaryList",
        element: <AccountBeneficiaryList/>,
      },
      {
        path: "MobilTopUpHistory",
        element: <MobilTopUpHistory/>,
      },
      {
        path: "FundTransferBeneficiaryList/AddBeneficiary",
        element: <AddBeneficiary/>,
      },
      {
        path: "add-money",
        element: <AddMoney />,
      },
      {
        path: "transfer-money",
        element: <TransferMoney />,
      },
      {
        path: 'saving-account',
        element: <SavingAccountForm />
      },

      // {
      //   path: "checkout",
      //   element: <StripePayment />,
      // },
      {
        path: "transaction-history",
        element: <TransactionHistory />,
      },
      {
        path: "e-statement",
        element: <EStatement />,
      },
      {
        path: "bkash-fund-transfer",
        element: <BkashFundTransfer />,
      },
      {
        path: "verify-pin",
        element: <PaymentPinVerification />,
      },
      {
        path: "payment-successfull",
        element: <PaymentSuccessful />,
      },
      {
        path: "credit-card-apply",
        element: <CreditCardApply />,
      },


      {
        path: "my-accounts",
        element: <MyAccounts />,
      },
    ],
  },
  // admin dashboard 
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      // ..................admin dashboard routes........................
      {
        path: "adminDashboard",
        element: <AdminDashboard />
      },
      {
        path: "employees",
        element: <Employees />
      },
      {
        path: "users",
        element: <Users />,
        loader:() => fetch(`${baseUrl}/users`)
      },
      {
        path:'users/:email',
        element:<UserProfile></UserProfile>

      },
      {
        path:"accounts",
        element:<Accounts/>
      },
      {
        path:"account-request",
        element:<AccountRequest/>
      },
      {
        path: "analytics",
        element: <Analytics />
      },
      {
        path: "loan-request",
        element: <LoanRequest />,
        loader:() => fetch(`${baseUrl}/loans`)
      },
      {
        path: "feedback/:id",
        element: <Feedback/>
      }
    ],
  },
]);

export default router;