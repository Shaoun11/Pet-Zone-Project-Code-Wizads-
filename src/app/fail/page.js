import React from 'react';

import Link from "next/link";
const Page = () => {
    return (
        <>
            <div className="container">
                <div className="row h-100  justify-content-center align-items-center">
                    <div className="col-md-2 centered text-center col-sm-12 col-lg-2">
                        <img className="w-50 object-center ml-64 mt-5 rounded-md" src="https://miro.medium.com/v2/resize:fit:810/1*OkeqV425CNZUQT2HSkTnJA.png"/><br/>
                        
                        <Link className="btn mt-2 bg-red-500 border-none text-white" href="/">Back Home</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Page;