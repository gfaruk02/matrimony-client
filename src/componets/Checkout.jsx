import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const Checkout = () => {
    
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    return (
        <div className="mx-12 py-2 text-white mt-16">
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
    </div>
    );
};

export default Checkout;