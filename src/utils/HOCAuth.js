import auth from '@/app/Firebase/firebase.config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


const HOCAuth = (WrappedComponent) => {
    const AuthWrapper = (props) => {
        const router = useRouter();
        const [user, loading, error] = useAuthState(auth);

        useEffect(() => {

            // Check if there is a stored intended route in session storage
            const intendedRoute = sessionStorage.getItem('intendedRoute');

            if (!loading && user) {
                // If there is an intended route, redirect to it
                if (intendedRoute) {
                    sessionStorage.removeItem('intendedRoute'); // Remove it after redirecting
                    router.push(intendedRoute);
                }
            } else {
                // If user is not authenticated, store the intended route in session storage
                if (router.route !== '/login' && router.route !== '/register') {
                    sessionStorage.setItem('intendedRoute', router.route);
                }

                // Redirect to login if not authenticated
                if (!loading && !user) {
                    router.push('/login');
                }
            }
        }, [user, loading, router]);

        if (loading) {
            // Handle loading state if needed
            return <p>Loading...</p>;
        }

        return (user || loading) ? <WrappedComponent {...props} /> : null;
    }
    return AuthWrapper;
};

export default HOCAuth;