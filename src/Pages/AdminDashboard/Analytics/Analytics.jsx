import AnalyticsTitle from '../../../components/AnalyticsCardTitle/AnalyticsTitle';
import ConversionsCard from './AnalyticsCards/ConversionsCard';
import ImpressionsCard from './AnalyticsCards/ImpressionsCard';
import VisitsCard from './AnalyticsCards/VisitsCard';
import VisitorsChart from './VisitorsChart';

const Analytics = () => {
    return (
        <div className='py-20' >
            <div className="container mx-auto">
                <AnalyticsTitle title="Analytics dashboard" subTitle="Monitor metrics, check reports and review performance" />

                <div className='bg-[#1E293B] p-11 rounded-lg'>
                    <AnalyticsTitle chartTitle="Visitors Overview" chartSubTitle="Number of unique visitors" />

                    <VisitorsChart />
                </div>


                <div className="mt-8 grid grid-cols-3 gap-5">
                    <ConversionsCard />
                    <ImpressionsCard />
                    <VisitsCard />
                </div>
            </div>
        </div>
    );
};

export default Analytics;