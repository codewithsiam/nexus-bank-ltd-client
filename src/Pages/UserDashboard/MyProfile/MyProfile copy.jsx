import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaFacebook, FaInstagram, FaPencilAlt, FaTwitter, FaUser, FaMobileAlt } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
import {BiLogoGmail} from "react-icons/bi"
import {ImLocation} from "react-icons/im"

const myProfileData = [
    {
      id: 1,
      photoURL: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-1.jpg',
      firstName: "Rukshana Akter",
      nickname: "Rupu",
      email: "rupu.tht@gmail.com",
      facebook: "facebook.com/rukshana.2015",
      number: +8801791687736,
      address: "tongi, Gazipur, Dhaka",
      profession: "Front end developer",
      accountNumber: 441965406712489,
      balance: 40000,
      bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
];

const Profile = () => {
    // const { user } = useContext(AuthContext);
    const user = myProfileData[0];
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [transactionSuccess, setTransactionSuccess] = useState(false);
    console.log(user)

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    
    if (transactionType === 'withdraw' && parseFloat(amount) > myProfileData[0].balance) {
        setError('Insufficient balance');
        return;
    }
  
      // Simulate deposit and withdraw logic with a delay
    setTimeout(() => {
        const newBalance = transactionType === 'deposit'
          ? myProfileData[0].balance + parseFloat(amount)
          : myProfileData[0].balance - parseFloat(amount);
  
        // Update user balance and perform necessary actions
        // You can make an API call or use a state management library here
  
        setTransactionSuccess(true);
    }, 1000);

    
    const handleTransaction = () => {
        setError('');
        setTransactionSuccess(false);

        if (isNaN(amount) || parseFloat(amount) <= 0) {
        setError('Invalid amount');
        return;
        }

    };

    const {photoURL,nickname,firstName,profession,email,facebook, bio,number,address,accountNumber,balance} = user;
    // nav-btn  
    return (
        <div className=" pt-10">
            <div class="relative w-full text-white">
                <img src="https://i.ibb.co/3rg7VGN/profile-banner.jpg" class="w-full h-[430px]" alt="Louvre"/>
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 opacity-70"></div>
                <div className=" pl-5 md:pl-10 lg:pl-20 absolute top-16">
                    <h1 className="text-4xl">Hellow {nickname}</h1>
                    <p>This is your profile page. You can see the all history and you can update your profile.</p>
                    <div className="">
                        <div className="inline-block overflow-hidden mt-4">
                        <a href="#" className="flex gap-1 items-center border-2 border-white nav-btn text-white cursor-pointer px-3 py-2"><FaPencilAlt className="mr-1"></FaPencilAlt> Edit my profile</a>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className="-mt-[100px] flex gap-10 container px-[50px] text-black">
                <div className="pt-[140px] w-[700px] text-center border bg-white relative mb-7 p-5 rounded shadow-xl border-1 border-white">
                    <div className="absolute -top-[90px] left-[100px] mb-4 shadow-lg p-1 nav-btn
                    rounded-full ">
                        <img className=" rounded-full w-[200px] h-[200px]" src={photoURL} alt="user"/>
                    </div>
                    <div className="">
                        <h4 className="text-3xl font-semibold">{firstName}</h4>
                        <h3 className="text-md">{profession}</h3>
                        <div className="text-xl mt-3">
                            <h1 className="flex gap-2 items-center"><BiLogoGmail className="text-[#004d6e] text-3xl"></BiLogoGmail> {email}</h1>
                            <h1 className="flex gap-2 items-center my-2"><FaMobileAlt className="text-[#004d6e] text-3xl"></FaMobileAlt> {facebook}</h1>
                            <h1 className="flex gap-2 items-center"><ImLocation className="text-[#004d6e] text-3xl"></ImLocation> {address}</h1>
                        </div>
                        <ul className="flex justify-center items-center gap-5 mt-4 text-xl">
                            <li className="hover:border hover:border-[#6200ea] bg-[#004d6e] hover:bg-white bg-blue text-white p-2 hover:text-[#6200ea]"><a href="#!"><FaFacebook/></a></li>
                            <li className="hover:border hover:border-[#6200ea] bg-[#004d6e] hover:bg-white text-white p-2 hover:text-[#6200ea]"><a href="#!"><FaInstagram/></a></li>
                            <li className="hover:border hover:border-[#6200ea] bg-[#004d6e] hover:bg-white bg-blue text-white p-2 hover:text-[#6200ea]"><a href="#!"><FaTwitter/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="px-5 relative overflow-hidden ">
                <div className="relative overflow-hidden mb-7 bg-white p-5 rounded shadow-xl border-1 border-white">
                    <h4 className="font-bold text-yellow-700 text-2xl flex gap-1"><FaUser></FaUser> User Details</h4>
                    <p className="my-4 ">{bio}</p>
                    <div className="">
                        <table className="responsive-table bordered">
                            <tbody>
                                <tr className="text-xl">
                                    <td className="font-semibold">Account Number</td>
                                    <td className="py-1 pl-1 pr-2">:</td>
                                    <td>{accountNumber}</td>
                                </tr>
                                <tr className="text-xl">
                                    <td className="font-semibold">Total Balance</td>
                                    <td className="py-1 pl-1 pr-2">:</td>
                                    <td>{balance.toFixed(2)} tk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg shadow-xl">
                        <div className="transaction-form">
                        <label htmlFor="amount" className="block font-semibold mb-1">Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            className="block w-full p-2 border border[#ccc] rounded mb-2"
                        />
                        <label htmlFor="transactionType" className="block font-semibold mb-1">Transaction Type:</label>
                        <select
                            id="transactionType"
                            value={transactionType}
                            onChange={handleTransactionTypeChange}
                            className="block w-full p-2 border border[#ccc] rounded mb-2"
                        >
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdraw</option>
                        </select>
                        <button style={{transition: "background-color 0.3s"}}
                            className="inline cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={handleTransaction}
                        >
                            {transactionType === 'deposit' ? 'Deposit' : 'Withdraw'}
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {transactionSuccess && <p className="text-green-500 mt-2">Transaction successful!</p>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Profile;