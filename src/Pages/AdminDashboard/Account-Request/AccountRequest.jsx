import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RequestTable from "./RequestTable";
import { useScroll } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../../../config/server";

const AccountRequest = () => {
  const [accounts,setAccounts] =useState([]);
  const [control,setControl] = useState(false)
  console.log(accounts)
  useEffect(()=>{
    fetch(`${baseUrl}/requested-accounts`)
    .then(res=>res.json())
    .then(data=>setAccounts(data))
  },[control])
  return (
    <div>
      <h1 className="text-2xl font-bold mt-16 border-b-2 border-black">
        <AccountBalanceWalletIcon style={{ fontSize: "42" }} /> Account Requests
      </h1>
      <div className="mt-16">
        <RequestTable accounts={accounts && accounts} setAccounts={setAccounts} control={control} setControl={setControl} />
      </div>
    </div>
  );
};

export default AccountRequest;
