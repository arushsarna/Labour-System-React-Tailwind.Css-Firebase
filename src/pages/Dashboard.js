import StatusCard from 'components/StatusCard';

import Hired from 'components/Hired';
import { db } from '../firebase';
import { useEffect, useState } from 'react';



export default function Dashboard() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('data').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    }, [])

    return (
        <>
            <div className="bg-light-blue-500 px-2 md:px-4 h-20" />


            <div className="px-1 md:px-8 -mt-10">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
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


            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-1">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            {
                                posts.map(({ id1, name1, status1, dailywage1, city1, phoneno1, status2 }) => (

                                    <Hired title="Hired Workers"

                                        id="ID" name="Name" money="Daily Wage" city="City" status="Status" phoneno="Phone No."
                                        id1={id1} name1={name1} money1={dailywage1} city1={city1} status1={status1} phoneno1={phoneno1}
                                        id2="2" name2="Shamu" money2="Rs 150" city2="Sehore" status2={status2} phoneno2="895947523"
                                        id3="3" name3="gita" money3="Rs 150" city3="Sehore" status3="Hired" phoneno3="895947523"
                                        id4="4" name4="sita" money4="Rs 150" city4="Sehore" status4="Hired" phoneno4="895947523"
                                    />
                                ))
                            }

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

