import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSeller = () => {
    const { user, loader } = useContext(AuthContext);
    const { data: isSeller, isPending: isSellerLoading } = useQuery({
        queryKey: [user?.email, 'isSeller'],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5001/users/seller/${user?.email}`);
            console.log(res.data);
            return res.data?.seller;
        }
    })
    return [isSeller, isSellerLoading]
};

export default useSeller;

