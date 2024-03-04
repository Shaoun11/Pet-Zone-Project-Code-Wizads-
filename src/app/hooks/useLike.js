import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useLike = () => {
    const { user, loader } = useContext(AuthContext);

    const { data: myuser = [], isLoading, refetch } = useQuery({
        queryKey: [user?.email, "myuser"],
        enabled: !loader,
        queryFn: async () => {
            console.log('My user', user)
            const res = await axios.get(`https://pet-zone-project-next-js.vercel.app/users`);
            const allUser = res.data;
            const myUser = allUser.find((u) => u.email === user.email);
            console.log(myUser);
            return myUser;
        },
    });

    return { myuser, isLoading, refetch };
};

export default useLike;