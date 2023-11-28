import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const {data: biodatas } = useQuery({
          queryKey: ['biodatas'],
          queryFn: async() => {
              const res = await axiosSecure.get('/biodatas');
              return res.data;
          }
    })

    // console.log(biodatas);
    const malesBiodata = biodatas?.filter(males => males.biodataType === "Male");
    // console.log(malesBiodata);
    const femalesBiodata = biodatas?.filter(females => females.biodataType === "Female");
    const premiumBiodata = biodatas?.filter(data => data.member === "premium");

    const {data: contactRequest } = useQuery({
        queryKey: ['contactRequest'],
        queryFn: async() => {
            const res = await axiosSecure.get('/contactRequest');
            return res.data;
        }
  })
//   console.log(contactRequest.amount);
  const revenue = contactRequest?.reduce((total, item)=> total + item.amount, 0)
  console.log(revenue);
    return (
        <div className=" px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white text-center">
            <div className="bg-gray-700 py-8 rounded-lg">
                <h1 className="text-3xl">Total Biodata</h1>
               <p className="text-xl pt-2"> {biodatas?.length}</p>
                </div>
            <div className="bg-gray-700 py-8 rounded-lg">
                <h1 className="text-3xl">Total Male Biodata</h1>
               <p className="text-xl pt-2"> {malesBiodata?.length}</p>
                </div>
            <div className="bg-gray-700 py-8 rounded-lg">
                <h1 className="text-3xl">Total Female Biodata</h1>
               <p className="text-xl pt-2"> {femalesBiodata?.length}</p>
                </div>
            <div className="bg-gray-700 py-8 rounded-lg">
                <h1 className="text-3xl">Premium Biodata</h1>
               <p className="text-xl pt-2"> {premiumBiodata?.length}</p>
                </div>
            <div className="bg-gray-700 py-8 rounded-lg">
                <h1 className="text-3xl">Total Revenue</h1>
               <p className="text-xl pt-2"> {revenue} Taka</p>
                </div>
            

        </div>
        </div>
    );
};

export default AdminHome;