import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';



export default function Dashboard() {
   
    return (
        <>
            <div className="bg-light-blue-500 px-2 md:px-4 h-20" />


            <div className="px-1 md:px-8 -mt-10">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        <Card>
                            <CardHeader color="purple" contentPosition="left">
                                <h2 className="text-white text-2xl">Contact Us!</h2>



                            </CardHeader>
                            <CardBody>
                                <div className="overflow-x-auto">
                                    <div className=" font-light">
                                        Phone No. =  9049590456
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>



        </>
    );
}
