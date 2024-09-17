import React from "react";

const Partner = () => {
    return (
        <> 
        <div className="text-center font-bold text-2xl pt-12 md:pt-0">
            <h1>Our Hiring Partner</h1>
        </div>
            <div className="flex justify-center items-center gap-8 my-10 py-4 flex-wrap">
                <div className="flex justify-center items-center w-1/12 mx-6">
                    <img src="/img/amazon.png" alt="Amazon" className="max-w-full h-auto" />
                </div>
                <div className="flex justify-center items-center w-1/12 mx-6">
                    <img src="/img/google.png" alt="Google" className="max-w-full h-auto" />
                </div>
                <div className="flex justify-center items-center w-1/12 mx-6">
                    <img src="/img/netflix.png" alt="Netflix" className="max-w-full h-auto" />
                </div>
                <div className="flex justify-center items-center w-1/12 mx-6">
                    <img src="/img/tokopedia.png" alt="Tokopedia" className="max-w-full h-auto" />
                </div>
                <div className="flex justify-center items-center w-1/12 mx-6">
                    <img src="/img/shopee.png" alt="Shopee" className="max-w-full h-auto" />
                </div>
            </div>


        </>
    );
};

export default Partner;

