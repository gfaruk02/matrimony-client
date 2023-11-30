import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";


const ContactRequest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: contactRequest = [], refetch } = useQuery({
        queryKey: ['contactRequest', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contactRequest?email=${user.email}`);
            return res.data;
        }
    })
    // console.log(contactRequest)
    const handleDeleteRequest = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/contactRequest/${id}`)
              .then(res=>{
               if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
               }
              })
            }
          });
    }
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leadi text-gray-800">Contacts Request Lists</h2>
                <div className="overflow-x-auto">
                    <table className="w-3/4 p-6 text-xs whitespace-nowrap text-center">
                        <thead>
                            <tr className="bg-blue-950">
                                <th className="p-3">#</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Biodata Id</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Mobile No</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                            {contactRequest?.map((item, index) =>

                                <tr key={item._id} className="border-b text-gray-800 border-opacity-20 dark:border-gray-700 dark:bg-bue-950 text-center">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.contacterName}</p>
                                    </td>

                                    <td className="p-3">
                                        <p>{item.contactId}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.status}</p>

                                    </td>
                                { item.status ==="Active"?   
                                <>
                                <td className="p-3">
                                        <p>{item.mobileNo}</p>

                                    </td>
                                    <td className="p-3">
                                        <p>{item.contactEmail}</p>

                                    </td>
                                </>: 
                                 <>
                                 <td className="p-3">
                                         <p>Waiting for approval</p>
 
                                     </td>
                                     <td className="p-3">
                                     <p>Waiting for approval</p>
 
 
                                     </td>
                                 </>
                                    }

                                    <td className="p-3 text-center">
                                        <td> <button onClick={() => handleDeleteRequest(item._id)} className="btn btn-ghost text-red-600"> <FaTrashAlt></FaTrashAlt></button></td>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContactRequest;