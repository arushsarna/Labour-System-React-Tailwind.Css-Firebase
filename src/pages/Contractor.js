import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';


import { useState } from 'react';



export default function SettingsForm() {
    const [user, setUser] = useState(
        {
            name: " ",
            budget: " ",
            owner_group: " ",
            email: " ",
            pno: " ",
            city: " ",
            requiredworkers: " ",
           


        });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });

    };
    const postData = async (e) => {
        e.preventDefault();
        const { name, budget, owner_group, email, pno, city, requiredworkers } = user;
        const res = await fetch(
            "http://localhost:5000/api/contractors/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        name,
                        budget,
                        owner_group,
                        email,
                        pno,
                        city,
                        requiredworkers,
                       
                    }),
            }
        );
        if (res) {
            setUser({
                name: " ",
                budget: " ",
                owner_group: " ",
                email: " ",
                pno: " ",
                city: " ",
                requiredworkers: " ",
                

            });
            alert("Dara stored")
        }
    };
    return (
        <Card className="mt-14">

            <CardHeader  color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between ">
                    <h2 className="text-white text-2xl">Enter New Contractor Details</h2>

                </div>
            </CardHeader>
            <CardBody>
                <form method="POST" >
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        Contractor Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                name="name"
                                placeholder="Username"


                                value={user.name}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                type="email"
                                color="purple"
                                name="email"
                                placeholder="Email"

                                value={user.email}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"

                                placeholder="Budget"
                                name="budget"
                                value={user.budget}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                name="owner-group"
                                placeholder="Owner-Group"

                                value={user.owner_group}
                                onChange={getUserData}
                            />
                        </div>
                    </div>

                    
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"

                                placeholder="Phone No."
                                name="pno"
                                value={user.pno}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"

                                placeholder="City"
                                name="city"
                                value={user.city}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"

                                placeholder="requiredworkers"
                                name="requiredworkers"
                                value={user.requiredworkers}
                                onChange={getUserData}
                            />
                        </div>
                       
                    </div>

                    
                  
                </form>
                <div className="my-10 mt-10">

                    <Button
                        color="purple"
                        buttonType="filled"
                        size="lg"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="dark"
                        onClick={postData}
                        type="submit"
                    >
                        Update
                    </Button>
                </div>
            </CardBody>
        </Card >
    );
}
