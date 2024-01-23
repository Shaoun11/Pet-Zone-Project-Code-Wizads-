import Link from "next/link";


const OurServices = () => {
  return (
    <div  className="my-10 max-w-7xl mx-auto md:mt-20 md:mb-20 max-container">
      <div className="w-full flex justify-center items-end">
        <h1 className="text-2xl md:text-4xl font-bold">Our Services</h1>
        <div className="w-2 h-2 rounded-full bg-secondary mb-1 ml-1"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 py-10 mt-5 gap-6 px-2 md:px-0">
        <div className="flex justify-between items-center">
          <div className="text-[#4D5046] hover:text-secondary duration-300 text-center hover:scale-[0.98] flex flex-col items-center p-3">
            <div className="p-2 border border-secondary rounded-full w-fit hover:shadow-xl mb-3">
              <img
                className="rounded-full"
                src="https://i.ibb.co/RDmFv61/truck.png"
                alt=""
              />
            </div>
            <h1 className="text-xl mb-1 font-bold">Free Shipping</h1>
            <p className="text-slate-600 font-medium font-mono">
              We provide free shipping.
            </p>
          </div>
          <div className="border h-[70%]"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#4D5046] hover:text-secondary duration-300 text-center hover:scale-[0.98] flex flex-col items-center p-3">
            <div className="p-2 border border-secondary rounded-full w-fit hover:shadow-xl mb-3">
              <img
                className="rounded-full"
                src="https://i.ibb.co/BtcSLqx/refresh.png"
                alt=""
              />
            </div>
            <h1 className="text-xl mb-1 font-bold">Return Policy</h1>
            <p className="text-slate-600 font-medium font-mono">
              We give opportunity return.
            </p>
          </div>
          <div className="border h-[70%]"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#4D5046] hover:text-secondary duration-300 text-center hover:scale-[0.98] flex flex-col items-center p-3">
            <div className="p-2 border border-secondary rounded-full w-fit hover:shadow-xl mb-3">
              <img
                className="rounded-full"
                src="https://i.ibb.co/3hZ8gb6/gift.png"
                alt=""
              />
            </div>
            <h1 className="text-xl mb-1 font-bold">Gift Card</h1>
            <p className="text-slate-600 font-medium font-mono">
              You can get Gift Card.
            </p>
          </div>
          <div className="border h-[70%]"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#4D5046] hover:text-secondary duration-300 text-center hover:scale-[0.98] flex flex-col items-center p-3">
            <div className="p-2 border border-secondary rounded-full w-fit hover:shadow-xl mb-3">
              <img
                className="rounded-full"
                src="https://i.ibb.co/NSRKrZN/benifit.png"
                alt=""
              />
            </div>
            <h1 className="text-xl mb-1 font-bold">Best Quality</h1>
            <p className="text-slate-600 font-medium font-mono">
              We provide best Services.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-5 px-2 md:px-0">
        <div className="rounded-xl relative overflow-hidden">
            <img className="w-full h-full hover:scale-[1.1] duration-300" src="https://i.ibb.co/LtNvy24/Untitled-design-33.png" alt="" />
            <div className="absolute top-5 md:top-16 right-8 md:right-14 space-y-3 flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white">On SALE!</h1>
                <div className="text-sm w-fit font-semibold px-2 py-1 bg-black bg-opacity-50 text-white">
                    <p> Pet Accessories 30% OFF</p>
                </div>
                <Link href={"/AllAccessories"}> <button className="px-4 py-2 text-sm bg-red-500 hover:bg-white hover:text-secondary rounded-full duration-300 text-white font-medium">SHOP NOW</button></Link>
            </div>
        </div>
        <div className="rounded-xl relative overflow-hidden">
            <img className="w-full h-full hover:scale-[1.1] duration-300" src="https://i.ibb.co/pb3N5bC/Untitled-design-34.png" alt="" />
            <div className="absolute top-5 md:top-16 left-8 md:left-14 space-y-3 flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white">Cute Bird</h1>
                <div className="text-sm w-fit font-semibold px-2 py-1 bg-black bg-opacity-50 text-white">
                    <p>Bird Accessories</p>
                </div>
               <Link href={"/AllAccessories"}> <button className="px-4 py-2 text-sm bg-red-500 hover:bg-white hover:text-secondary rounded-full duration-300 text-white font-medium">SHOP NOW</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
