import useBiodata from "../../../Hooks/useBiodata";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import PremiumProfiles from "../PremiumProfiles/PremiumProfiles";
import Reviews from "../Reviews/Reviews";
import Service from "../Service/Service";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const biodatas = useBiodata()
    // console.log(biodatas);
    const premiumBiodata = biodatas?.filter(data => data.member === "premium");
    // const sortBiodatas = [...premiumBiodata].sort((a, b) => b.age - a.age);
    const sortBiodatas = [...premiumBiodata].sort((a, b) => a.age - b.age);
    // console.log(sortBiodatas);
    const showPremium = sortBiodatas.slice(0, 6)
    return (
        <div>
            <Helmet>
                <title>Matrimony | Home</title>
            </Helmet>
            <Banner></Banner>

            <div className="w-10/12 mx-auto">
                <h2 className="text-center text-4xl py-12 font-extrabold "> Premium Member
                    Profiles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
                    {
                        showPremium?.map(premium => <PremiumProfiles key={premium._id} premium={premium}></PremiumProfiles>)
                    }
                </div>
            </div>
            <Service></Service>
            <Counter></Counter>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;