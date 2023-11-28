import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFavourites = () => {
//ten stack query
const axiosSecure = useAxiosSecure();
const { user} = useAuth();
const { refetch, data: favourite = [] } = useQuery({
    queryKey: ['favourite', user?.email],
    // enabled:!!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async() => {
        const res = await axiosSecure.get(`/favourites?email=${user.email}`);
        return res.data;
    }
})

return [favourite, refetch]
};

export default useFavourites;