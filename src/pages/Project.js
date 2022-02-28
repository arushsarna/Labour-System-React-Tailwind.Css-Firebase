import StatusCard from 'components/StatusCard';
import TableCard from 'components/TableCard';

export default function Dashboard() {
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Notification"
                            amount="22"

                            date="This Week"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="Hired Workers"
                            amount="12"

                            date="Since last week"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Transactions"
                            amount="Rs 9224"

                            date="Since yesterday"
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Word Done"
                            amount="49.65%"

                            date="Since last month"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <TableCard title="Project" money="Budget" status="Status" pictures="Site Photographs"
                            title1="Greenwood Project" money1="Rs 2,00,000" status1="2 Vacancy"
                            title2="Hila Heights" money2="Rs 4,50,000" status2="0 Vacancy"
                            title3="Neelam Tower" money3="Rs 10,00,000" status3="42 Vacancy"
                            title4="Gauri Dam" money4="Rs 21,00,000" status4="43 Vacancy Urgent" />
                    </div>
                </div>
            </div>
        </>
    );
}
