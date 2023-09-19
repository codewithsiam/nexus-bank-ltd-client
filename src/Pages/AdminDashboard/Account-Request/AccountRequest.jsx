import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RequestTable from "./RequestTable";
import { useScroll } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../../../config/server";
import SrcAndFilter from "./SrcAndFilter";
import LoadingComponent from "../../Shared/LoadingComponent/LoadingComponent";

const AccountRequest = () => {
  const [requestedAccounts,setRequestedAccounts] =useState([]);
  const [control,setControl] = useState(false);
  const [loading,setLoading] = useState(false)
  // console.log(accounts)
  useEffect(()=>{
    setLoading(true)
    fetch(`${baseUrl}/requested-accounts`)
    .then(res=>res.json())
    .then(data=>{
      setRequestedAccounts(data)
      setLoading(false)
    })
  },[control])

  if(loading){
    return <LoadingComponent/>
  }
  
  return (
    <div>
      {
        requestedAccounts.length > 0 ? <div>
        <h1 className="text-2xl font-bold mt-16 border-b-2 border-black">
          <AccountBalanceWalletIcon style={{ fontSize: "42" }} /> Account Requests
        </h1>
        <SrcAndFilter requestedAccounts={requestedAccounts && requestedAccounts} setRequestedAccounts={setRequestedAccounts}/>
        <div className="mt-16">
          <RequestTable requestedAccounts={requestedAccounts && requestedAccounts} setRequestedAccounts={setRequestedAccounts} control={control} setControl={setControl} />
        </div>
      </div>:<h2 className="text-2xl font-semibold mt-24 text-center">We have no Requested Account</h2>
      }
    </div>
  );
};

export default AccountRequest;
