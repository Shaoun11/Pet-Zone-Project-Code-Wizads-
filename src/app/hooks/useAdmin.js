import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [isAdmin, setIsAdmin] = useState(null);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        const fetchAdminStatus = async () => {
            try {
                const res = await fetch(`/users/admin/${user.email}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                console.log(data);
                setIsAdmin(data?.admin);
            } catch (error) {
                console.error('Error during fetch:', error);
            } finally {
                setIsAdminLoading(false);
            }
        };

        if (user?.email) {
            fetchAdminStatus();
        } else {
            setIsAdmin(null);
            setIsAdminLoading(false);
        }
    }, [user?.email]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;