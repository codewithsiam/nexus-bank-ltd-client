import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../config/ThemeConfig";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import useDesignation from "../Hooks/useDesignation";
import { AuthContext } from "../providers/AuthProvider";
import { MdCreateNewFolder, MdOutlineCreateNewFolder } from "react-icons/md";

const drawerWidth = 300;

// Admin menu
const adminMenu = [
  {
    name: "Analytics",
    icon: <PeopleAltIcon />,
    route: "analytics",
  },
  {
    name: "Employees",
    icon: <PeopleIcon />,
    route: "employees",
  },
  {
    name: "Accounts",
    icon: <AccountTreeIcon />,
    route: "accounts",
  },
  {
    name: "Add Latest News",
    icon: <MdCreateNewFolder/>,
    route: "AddLatestNews",
  },
  {
    name: "Account Requests",
    icon: <AccountBalanceWalletIcon />,
    route: "account-request",
  },
  {
    name: "Users",
    icon: <PeopleAltIcon />,
    route: "users",
  },
  {
    name: "Loan Request",
    icon: <AccountBalanceWalletIcon />,
    route: "loan-request",
  },
];

// Styled components
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // Necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
    backgroundColor: "#000",
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    backgroundColor: "#000",
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { user, isAdmin, logout } = React.useContext(AuthContext);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <div className="flex items-center mr-auto">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Nexus Bank Limited
              </Typography>
            </div>
            <div className="mr-4 flex gap-2 items-center">
              <div className="hidden  md:flex flex-col justify-center items-end">
                <h3 className="text-xs">
                  Welcome{" "}
                  <span className="font-semibold text-[18px]">
                    {user?.firstName} {user?.lastName}
                  </span>
                </h3>
                {/* todo  */}
                {user ? (
                  <p className="text-sm"> {user.designation}</p>
                ) : (
                  <p className="text-sm">Admin</p>
                )}
              </div>
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <ThemeProvider theme={lightTheme}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader className="text-xl font-semibold">
            <h2>Nexus Bank Ltd</h2>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {open === true && (
            <div className="flex flex-col items-center justify-center my-6 ">
              <img
                className="w-20 h-20 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <h2 className=" mt-4 font-semibold">{user?.displayName}</h2>
              <p>{user?.email}</p>
            </div>
          )}
          <List>
            {isAdmin &&
              adminMenu.map((menuItem, index) => (
                <ListItem
                  key={menuItem.name}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <Link to={menuItem.route}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {menuItem.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={menuItem.name}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
              <ListItem 
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <div onClick={logout} className="bg-red-400 rounded-full px-4 mx-7 font-bold mt-4" >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                      {/* icon  */}
                      </ListItemIcon>
                      <ListItemText
                        primary={"Log Out"}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </div>
                </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
      <Box
        className="bg-[rgb(241,245,249)] min-h-screen"
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
