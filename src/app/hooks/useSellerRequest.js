import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSellerRequest = () => {

    const { data: sellerRequest = [], isLoading, refetch } = useQuery({
        queryKey: ["sellerRequest"],
        queryFn: async () => {
            // const res = await axios.get(`https://pet-zone-project-next-js.vercel.app/mypet/${user.email}`);
            const res = await axios.get(`http://localhost:5001/seller`);
            return res.data;
        },
    });

    return { sellerRequest, isLoading, refetch };
};

export default useSellerRequest;

