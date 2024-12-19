'use client';
import { useEffect, useState } from "react";

const PageLoader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowLoader(false), 1000);
    }, []);

    if (!showLoader) return null;

    return (
    <>
        <div className="flex justify-center items-center h-dvh">
            <div className="relative inline-flex">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
        </div>
    </>
    );
};

export default PageLoader;

