import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ViewBiodata = () => {
    const { user } = useAuth();
    // console.log(user.email);
    const axiosSecure = useAxiosSecure()
    const { data: biodata = [], refetch } = useQuery({
        queryKey: ['biodata', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodata?email=${user.email}`);
            //   console.log(res);
            return res.data;
        }
    })
    const handleapplypremium = item => {
        // console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Premium!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Save it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/biodatas/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Saved!",
                                text: "Your file has been Add to Premium.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <div className="ml-2">
            {biodata.map(item =>
                <section key={item._id} className="bg-gray-800 text-gray-100 ">
                    <div className="container max-w-5xl py-12 mx-auto md:pl-5">
                        <div className="grid gap-4 mx-4 sm:grid-cols-12">
                            <div className="col-span-12 sm:col-span-3 md:w-52">
                                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-rose-400">
                                    <h3 className="text-2xl font-semibold pb-2">{item.member} Profile Details </h3>
                                    <img className="w-full" src={item.image} alt="" />
                                    <h3 className="text-2xl font-semibold pt-2">{item.name}</h3>
                                    <p className="mt-3">Biodata Id {item.biodataId}</p>
                                    <p className="mt-3">Gender: {item.biodataType}</p>
                                    <p className="mt-3">Occupation: {item.occupation} </p>

                                    <p className="mt-3">Email: {item.email}</p>
                                    <p className="mt-3">Mobile Number: {item.mobileNumber} </p>
                                </div>
                                {item.member == "user" ? <td className="p-3">
                                    <button onClick={() => handleapplypremium(item)} className="btn bg-rose-500 text-white text-xl rounded-lg py-3 px-24">Apply To Premium </button>
                                </td> : ''}
                            </div>
                            <div className="md:ml-24 relative col-span-12 px-4 space-y-5 sm:col-span-9">
                                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-rose-400">
                                        <h3 className="text-xl font-semibold tracki">Personal Info </h3>
                                        <p className="mt-3">Date Of Birth: {item.dateOfBirth}</p>
                                        <p className="mt-3">Height: {item.height} cm</p>
                                        <p className="mt-3">Weight: {item.weight} kg</p>
                                        <p className="mt-3">Age: {item.age} Years</p>
                                        <p className="mt-3">Race: {item.race} </p>
                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-rose-400">
                                        <h3 className="text-xl font-semibold tracki">Family Info</h3>
                                        <p className="mt-3">Fathers Name: {item.fatherName}</p>
                                        <p className="mt-3">Mothers Name: {item.motherName}</p>
                                        <p className="mt-3">Permanent Division: {item.permanentDivision}</p>
                                        <p className="mt-3">Present Division: {item.presentDivision}</p>
                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-rose-400">
                                        <h3 className="text-xl font-semibold tracki">Partner Preferences</h3>
                                        <p className="mt-3">Expected Partner Age:  {item.expectedPartnerAge} Years</p>
                                        <p className="mt-3">Expected Partner Height:  {item.expectedPartnerHeight} cm</p>
                                        <p className="mt-3">Expected Partner Weight:  {item.expectedPartnerWeight} kg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ViewBiodata;