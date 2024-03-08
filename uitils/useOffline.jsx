import { useState, useEffect } from "react";

const useOffline = () => {
    const onlinefun = () => {
        setisonline(true);
    };

    const offlinefun = () => {
        setisonline(false);
    };

    const [isonline, setisonline] = useState(true);

    useEffect(() => {
        window.addEventListener('online', onlinefun);
        window.addEventListener('offline', offlinefun);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('online', onlinefun);
            window.removeEventListener('offline', offlinefun);
        };
    }, []);

    return isonline;
};

export default useOffline;

