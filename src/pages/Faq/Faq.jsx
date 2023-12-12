

const Faq = () => {
    return (
        <div className="my-14">
            <section className=" text-black">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-black">Find your questions answer in Faq or feel free contact us </p>
                    <div className="space-y-4">
                        <details className="w-full bg-gray-50 border border-blue-950 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Is It FREE to create profile?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">Absolutely. Creating a profile in Matrimony is completely FREE and no service charge is required. Create your profile and enjoy the exciting services. </p>
                        </details>

                        <details className="w-full bg-gray-50 border border-blue-950 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How can i create my profile on Matrimony?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-black">
                                It is very easy & simple. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.</p>
                        </details>

                        <details className="w-full bg-gray-50 border border-blue-950 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Is mandatory to add a phone number & email address?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-black">
                                Mobile is required. We would suggest you provide the email also. It will help you to get better notifications when someone communicates with you. </p>
                        </details>

                        <details className="w-full bg-gray-50 border border-blue-950 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Can I update my profile data?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-black">
                                Yes. You can update your profile data any time you want. Just visit your profile and go to the edit my profile segment.</p>
                        </details>

                        <details className="w-full bg-gray-50 border border-blue-950 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What is partner preferences?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-black">
                                You can set some criteria regarding your partner choise. For example, you can set age range, education, profession, home district, marital status etc. We recommend you to fill up the partner preference form to get auto suggestion profiles. </p>
                        </details>
                        <details className="w-full bg-gray-50 border border-blue-950 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How do I contact a member?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-black">
                                You can communicate with your preferred profile through sending message or chatting. To sending message or doing chat, you have to be a premium member.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;