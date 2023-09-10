import { AiOutlineCaretRight } from "react-icons/ai";
import MainBanner from "../../../../../Components/Banner/MainBanner";

const Mission = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <MainBanner 
      banner="https://i.ibb.co/L6S7yjZ/history-banner.webp" 
      bannerTitle={"Mission & Vision"}>
      </MainBanner>
      <div>
        <div className="mb-3">
          <h1 className="font-bold text-2xl mb-3">Our Vision</h1>
          <p className="mb-3">Mutual Trust Bank’s vision is based on a philosophy known as MTB3V. We envision MTB to be:</p>
          <ul className="">
            <li className="flex gap-2 items-center"><AiOutlineCaretRight className="text-[rgb(1,87,155)]"/> One of the best performing banks in Bangladesh</li>
            <li className="flex gap-2 items-center"><AiOutlineCaretRight className="text-[rgb(1,87,155)]"/> The bank of choice</li>
            <li className="flex gap-2 items-center"><AiOutlineCaretRight className="text-[rgb(1,87,155)]"/> A truly world-class bank</li>
          </ul>
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-2xl my-3">Our Mission</h1>
          <p className="">We aspire to be the most admired financial institution in the country, recognized as a dynamic, innovative and client focused company that offers an array of products and services in the search for excellence and to create an impressive economic value.</p>
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-2xl my-3">NBL Core Values Commitment:</h1>
          <p className="">We aspire to be the most admired financial institution in the country, recognized as a dynamic, innovative and client focused company that offers an array of products and services in the search for excellence and to create an impressive economic value.</p>
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-2xl my-3"></h1>
          <ul className="">
            <li className="flex gap-2">
              <AiOutlineCaretRight className="text-[rgb(1,87,155)] text-xl"/> 
              Shareholders – Create sustainable economic value for our shareholders by utilizing an honest and efficient business methodology.
            </li>
            <li className="flex gap-2">
              <AiOutlineCaretRight className="text-[rgb(1,87,155)] text-xl"/> 
              Community – Committed to serve the society through employment creation, support community projects and events and be a responsible corporate citizen.
            </li>
            <li className="flex gap-2">
              <AiOutlineCaretRight className="text-[rgb(1,87,155)] text-xl"/> 
              Customers – Render state-of-the-art service to our customers by offering diversified products and by aspiring to fulfill their banking needs to the best of our abilities.
            </li>
            {/* <li className="flex gap-2 justify-between">
              <AiOutlineCaretRight className="text-[rgb(1,87,155)] text-xl"/> 
              Employees – We rely on the inherent merits of the employee and honor our relation as a part of this renowned financial institution. We work together to celebrate and reward unique backgrounds, viewpoints, skills and talents of everyone at the work place, no matter what their job is.
            </li> */}
          </ul>
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-2xl my-3">Accountability:</h1>
          <p className="">As a bank, we are judged solely by the successful execution of our commitments; we expect and embrace this form of judgment. We are accountable for providing the highest level of service along with meeting the strict requirements of regulatory standards and ethical business practices.</p>
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-2xl my-3">Agility:</h1>
          <p className="">We can see things from different perspectives; we are open to change and not bound by how we have done things in the past. We can respond rapidly and adjust our mode of operation to meet stakeholder needs and achieve our goals.</p>
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-2xl my-3">Trust:</h1>
          <p className="">We value mutual trust, which encompasses transparent and candid communications among all parties.</p>
        </div>
      </div>
    </div>
  );
}

export default Mission;