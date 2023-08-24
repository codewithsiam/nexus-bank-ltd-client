
import {BiLogoGmail} from "react-icons/bi"
import {ImLocation} from "react-icons/im"
import {PiGenderNeuterBold} from "react-icons/pi"
import { FaUser, FaMobileAlt, FaBirthdayCake } from "react-icons/fa";

const AboutTab=({user})=> {
  const {gender, dob, bio, address, email,number} = user;
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-32">
      <div className=" bg-base-100 shadow-xl rounded-xl p-5 md:p-10">
        <h2 className="text-2xl font-bold mb-5">General Information</h2>
        <div className="">
          <h1 className="text-xl font-semibold flex gap-1 items-center"><PiGenderNeuterBold className="text-[#004d6e] text-3xl"></PiGenderNeuterBold> Gender</h1>
          <p className="text-lg text-gray-500 mt-1">{gender}</p>
        </div>
        <div className="my-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center"><FaBirthdayCake className="text-[#004d6e] text-2xl"></FaBirthdayCake> Birthday</h1>
          <p className="text-lg text-gray-500 mt-1">{dob}</p>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold flex gap-2 items-center"><FaUser className="text-[#004d6e] text-2xl"></FaUser> About Me</h1>
          <p className="text-lg text-gray-500 mt-1">{bio}</p>
        </div>
      </div>
      <div className=" bg-base-100 shadow-xl rounded-xl p-5 md:p-10">
        <h2 className="text-2xl font-bold mb-5">Contacts</h2>
        <div className="">
          <h1 className="text-xl font-semibold flex gap-2 items-center"><ImLocation className="text-[#004d6e] text-2xl"></ImLocation> Address</h1>
          <p className="text-lg text-gray-500 mt-1">{address}</p>
        </div>
        <div className="my-4">
          <h1 className="text-xl font-semibold flex gap-2 items-center"><FaMobileAlt className="text-[#004d6e] text-2xl"></FaMobileAlt> Telephone</h1>
          <p className="text-lg text-gray-500 mt-1">{number}</p>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold flex gap-2 items-center"><BiLogoGmail className="text-[#004d6e] text-2xl"></BiLogoGmail> Email</h1>
          <p className="text-lg text-gray-500 mt-1">{email}</p>
        </div>
      </div>
    </div>

  );
}

export default AboutTab;