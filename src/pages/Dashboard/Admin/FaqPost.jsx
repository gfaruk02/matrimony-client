
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const FaqPost = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const  faq = form.faqText.value;
        const answer = form.answer.value;

        const faqInfo = {  faq, answer }
        console.log(faqInfo);
        if (user) {
            axiosSecure.post('/faq', faqInfo)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title:" Save And Publish Faq",
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
                <form onSubmit={handleAddFood} className=" flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-900 mx-auto">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mx-auto">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Faq Question</label>
                                <input name="faqText" type="text" placeholder="Faq Question" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Faq Answer</label>
                                <input name="answer" type="text" placeholder="Faq Answer" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>

                           
                            <div className=" col-span-full">
                                <button className="w-full py-2 border  hover:bg-green-400 bg-green-800 border-white pl-2 rounded-md focus:ring focus:ri focus:ri font-bold">
                                    <input name="" type="submit" value="Submit" />
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};
export default FaqPost;