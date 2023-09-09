import React from 'react';
import CenterTitle from '../../../../../Components/Title/CenterTitle';

const History = () => {
    return (
        <div>
            <div>
                <img className='w-full h-[200px] md:h-[300px]' src="https://www.marketplace.org/wp-content/uploads/2021/07/TitlePage_horizontal_ep3.jpg?w=900" alt="" />
            </div>
            <div className='my-5 md:my-10'>
            {/* <CenterTitle heading={"Brief History"}></CenterTitle> */}
                <p>Nexus Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders spearheaded by M Asafudulla prince (founder chairman) and the Nexus company FMO.</p>
                <p className='my-5'>From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh. The rationale being that the manufacturing sector exports Bangladeshi products worldwide. Thereby financing and concentrating on this sector allows Bangladesh to achieve the desired growth. Nexus Bank other focus is Corporate Social Responsibility (CSR). Even though CSR is now a cliche, Nexus Bank is the pioneer in this sector and termed the contribution simply as 'social responsibility'. Due to its investment in this sector, Nexus Bank has become one of the largest donors and the largest bank donor in Bangladesh. The bank has won numerous international awards because of its unique approach as a socially conscious bank.</p>
                <p>Nexus Bank was the first bank in Bangladesh to be fully automated. The Electronic-Banking Division was established in 2002 to undertake rapid automation and bring modern banking services into this field. Full automation was completed in 2003 and hereby introduced plastic money to the Bangladeshi masses. Nexus Bank also operates the nation's largest ATM fleet and in the process drastically cut consumer costs and fees by 80%. Moreover, Nexus Bank choosing the low profitability route for this sector has surprised many critics. Nexus Bank had pursued the mass automation in Banking as a CSR activity and never intended profitability from this sector. As a result it now provides unrivaled banking technology offerings to all its customers. Because of this mindset, most local banks have joined Nexus Bank banking infrastructure instead of pursuing their own.</p>
            </div>
        </div>
    );
};

export default History;