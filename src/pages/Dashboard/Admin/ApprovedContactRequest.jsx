import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ApprovedContactRequest = () => {
    // console.log(user.email);
    const axiosSecure = useAxiosSecure()
    const {data: contactRequests=[], refetch} = useQuery({
          queryKey: ['contactRequests'],
          queryFn: async() => {
              const res = await axiosSecure.get('/contactRequests');
              return res.data;
          }
    })
    const handleApproveContact= (item)=>{
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Active!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/contactRequest/${item._id}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Active!",
                            icon: "success"
                          });
                        refetch();   
                    }
                })

            }
          });
    }
    console.log(contactRequests);
    return (
        <div>
            <Helmet>
                <title>Matrimony | Approve Contact Requests</title>
            </Helmet>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leadi text-blue-950">Contacts Request List</h2>
                <div className="overflow-x-auto">
                    <table className="w-3/4 p-6 text-xs whitespace-nowrap text-center">
                        <thead>
                            <tr className="bg-blue-950">
                                <th className="p-3">#</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Biodata Id</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Approved Contact request</th>

                            </tr>
                        </thead>
                        <tbody>

                            {contactRequests.map((item, index) =>

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
                                        {item.status === 'Active' ? 'Active' : <button onClick={() => handleApproveContact(item)} className=" text-xl"> Approve</button>}
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ApprovedContactRequest;