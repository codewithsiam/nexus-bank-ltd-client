
import {BiLogoGmail} from "react-icons/bi"
import {ImLocation} from "react-icons/im"
import {PiGenderNeuterBold} from "react-icons/pi"
import {GiCombinationLock} from "react-icons/gi"
import { FaUser, FaMobileAlt, FaBirthdayCake, FaYandexInternational } from "react-icons/fa";

const AboutTab=({user})=> {
  
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-32">
      <div className=" bg-base-100 shadow-xl rounded-xl p-5 md:p-10">
        <h2 className="text-2xl font-bold mb-5">General Information</h2>
        <div className="">
          <h1 className="text-xl font-semibold flex gap-1 items-center">
            <PiGenderNeuterBold className="text-[#004d6e] text-3xl"></PiGenderNeuterBold> Gender</h1>
          <p className="text-lg text-gray-500 mt-1">{user?.gender?gender:"Please update your profile"}</p>
        </div>
        <div className="my-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center">
            <FaBirthdayCake className="text-[#004d6e] text-2xl"></FaBirthdayCake> Birthday
          </h1>
          <p className="text-lg text-gray-500 mt-1">{user?.bob?bob:"Please update your profile"}</p>
        </div>
        <div className="my-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center">
            <FaYandexInternational className="text-[#004d6e] text-2xl"></FaYandexInternational> Nationality
          </h1>
          <p className="text-lg text-gray-500 mt-1">{user?.nationality?nationality:"Please update your profile"}</p>
        </div>
        {/* <div className="my-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center">
            <img className="w-[39px] -ml-[6px]" src="https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-marriage-ring-icon-for-your-project-png-image_1556214.jpg" alt="" /> Marital Status
          </h1>
          <p className="text-lg text-gray-500 mt-1">{marital_status}</p>
        </div> */}
        <div className="">
        <h1 className="text-xl font-semibold flex gap-2 items-center"><FaUser className="text-[#004d6e] text-2xl"></FaUser> About Me</h1>
        <p className="text-lg text-gray-500 mt-2">{user?.bio? bio:"Please update your profile"}</p>
      </div>

      </div>
      <div className=" bg-base-100 shadow-xl rounded-xl p-5 md:p-10">
        <h2 className="text-2xl font-bold mb-5">Contacts</h2>
        <div className="mb-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center">
            <BiLogoGmail className="text-[#004d6e] text-2xl"></BiLogoGmail> Email
          </h1>
          <p className="text-lg text-gray-500 mt-1">{user?.email}</p>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center">
            <FaMobileAlt className="text-[#004d6e] text-2xl"></FaMobileAlt> Telephone
          </h1>
          <p className="text-lg text-gray-500 mt-1">{user?.number?number:"Please update your profile"}</p>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center">
            <ImLocation className="text-[#004d6e] text-2xl"></ImLocation>Present Address
          </h1>
          <p className="text-lg text-gray-500 mt-1">{user?.present_address?present_address:"Please update your profile"}</p>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center">
            <ImLocation className="text-[#004d6e] text-2xl"></ImLocation>Permanent Address
          </h1>
          <p className="text-lg text-gray-500 mt-1">{user?.permanent_address?permanent_address:"Please update your profile"}</p>
        </div>
      </div>
    </div>

  );
}

export default AboutTab;