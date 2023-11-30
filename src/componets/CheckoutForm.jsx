import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Swal from "sweetalert2";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const { user } = useAuth();
    const details = useLoaderData();
    const { _id } = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [contactProfiles, setContactProfiles] = useState([]);
    const [transactionId, setTransactionId] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const contactProfiles = details?.find(profile => profile._id === _id)
        setContactProfiles(contactProfiles);
    }, [_id, details])

    // console.log(contactProfiles);
    const axiosSecure = useAxiosSecure()
    const { data: biodatas = [], refetch } = useQuery({
        queryKey: ['biodatas', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodatas?email=${user.email}`);
            return res.data;
        }
    })
    // console.log(biodatas);
    const userInfo = biodatas?.find(currentUser => currentUser.email === user.email);
    const selfBiodataIt = (userInfo?.biodataId);

    const totalPrice = 500;
    useEffect( ()=>{
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    }, [axiosSecure,totalPrice ])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }

        else{
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                const paymentInfo = {
                    transactionId: paymentIntent.id,
                    biodataId: selfBiodataIt,
                    name: userInfo.name,
                    email: user.email,
                    contactId: contactProfiles?.biodataId,
                    contacterName: contactProfiles?.name,
                    status: "pending",
                    mobileNo: contactProfiles?.mobileNumber,
                    contactEmail: contactProfiles?.email,
                    price : totalPrice
                }
                const res = axiosSecure.post('/contactRequest', paymentInfo)
                console.log('send data in data base',res);
               
                if(res){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "ThankYou, Your Payments Done",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/contactrequest')
                      refetch();
                }
               
            }
        }
    }

    return (

        <div> 
            <section className="p-6 bg-blue-950 text-gray-50">
                <form onSubmit={handleSubmit} className="mt-12 bg-blue-950 p-6 lg:p-12 rounded-lg">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-blue-950">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Self biodataId</label>
                                <input name="biodataId" type="text" placeholder="Self biodataId"
                                    value={selfBiodataIt} disabled
                                    className="py-3 pl-2 w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Self Email</label> <br />
                                <input className="w-full py-3 pl-2 rounded-lg px-2" name="email" type="email" value={user?.email} disabled />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Contact BiodataId</label>
                                <input name=" contactbiodataId" type="text" placeholder="BiodataId"
                                    value={contactProfiles?.biodataId} className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-white px-2 py-3 pl-2" disabled />
                            </div>

                        </div>
                    </fieldset>

            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#ffffff',
                            '::placeholder': {
                                color: '#ffffff',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
             <p className="text-xl text-rose-700 p-5"> {error}</p>
            <button type="submit" value="Submit" className="my-12 w-[200px] mx-auto rounded-lg btn bg-rose-500 py-3"  disabled={!stripe || !clientSecret}>
                Sbmit
            </button>

            {transactionId && <p> Your Transaction Id: {transactionId} </p> }

           
            
            {/* <input className="w-[200px] mx-auto rounded-lg btn bg-rose-500 py-3" type="submit" value="Submit" /> */}
            {/* <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>} */}
        </form>
            </section>
        </div>

    );
};

export default CheckoutForm;