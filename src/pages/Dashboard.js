import StatusCard from 'components/StatusCard';

import Hired from 'components/Hired';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';


export default function Dashboard() {

    const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/workers");
    setPosts(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
    console.log(posts)
   

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
                             <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Workers</h2>
                    
                </div>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Id
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                   Name
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                  Pay
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                   City
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Status
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                   Phone Number
                                </th>
                            </tr>
                        </thead>
                                                {posts.map(({ id,name,pay,city,availability,pno }) => (
                                            <tbody>

                                   
                                   
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {id}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {name}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Rs  {pay}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {city}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {availability}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {pno}
                                </td>
                            </tr>
                            
                        </tbody>
                                ))}
                    </table>
                </div>
            </CardBody>
        </Card>
                           
                           

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

