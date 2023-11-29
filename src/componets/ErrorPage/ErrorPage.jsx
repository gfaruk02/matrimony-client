import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section className="flex pt-10 items-center h-full bg-white text-gray-900">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-5xl text-gray-600">
                            Oops! You`re lost.
                        </h2>
                        <img src="https://i.ibb.co/s2NLL7q/error2.jpg" alt="" />
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900" to='/'>Back to Homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;