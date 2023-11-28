import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useBiodata from "../../../Hooks/useBiodata";


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
        <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-700 text-white text-center">
            <div className="border-l-2 border-rose-500 py-8 rounded-lg">
                <h1 className="text-3xl">Total Biodata</h1>
               <p className="text-xl pt-2"> {biodatas.length}</p>
                </div>
            <div className="border-l-2 border-rose-500 py-8 rounded-lg">
                <h1 className="text-3xl"> Males Biodata</h1>
               <p className="text-xl pt-2"> {malesBiodata.length}</p>
                </div>
            <div className="border-l-2 border-rose-500 py-8 rounded-lg">
                <h1 className="text-3xl"> Girls Biodata</h1>
               <p className="text-xl pt-2"> {femalesBiodata.length}</p>
                </div>

            <div className="border-l-2 border-r-2 border-rose-500 py-8 rounded-lg">
                <h1 className="text-3xl">Success Story</h1>
               <p className="text-xl pt-2"> {reviews.length}</p>
                </div>
            

        </div>
        </div>
    );
};

export default Counter;