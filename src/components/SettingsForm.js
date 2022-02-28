import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';

import { useState } from 'react';



export default function SettingsForm() {
    const [user, setUser] = useState(
        {
            name: " ",
            firstname: " ",
            lastname: " ",
            email: " ",
            address: " ",
            city: " ",
            country: " ",
            postalcode: " ",
            aboutme: "  ",


        });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });

    };
    const postData = async (e) => {
        e.preventDefault();
        const { name, firstname, lastname, email, address, city, country, postalcode, aboutme } = user;
        const res = await fetch(
            "https://national-labour-service-dsn-default-rtdb.firebaseio.com/userdata.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        name,
                        firstname,
                        lastname,
                        email,
                        address,
                        city,
                        country,
                        postalcode,
                        aboutme,

                    }),
            }
        );
        if (res) {
            setUser({
                name: " ",
                firstname: " ",
                lastname: " ",
                email: " ",
                address: " ",
                city: " ",
                country: " ",
                postalcode: " ",
                aboutme: " ",

            });
            alert("Dara stored")
        }
    };
    return (
        <Card>
            <CardHeader color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">My Account</h2>

                </div>
            </CardHeader>
            <CardBody>
                <form method="POST" >
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        User Information
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
                                placeholder="Email Address"

                                value={user.email}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"

                                placeholder="First Name"
                                name="firstname"
                                value={user.firstname}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                name="lastname"
                                placeholder="Last Name"

                                value={user.lastname}
                                onChange={getUserData}
                            />
                        </div>
                    </div>

                    <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                        Contact Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"

                                placeholder="Address"
                                name="address"
                                value={user.address}
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

                                placeholder="Country"
                                name="country"
                                value={user.country}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="w-full lg:w-4/12 pl-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"

                                placeholder="Postal Code"
                                name="postalcode"
                                value={user.postalcode}
                                onChange={getUserData}
                            />
                        </div>
                    </div>

                    <h6 className="text-purple-500  text-sm my-6 font-light uppercase">
                        About Me
                    </h6>
                    <div className="flex flex-wrap mt-10 font-light">

                        <Textarea color="purple"
                            name="aboutme"
                            value={user.aboutme}
                            onChange={getUserData}
                        />

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
