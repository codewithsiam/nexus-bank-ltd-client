import { BsFillCheckCircleFill, BsFillPatchCheckFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import CenterTitle from "../../../Components/Title/centerTitle";


const Comparison = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="text-center">
                <CenterTitle 
                    subHeading={"SERVICE COMPARISONS"}
                    heading={"Our better services"}
                ></CenterTitle>
                <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form,</p>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center">
                                <thead class="bg-blue-50 border-b text-lg md:text-2xl">
                                    <tr>
                                    {/* <th scope="col" class=" font-bold text-gray-900 px-6 py-4 text-left">#</th> */}
                                    <th scope="col" class=" font-bold text-gray-900 px-6 py-4 text-left">
                                        Comparison Features
                                    </th>
                                    <th scope="col" class=" font-bold text-gray-900 px-6 py-4">
                                        {/* <img className="p-1 bg-blue-950 w-[60px]" src="https://i.ibb.co/GsDWGkj/logo.png" alt="" /> */}
                                        Nexus Bank Ltd.
                                    </th>
                                    <th scope="col" class=" font-bold text-gray-900 px-6 py-4">
                                        Other Companies
                                    </th>
                                    </tr>
                                </thead>
                                <tbody className="md:text-xl text-md ">
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap font-medium text-left">
                                        Payment Per Transaction
                                        </td>
                                        <td class="px-6 py-4 bg-[#f4f5f6] whitespace-nowrap">
                                        0.50/per transaction
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                        1.50/per transaction
                                        </td>
                                    </tr>
                                    <tr class="bg-[#f4f5f6] border-b">
                                        <td class="px-6 py-4 whitespace-nowrap font-medium text-left">
                                        Bank account limitations
                                        </td>
                                        <td class="px-6 py-4 bg-[#e9e9ea] whitespace-nowrap">
                                        up to 10 bank accounts
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                        Only 3 bank accounts
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap font-medium text-left">
                                        Local fees capped at NGN 2,000
                                        </td>
                                        <td class="px-6 py-4 bg-[#f4f5f6] whitespace-nowrap">
                                            <BsFillCheckCircleFill className="text-2xl inline text-blue-900"></BsFillCheckCircleFill>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <ImCross className="text-[16px] inline text-orange-600"></ImCross>
                                        </td>
                                    </tr>
                                    <tr class="bg-[#f4f5f6] border-b">
                                        <td class="px-6 py-4 whitespace-nowrap font-medium text-left">
                                        Loan Purchase
                                        </td>
                                        <td class="px-6 py-4 bg-[#e9e9ea] whitespace-nowrap">
                                        Easy to follow steps
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            Complicated steps
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap font-medium text-left">
                                        Debt Financing
                                        </td>
                                        <td class="px-6 py-4 bg-[#f4f5f6] whitespace-nowrap">
                                            <BsFillCheckCircleFill className="text-2xl inline text-blue-900"></BsFillCheckCircleFill>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <ImCross className="text-[16px] inline text-orange-600"></ImCross>
                                        </td>
                                    </tr>
                                    <tr class="bg-[#f4f5f6] border-b">
                                        <td class="px-6 py-4 whitespace-nowrap font-medium text-left">
                                        No hidden fees or charges
                                        </td>
                                        <td class="px-6 py-4 bg-[#e9e9ea] whitespace-nowrap">
                                            <BsFillCheckCircleFill className="text-2xl inline text-blue-900"></BsFillCheckCircleFill>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <ImCross className="text-[16px] inline text-orange-600"></ImCross>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap font-medium text-left">
                                        Local fees capped
                                        </td>
                                        <td class="px-6 py-4 bg-[#f4f5f6] whitespace-nowrap">
                                            <BsFillCheckCircleFill className="text-2xl inline text-blue-900"></BsFillCheckCircleFill>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <ImCross className="text-[16px] inline text-orange-600"></ImCross>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comparison;