import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const useAdmin = () => {
    const { user, loader } = useContext(AuthContext);
 
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loader,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axios.get(`http://localhost:5001/users/Admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;