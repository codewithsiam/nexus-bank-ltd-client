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
import Dashboard from "../Layouts/Dashboard";
import AdminDashboard from "../Pages/AdminDashboard/Dashboard/AdminDashboard";
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

import MobilTopUpHistory from "../Pages/UserDashboard/TopUp/MobilTopUpHistory/MobilTopUpHistory";
import EStatement from "../Pages/UserDashboard/E-statement/EStatement";
import PaymentPinVerification from "../Pages/UserDashboard/CardServices/PaymentPinVerification/PaymentPinVerification";
import AccountOverview from "../Pages/UserDashboard/AccountOverview/AccountOverview";
import PasswordChange from "../Pages/UserDashboard/ProfileManage/PasswordChange/PasswordChange";
import CurrentAccount from "../Pages/UserDashboard/OpenAccount/Accounts/CurrentAccount/CurrentAccount";
import StudentAccount from "../Pages/UserDashboard/OpenAccount/Accounts/StudentAccount/StudentAccount";
import AdminDashboardLayout from "../Layouts/AdminDashboardLayout";
import TopUpBeneficiaryList from "../Pages/UserDashboard/TopUp/TopUpBeneficiaryList/TopUpBeneficiaryList";
import FundTransferPin from "../Pages/UserDashboard/FundTransfer/FundTransferPin/FundTransferPin";
import AddLatestNews from "../Pages/AdminDashboard/AddLatestNews/AddLatestNews";
import AddBeneficiary from "../Pages/UserDashboard/AddBeneficiary/AddBeneficiary";
import MyAccounts from "../Pages/UserDashboard/MyAccounts/MyAccounts";
import BkashFundTransfer from "../Pages/UserDashboard/BkashTransfer/BkashFundTransfer/BkashFundTransfer";
import PaymentSuccessful from "../Pages/UserDashboard/CardServices/PaymentPinVerification/PaymentSuccessful";
import DepositAccount from "../Pages/UserDashboard/OpenAccount/Accounts/DepositAccount/DepositAccount";
import PaymentStatusPage from "../Pages/UserDashboard/BkashTransfer/PaymentStatus/PaymentStatusPage";
import AdminLogin from "../Pages/AdminDashboard/AdminLogin/AdminLogin";
import AdminSecureRoute from "./AdminSecureRoute";
import UserSecureRoute from "./UserSecureRoute";
import AccountBeneficiaryList from "../Pages/UserDashboard/FundTransfer/FundTransferBeneficiary/AccountBeneficiaryList";



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
        path: "/chat",
        element: (
          <PrivetRout>
            <ChatUs></ChatUs>
          </PrivetRout>
        ),
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
        element: (
          <UserSecureRoute>
            <AccountOverview />
          </UserSecureRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <UserSecureRoute>
            <MyProfile />,
          </UserSecureRoute>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <UserSecureRoute>
            <EditProfile />
          </UserSecureRoute>
        ),
      },
      {
        path: "change-password",
        element: (
          <UserSecureRoute>
            <PasswordChange />
          </UserSecureRoute>
        ),
      },
      {
        path: "saving-account",
        element: (
          <UserSecureRoute>
            <OpenAccount />
          </UserSecureRoute>
        ),
      },
      {
        path: "current-account",
        element: (
          <UserSecureRoute>
            <CurrentAccount />
          </UserSecureRoute>
        ),
      },
      {
        path: "student-account",
        element: (
          <UserSecureRoute>
            <StudentAccount />
          </UserSecureRoute>
        ),
      },
      {
        path: "deposit-account",
        element: (
          <UserSecureRoute>
            <DepositAccount />
          </UserSecureRoute>
        ),
      },
      {
        path: "apply-loan",
        element: (
          <UserSecureRoute>
            <ApplyLoan />
          </UserSecureRoute>
        ),
      },
      {
        path: "Fund-transfer",
        element: (
          <UserSecureRoute>
            <FundTransfer />
          </UserSecureRoute>
        ),
      },
      {
        path: "fund-transfer-pin-verification",
        element: (
          <UserSecureRoute>
            <FundTransferPin />
          </UserSecureRoute>
        ),
      },
      {
        path: "topup-beneficiary-list",
        element: (
          <UserSecureRoute>
            <TopUpBeneficiaryList />
          </UserSecureRoute>
        ),
      },
      {
        path: "card-beneficiary-list",
        element: (
          <UserSecureRoute>
            <CardBeneficiaryList />
          </UserSecureRoute>
        ),
      },
      {
        path: "FundTransferBeneficiaryList",
        element: (
          <UserSecureRoute>
            <AccountBeneficiaryList />
          </UserSecureRoute>
        ),
      },
      {
        path: "MobilTopUpHistory",
        element: (
          <UserSecureRoute>
            <MobilTopUpHistory />
          </UserSecureRoute>
        ),
      },
      {
        path: "FundTransferBeneficiaryList/AddBeneficiary",
        element: (
          <UserSecureRoute>
            <AddBeneficiary />
          </UserSecureRoute>
        ),
      },
      {
        path: "add-money",
        element: (
          <UserSecureRoute>
            <AddMoney />,
          </UserSecureRoute>
        ),
      },
      {
        path: "transfer-money",
        element: (
          <UserSecureRoute>
            <TransferMoney />
          </UserSecureRoute>
        ),
      },
      {
        path: "saving-account",
        element: (
          <UserSecureRoute>
            <SavingAccountForm />
          </UserSecureRoute>
        ),
      },

      // {
      //   path: "checkout",
      //   element: <StripePayment />,
      // },
      {
        path: "transaction-history",
        element: (
          <UserSecureRoute>
            <TransactionHistory />
          </UserSecureRoute>
        ),
      },
      {
        path: "e-statement",
        element: (
          <UserSecureRoute>
            <EStatement />
          </UserSecureRoute>
        ),
      },
      {
        path: "bkash-fund-transfer",
        element: (
          <UserSecureRoute>
            <BkashFundTransfer />
          </UserSecureRoute>
        ),
      },
      {
        path: "verify-pin",
        element: (
          <UserSecureRoute>
            <PaymentPinVerification />
          </UserSecureRoute>
        ),
      },
      {
        path: "payment-successfull",
        element: (
          <UserSecureRoute>
            <PaymentSuccessful />
          </UserSecureRoute>
        ),
      },
      {
        path: "credit-card-apply",
        element: (
          <UserSecureRoute>
            <CreditCardApply />
          </UserSecureRoute>
        ),
      },
      {
        path: "my-accounts",
        element: (
          <UserSecureRoute>
            <MyAccounts />
          </UserSecureRoute>
        ),
      },
    ],
  },
  // admin dashboard
  {
    path: "/admin",
    element: (
      <AdminSecureRoute>
        <AdminDashboardLayout />
      </AdminSecureRoute>
    ),
    children: [
      // ..................admin dashboard routes........................
      {
        path: "adminDashboard",
        element: (
          <AdminSecureRoute>
            <AdminDashboard />
          </AdminSecureRoute>
        ),
      },
      {
        path: "employees",
        element: (
          <AdminSecureRoute>
            <Employees />
          </AdminSecureRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminSecureRoute>
            <Users />
          </AdminSecureRoute>
        ),
        loader: () => fetch(`${baseUrl}/users`),
      },
      {
        path: "users/:email",
        element: (
          <AdminSecureRoute>
            <UserProfile />
          </AdminSecureRoute>
        ),
      },
      {
        path: "accounts",
        element: (
          <AdminSecureRoute>
            <Accounts />,
          </AdminSecureRoute>
        ),
      },
      {
        path: "account-request",
        element: (
          <AdminSecureRoute>
            <AccountRequest />,
          </AdminSecureRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <AdminSecureRoute>
            <Analytics />,
          </AdminSecureRoute>
        ),
      },
      {
        path: "AddLatestNews",
        element: <AddLatestNews />
      },
      {
        path: "loan-request",
        element: (
          <AdminSecureRoute>
            <LoanRequest />,
          </AdminSecureRoute>
        ),
        loader: () => fetch(`${baseUrl}/loans`),
      },
      {
        path: "feedback/:id",
        element: (
          <AdminSecureRoute>
            <Feedback />,
          </AdminSecureRoute>
        ),
      },
      {
        path: "change-password",
        element: (
          <AdminSecureRoute>
            <PasswordChange />,
          </AdminSecureRoute>
        ),
      },
    ],
  },
  {
    path: "/payment-status/:success",
    element: <PaymentStatusPage />,
  },
  {
    path: "admin-login",
    element: <AdminLogin />,
  },
]);

export default router;
