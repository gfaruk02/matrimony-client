import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Swal from "sweetalert2";

const Checkout = () => {
    const { user } = useAuth();
    const details = useLoaderData();
    const { _id } = useParams();
    const [contactProfiles, setContactProfiles] = useState([]);
    useEffect(() => {
        const contactProfiles = details?.find(profile => profile._id === _id)
        setContactProfiles(contactProfiles);
    }, [_id, details])

    // console.log(contactProfiles);
    const axiosSecure = useAxiosSecure()
    const { data: biodatas = [] } = useQuery({
        queryKey: ['biodatas', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodatas?email=${user.email}`);
            return res.data;
        }
    })
    // console.log(biodatas);
    const userInfo = biodatas?.find(currentUser => currentUser.email === user.email);
    const selfBiodataIt = (userInfo?.biodataId);



    // console.log(contactProfiles.biodataId);
    // console.log(contactProfiles.name);

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

    const handleContactRequest = e =>{
        e.preventDefault();
        if (user && user.email) {
            const contactRequestInfo = {
                biodataId: selfBiodataIt,
                name: userInfo.name,
                email: user.email,
                contactId: contactProfiles?.biodataId,
                contacterName: contactProfiles?.name,
                status: "pending",
                mobileNo: contactProfiles?.mobileNumber,
                contactEmail: contactProfiles?.email,
                amount: 500,
            }

            axiosSecure.post('/contactRequest', contactRequestInfo)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Fee 500tk Added to cart successfully",
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })

        }
    }
    return (
        <div className="mt-16">
            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handleContactRequest} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Self biodataId</label>
                                <input name="biodataId" type="text" placeholder="Self biodataId"
                                    value={selfBiodataIt} disabled
                                    className="py-3 pl-2 w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Self Email</label> <br />
                                <input className=" py-3 pl-2 rounded-lg px-2" name="email" type="email" value={user?.email} disabled />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Contact BiodataId</label>
                                <input name="contactbiodataId" type="text" placeholder="BiodataId"
                                    value={contactProfiles?.biodataId} className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-white px-2 py-3 pl-2" disabled />
                            </div>

                        </div>
                    </fieldset>
                    <div className="mx-12 py-2 text-white">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm></CheckoutForm>
                        </Elements>
                    </div>

                    <input className="w-[200px] mx-auto rounded-lg btn bg-rose-500 py-3" type="submit" value="Submit" />
                </form>
            </section>


        </div>
    );
};

export default Checkout;