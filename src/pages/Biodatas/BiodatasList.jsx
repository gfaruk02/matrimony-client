import { Link } from "react-router-dom";

const BiodatasList = ({genderDatas}) => {
    const { _id, biodataId, image, permanentDivision, age, occupation } = genderDatas;
    return (
        <div>

        <div className=" rounded-md shadow-md bg-rose-900 text-gray-100">
            <img src={image} alt="" className=" w-full rounded-t-md h-48 bg-gray-500" />
            <div className="flex flex-col justify-between space-y-2">
                <div className="space-y-1 pl-2">
                    <h2 className="text-lg mt-2 font-semibold tracki">Biodata Id: {biodataId} </h2>
                    <p className="text-gray-100 text-sm">Division: {permanentDivision} </p>
                    <p className="text-gray-100 text-sm">Age: {age} </p>
                    <p className="text-gray-100 text-sm">Occupation: {occupation} </p>

                </div>
            
                    <Link to={`/detailsbiodata/${_id}`}> 
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-rose-400 text-gray-900">View Profile</button>
                    </Link>


            </div>
        </div>
    </div>
    );
};

export default BiodatasList;