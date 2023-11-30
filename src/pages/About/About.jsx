import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Matrimony | About Us </title>
            </Helmet>
            <section className="p-4 mt-16 lg:p-8 bg-blue-950 text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.ibb.co/HX394GX/review4.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-blue-950">
                            <span className="text-xs uppercase text-gray-400"></span>
                            <h3 className="text-3xl font-bold">Welcome to Matrimony</h3>
                            <p className="my-6 text-gray-400">Welcome to Matrimony, where we believe in fostering meaningful connections and creating lasting bonds that unite hearts and souls. We understand that the journey to finding a life partner is a profound and personal one, and we are here to guide you every step of the way.

                                At Matrimony, we are more than just a platform for matches. We are a community built on trust, respect, and understanding. Our mission is to facilitate the discovery of genuine connections that lead to beautiful relationships.

                            </p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://i.ibb.co/WHVNQfw/review.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-blue-950">
                            <h3 className="text-3xl font-bold">What can we do for you?</h3>
                            <p className="my-6 text-gray-400">Our platform offers a diverse range of profiles, representing various backgrounds, cultures, and preferences. We embrace diversity and celebrate the uniqueness of each individual. Whether you are seeking a partner based on shared values, beliefs, interests, we provide help you find your perfect match.
                                Our dedicated team is here to support you, offering guidance and assistance whenever you need it.

                                Join us in this incredible journey of love, trust, and companionship. Lets embark on this adventure together, hand in hand, as you take the next step toward a fulfilling and enriching chapter of your life.
                                Thank you for choosing Matrimony</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.ibb.co/Kb27gM1/review33.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-blue-950">
                            <h3 className="text-3xl font-bold">Thinkig about Your Life</h3>
                            <p className="my-6 text-gray-400">Matrimony holds a special place in many lives, weaving together stories of love, commitment, and companionship. It is a celebration of unity, where two individuals come together to create a shared journey filled with understanding, support, and shared dreams. Matrimony encapsulates the essence of building a life together, navigating challenges hand in hand, and cherishing each moment as a team.

                                At its core, matrimony represents the beauty of connection, the strength of commitment, and the promise of a lifelong partnership. It is a testament to the belief that love knows no bounds and flourishes in the union of hearts.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;