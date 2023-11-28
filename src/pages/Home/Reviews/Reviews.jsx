import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Reviews = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews');
            return res.data;
        }
    })
    // console.log(reviews);
    const sortReview = [...reviews].sort((a, b) => new Date(a.marriageDate) - new Date(b.marriageDate));
    return (
        <div className='mt-8 lg:w-3/4 mx-auto'>
            <div className='py-5 text-center'> 
                <h1 className='text-3xl md:text-4xl pb-3 font-semibold'>Success Story</h1>
                <h3 className='text-xl md:text-2xl pb-5'>Matrimony the best choice for finding your life partner</h3>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sortReview.map(review => <SwiperSlide
                    key={review._id}
                >
                    <div className='px-5 grid grid-cols-1 md:grid-cols-2 gap-5 justify-between'>
                        <div>
                            <img src={review.photo} alt="" />
                        </div>
                        <div className='pt-5 lg:px-10 space-y-5'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <h2 className='text-xl'>Marriage Date: {review.marriageDate}</h2>
                            <p> {review.review}</p>

                        </div>
                    </div>
                </SwiperSlide>)}

            </Swiper>
        </div>
    );
};

export default Reviews;