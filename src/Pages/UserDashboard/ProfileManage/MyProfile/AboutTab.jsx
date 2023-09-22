
import {BiLogoGmail, BiUserCircle} from "react-icons/bi"
import {BsPersonVcardFill} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import {PiGenderNeuterBold} from "react-icons/pi"
import { FaUser, FaMobileAlt, FaBirthdayCake, FaYandexInternational } from "react-icons/fa";

const AboutTab=({user})=> {
  // console.log(user)
  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
      <div className=" bg-base-100 shadow-lg rounded-xl p-5 md:p-10">
        <h2 className="text-2xl text-primary font-bold mb-5">General Information</h2>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-1 items-center">
            <BiUserCircle className="text-primary text-3xl"></BiUserCircle> User Name:
          </h1>
          <p className="text-base text-gray-500 mt-1">{user?.username}</p>
        </div>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-1 items-center">
            <PiGenderNeuterBold className="text-primary text-3xl"></PiGenderNeuterBold> Gender:
          </h1>
          <p className="text-base text-gray-500 mt-1">{user?.gender?user.gender:"Please update your profile"}</p>
        </div>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-2 items-center">
            <FaBirthdayCake className="text-primary text-xl"></FaBirthdayCake> Birthday:
          </h1>
          <p className="text-base  text-gray-500 mt-1">{user?.birthday?user.birthday:"Please update your profile"}</p>
        </div>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-2 items-center">
            <FaYandexInternational className="text-primary text-xl"></FaYandexInternational> Nationality:
          </h1>
          <p className="text-base  text-gray-500 mt-1">{user?.nationality?user.nationality:"Please update your profile"}</p>
        </div>
        <p className="text-base flex gap-3 mb-4 text-gray-500 mt-2">
          <span className=" flex-shrink-0 text-lg font-semibold flex gap-2 text-black"><FaUser className="text-primary text-xl"></FaUser> About Me:</span>
          {user?.description? user.description:"Please update your profile"}
        </p>
      </div>
      <div className=" bg-base-100 shadow-xl rounded-xl p-5 md:p-10">
        <h2 className="text-2xl text-primary font-bold mb-5">Contacts</h2>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-2 items-center">
            <BiLogoGmail className="text-primary text-xl"></BiLogoGmail> Email:
          </h1>
          <p className="text-base  text-gray-500 mt-1">{user.email?user.email:"Please update your profile"}</p>
        </div>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-2 items-center">
            <FaMobileAlt className="text-primary text-xl"></FaMobileAlt> Telephone:
          </h1>
          <p className="text-base  text-gray-500 mt-1">{user?.number?user.number:"Please update your profile"}</p>
        </div>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-2 items-center">
            <ImLocation className="text-primary text-xl"></ImLocation>Present Address:
          </h1>
          <p className="text-base  text-gray-500 mt-1">{user?.present_address?user.present_address:"Please update your profile"}</p>
        </div>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-2 items-center">
            <ImLocation className="text-primary text-xl"></ImLocation>Permanent Address:
          </h1>
          <p className="text-base  text-gray-500 mt-1">{user?.permanent_address?user.permanent_address:"Please update your profile"}</p>
        </div>
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-lg font-semibold flex gap-2 items-center">
            <BsPersonVcardFill className="text-primary text-xl"></BsPersonVcardFill>Nid Card Number:
          </h1>
          <p className="text-base  text-gray-500 mt-1">{user?.nid_card_number}</p>
        </div>
      </div>
    </div>

  );
}

export default AboutTab;