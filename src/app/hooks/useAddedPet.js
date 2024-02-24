import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useAddedPet = () => {
    const { user, loader } = useContext(AuthContext);

    // const { data: myAddedPet = [], isLoading, refetch } = useQuery({
    //     queryKey: [user?.email, "myAddedPet"],
    //     enabled: !loader,
    //     queryFn: async () => {
    //         const res = await axios.get(`https://pet-zone-project-next-js.vercel.app/mypet/${user.email}`);
    //         const allAddedPet = res.data;
    //         return allAddedPet;
    //     },
    // });

    return { myAddedPet, isLoading, refetch };
};

export default useAddedPet;

