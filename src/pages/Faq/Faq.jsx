import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Faq = () => {
    const axiosSecure = useAxiosSecure()
    const {data: faq=[]} = useQuery({
          queryKey: ['faq'],
          queryFn: async() => {
              const res = await axiosSecure.get('/faq');
              return res.data;
          }
    })
    return (
        <div className="my-14">
            <section className=" text-black">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-black">Find your questions answer in Faq or feel free contact us </p>
                    <div className="space-y-4">
                        {
                            faq.map(item=> <details key={item._id} className="w-full bg-gray-50 border border-blue-950 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">{item.faq}</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">{item.answer}</p>
                        </details>
                                
                                )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;