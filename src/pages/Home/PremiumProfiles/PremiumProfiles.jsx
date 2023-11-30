import { Link } from "react-router-dom";


const PremiumProfiles = ({ premium }) => {
    const { _id, biodataId, biodataType, image, permanentDivision, age, occupation } = premium;
    // console.log(premium );
    return (
        <div>

            <div className="max-w-xs rounded-md shadow-md bg-rose-900 text-gray-100">
                <img data-aos="fade-right" src={image} alt="" className=" w-full rounded-t-md h-80 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2" data-aos="fade-left">
                        <h2 className="text-xl font-semibold tracki">Biodata Id: {biodataId} </h2>
                        <p className="text-gray-100">Type: {biodataType} </p>
                        <p className="text-gray-100">Permanent Division: {permanentDivision} </p>
                        <p className="text-gray-100">Age: {age} </p>
                        <p className="text-gray-100">Occupation: {occupation} </p>

                    </div>
                    <Link to={`/detailsbiodata/${_id}`}>
                        <button data-aos="fade-up-right" type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-rose-400 text-gray-900">View Profile</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default PremiumProfiles;