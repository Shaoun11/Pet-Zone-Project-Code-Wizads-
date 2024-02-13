import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useCart = () => {
    const { user, loader } = useContext(AuthContext);

    const { data: mycart = [], isLoading, refetch } = useQuery({
        queryKey: [user?.email, "mycart"],
        enabled: !loader,
        queryFn: async () => {
            console.log('Cart user', user)
            const res = await axios.get(`http://localhost:5001/mycart`);
            const allCart = res.data;
            const myCart = allCart.filter((cart) => cart.customerEmail === user.email);
            console.log(myCart);
            return myCart;
        },
    });

    return { mycart, isLoading, refetch };
};

export default useCart;