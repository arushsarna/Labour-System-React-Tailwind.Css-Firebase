import StatusCard from 'components/StatusCard';

import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { useState , useEffect } from 'react';
export default function Dashboard() {
      const [posts, setPosts] = useState([]);
 
    
  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/projects");
    setPosts(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
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
                       <Card>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">Current Projects</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Tittle
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                               City 
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                  Required Workers
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                  Existing Number of Workers
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                  Budget
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {posts.map(({ id, name, budget, city, requiredworkers, existingno }) => (
                                <tr>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {name}
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {city}
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                        {requiredworkers}
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        
                                          
                                                {existingno}
                                         

                                        
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {budget}
                                    </th>
                                </tr>
                            ))}
                                        </tbody>
                                         </table>
                </div>
            </CardBody>
        </Card>
                    </div>
                </div>
                    </div>
                    
        </>
    );
}
