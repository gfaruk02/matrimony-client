import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const GotMarried = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const handaleReview= (e) =>{
        e.preventDefault();
        const form = e.target;
        const yourbiodatnumber = form.yourbiodatnumber.value;
        const partnerbiodatnumber = form.partnerbiodatnumber.value;
        const marriageDate = form.marriageDate.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const review = form.review.value;
    

    const reviewInfo =  {yourbiodatnumber, partnerbiodatnumber,marriageDate,rating,photo,review }
    console.log(reviewInfo);
    if (user) {
        axiosSecure.post('/reviews', reviewInfo)
        .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Success Story added successfully for Review",
                    showConfirmButton: false,
                    timer: 1000
                });
                form.reset();
            }
        })
    }
}
    return (
        <div>
            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handaleReview} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Your Biodata Number</label>
                                <input name="yourbiodatnumber" type="text" placeholder="Your Biodata Number" className="w-full pl-2 py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Partner Biodata Number</label>
                                <input name="partnerbiodatnumber" type="text" placeholder="Your Biodata Number" className="w-full pl-2 py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                              
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Marriage Date</label> <br />
                                <input className="text-gray-800 rounded py-2 w-full" type="date" id="birthday" name="marriageDate"/>
                               
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Review Star(0 to 5) </label>
                                <input name="rating" type="number" placeholder="Review 0 to 5" className="w-full pl-2 py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                              
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Couple Image Link</label>
                                <input name="photo" type="text" placeholder="Couple Image Link" className="w-full pl-2 py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>

                            <div className="col-span-full">
                                <label className="text-sm"> Write Success Story for Review</label>
                                <textarea name="review" placeholder="Write Success Story" className="pl-2 py-6 w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"></textarea>
                            </div>
                            <button className=" py-2 md:px-16 lg:px-0 rounded bg-rose-600">
                                <input type="submit" value="Submit" />
                            </button>
                        </div>

                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default GotMarried;