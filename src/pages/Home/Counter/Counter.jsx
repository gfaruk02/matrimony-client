import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useBiodata from "../../../Hooks/useBiodata";
import { GrResume } from "react-icons/gr";
import { FaFemale, FaMale } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";

const Counter = () => {
    const biodatas = useBiodata()
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews');
            return res.data;
        }
    })
    const malesBiodata = biodatas?.filter(males => males.biodataType === "Male");
    const femalesBiodata = biodatas?.filter(females => females.biodataType === "Female");
    // const premiumBiodata = biodatas?.filter(data => data.member === "premium");
    return (
        <div className=" my-12">
        <div className="px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-blue-950 text-white text-center">
            <div className="flex flex-col justify-center items-center border-l-2 border-rose-500 py-8 rounded-lg">
                <div className="flex flex-row items-center gap-4"> 
                <GrResume className=" text-4xl text-rose-500"/> 
                <p className="text-4xl"> {biodatas.length}</p>
                </div>
                <h1 className="text-3xl">Total Biodata</h1>
               
                </div>
                <div className="flex flex-col justify-center items-center border-l-2 border-rose-500 py-8 rounded-lg">
                <div className="flex flex-row items-center gap-4"> 
                <FaMale className=" text-4xl text-rose-500"/>
                <p className="text-4xl"> {malesBiodata.length}</p>
                </div>
                <h1 className="text-3xl"> Males Biodata</h1>
                </div>

                <div className="flex flex-col justify-center items-center border-l-2 border-rose-500 py-8 rounded-lg">
                <div className="flex flex-row items-center gap-4"> 
                <FaFemale className=" text-4xl text-rose-500"/>
                <p className="text-4xl"> {femalesBiodata.length}</p>
                </div>
                <h1 className="text-3xl"> Girls Biodata</h1>
                </div>
                <div className="flex flex-col justify-center items-center border-l-2 border-rose-500 py-8 rounded-lg">
                <div className="flex flex-row items-center gap-4"> 
                <BiMaleFemale className=" text-4xl text-rose-500"/>
                <p className="text-4xl"> {reviews.length}</p>
                </div>
                <h1 className="text-3xl">Success Story</h1>
               
                </div>
            

        </div>
        </div>
    );
};

export default Counter;