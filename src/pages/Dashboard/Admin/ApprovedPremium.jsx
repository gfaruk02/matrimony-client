import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ApprovedPremium = () => {
    const axiosSecure = useAxiosSecure()
    const { data: biodatas = [],refetch} = useQuery({
        queryKey: ['biodatas',],
        queryFn: async () => {
            const res = await axiosSecure.get('/biodatas');
            return res.data;
        }
        
    })
    const premiumBiodata = biodatas?.filter(data => data.member === "Pending");
    // console.log(biodatas);
    
    const handleApprovePremium = item => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Premium!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/biodata/${item._id}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Premium!",
                            icon: "success"
                          });
                        refetch();   
                    }
                })

            }
          });

    }
    return (
        <div>
                       <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leadi text-gray-800">Premium Requset List</h2>
                <div className="overflow-x-auto">
                    <table className="w-3/4 p-6 text-xs whitespace-nowrap text-center">
                        <thead>
                            <tr className="bg-blue-950">
                                <th className="p-3">#</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Biodata Id</th>
                                <th className="p-3"> User Email</th>
                                <th className="p-3">Make Premium</th>

                            </tr>
                        </thead>
                        <tbody>

                            {premiumBiodata.map((item, index) =>

                                <tr key={item._id} className="border-b text-gray-800 border-opacity-20 dark:border-gray-700 dark:bg-bue-950 text-center">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.biodataId}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.email}</p>

                                    </td>
                                    <td className="p-3">
                                        {item.member === 'Premium' ? 'Premium' : <button onClick={() => handleApprovePremium(item)} className=" text-xl"> Approve</button>}
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ApprovedPremium;