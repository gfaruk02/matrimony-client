import { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import BiodatasList from "./BiodatasList";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Detailsbiodata = () => {
    const details = useLoaderData();
    const { _id } = useParams();
    const { user } = useAuth()
    // console.log(user.email);
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation()
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        const profiles = details?.find(profile => profile._id === _id)
        setProfiles(profiles);
    }, [_id, details])
    // email, mobileNumber,
    const { name, dateOfBirth, height, weight, biodataId, biodataType, image, permanentDivision, presentDivision, fatherName, motherName, age, occupation, race, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, email, mobileNumber } = profiles;

    const biodataTypes = details?.filter(data => data.biodataType === profiles.biodataType);
    // console.log(biodataTypes);
    const { data: users = [] } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }

    })
    const premiumUser = users.find(currentUser => currentUser.email === user.email);
    console.log(premiumUser);

    const handleAddToFavourites = () => {
        if (user && user.email) {
            const favourite = {
                biodataId,
                email: user.email,
                name,
                permanentDivision,
                occupation

            }
            axiosSecure.post('/favourites', favourite)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added to cart successfully`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })

        } else {
            Swal.fire({
                title: "Please Login to add to Favourites",
                text: "You are not Login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
        // console.log(profiles);
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 mt-12">
            <section className="bg-gray-800 text-gray-100 lg:mt-16 ">
                <div className="container max-w-5xl py-12 mx-auto md:pl-5">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3 md:w-52">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-rose-400">
                                <h3 className="text-2xl font-semibold pb-2">Details Profile</h3>
                                <img src={image} alt="" />
                                <h3 className="text-2xl font-semibold pt-2">{name}</h3>
                                <p className="mt-3">Biodata Id {biodataId}</p>
                                <p className="mt-3">Gender: {biodataType}</p>
                                <p className="mt-3">Occupation: {occupation} </p>

                                <div className=" mt-10">
                                    {(premiumUser?.role === "premium") || (premiumUser?.role === "admin") ?
                                        (<>
                                            <p className="mt-3">Email: {email}</p>
                                            <p className="mt-3">Mobile Number: {mobileNumber} </p>
                                        </>)
                                        :
                                        (<Link to={`/checkout/${_id}`}>
                                            <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracki rounded-md bg-rose-400 text-gray-900"> Request Contact Information</button>
                                        </Link>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="md:ml-24 relative col-span-12 px-4 space-y-5 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                <div className="md:mx-16 mt-10">

                                    <button onClick={() => handleAddToFavourites(profiles)}
                                        type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-rose-400 text-gray-900"> Add to favourites</button>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-rose-400">
                                    <h3 className="text-xl font-semibold tracki">Personal Info </h3>
                                    <p className="mt-3">Date Of Birth: {dateOfBirth}</p>
                                    <p className="mt-3">Height: {height}</p>
                                    <p className="mt-3">Weight: {weight} </p>
                                    <p className="mt-3">Age: {age} </p>
                                    <p className="mt-3">race: {race} </p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-rose-400">
                                    <h3 className="text-xl font-semibold tracki">Family Info</h3>
                                    <p className="mt-3">Fathers Name: {fatherName}</p>
                                    <p className="mt-3">Mothers Name: {motherName}</p>
                                    <p className="mt-3">Permanent Division: {permanentDivision}</p>
                                    <p className="mt-3">Present Division: {presentDivision}</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-rose-400">
                                    <h3 className="text-xl font-semibold tracki">Partner Preferences</h3>
                                    <p className="mt-3">Expected Partner Age:  {expectedPartnerAge}</p>
                                    <p className="mt-3">Expected Partner Height:  {expectedPartnerHeight}</p>
                                    <p className="mt-3">Expected Partner Weight:  {expectedPartnerWeight}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="mr-3">
                <h2 className="text-center text-4xl py-12 font-extrabold "> Relavant Biodatas </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-3">
                    {
                        biodataTypes?.map(genderDatas => <BiodatasList key={genderDatas._id} genderDatas={genderDatas}> </BiodatasList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Detailsbiodata;