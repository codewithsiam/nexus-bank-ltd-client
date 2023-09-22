import AnalyticsTitle from '../../../components/AnalyticsCardTitle/AnalyticsTitle';
import ImpressionsCard from './AnalyticsCards/AnalyticsCard';
import NewAudience from './Audience/NewAudience';
import VisitorsChart from './VisitorsChart';

const Analytics = () => {
    return (
        <div className='py-20' >
            <div className="container mx-auto">
                <AnalyticsTitle title="Analytics dashboard" subTitle="Monitor metrics, check reports and review performance" />

                <div className='bg-[#1E293B] p-11 rounded-lg'>
                    <AnalyticsTitle chartTitle="Total Users" />
                    <VisitorsChart />
                </div>


                <div >
                    <ImpressionsCard />
                </div>

                {/* Your Audience */}
                <AnalyticsTitle title="Account Details" subTitle="Demographic properties of your users" />
                <NewAudience />
            </div>
        </div>
    );
};

export default Analytics;