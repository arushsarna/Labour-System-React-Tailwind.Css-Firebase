import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';

import Team1 from 'assets/img/c.jpeg';
import Team2 from 'assets/img/c1.jpeg';
import Team3 from 'assets/img/c2.jpeg';
import Team4 from 'assets/img/c3.jpeg';
import { db } from '../firebase.js';
import { useEffect, useState } from 'react';


export default function CardTable(props) {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('data').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
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
                                    {props.title}
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    {props.money}
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    {props.status}
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    {props.pictures}
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    {props.phoneno}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.title1}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.money1}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                    {props.status1}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-20 h-10 border-2 border-white -ml-2 mb-4 ">
                                            <Image
                                                src={Team1}
                                                rounded
                                                alt="..."

                                            />
                                        </div>

                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.phoneno1}
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.title2}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.money2}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{' '}
                                    {props.status2}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">

                                        <div className="w-20 h-10 border-2 border-white -ml-2 mb-4 ">
                                            <Image
                                                src={Team2}
                                                rounded
                                                alt="..."
                                            />
                                        </div>


                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.phoneno2}
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.title3}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.money3}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i>{' '}
                                    {props.status3}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">


                                        <div className="w-20 h-10 border-2 border-white -ml-2 mb-4 ">
                                            <Image
                                                src={Team3}
                                                rounded
                                                alt="..."
                                            />
                                        </div>


                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.phoneno3}
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.title4}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.money4}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{' '}
                                    {props.status4}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">


                                        <div className="w-20 h-10 border-2 border-white -ml-2 mb-4 ">
                                            <Image
                                                src={Team4}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {props.phoneno4}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
