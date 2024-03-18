"use client"
import { GiSandsOfTime } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineReceiptLong } from "react-icons/md";
import { PiPackage } from "react-icons/pi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import Dashboard from "../page";
const TrackOrder = () => {
  return (
    <Dashboard>
    <div className='lg:ml-72'>
    

      <div className="max-w-6xl mx-auto py-10">
        <div className="space-y-6">
          {/* track you order section start */}
          <div className="border-2 p-5 rounded-lg bg-50-50">
            <h1 className="text-2xl font-bold pb-1">Track you order</h1>
            <hr />
            <p className="text-sm font-semibold py-2">
              Order code: 34FG78899KLD30d
            </p>

            <img className="object-cover object-center ml-20"  src="https://i.ibb.co/8BgSpQX/Track-your-order-ezgif-com-webp-to-jpg-converter-removebg-preview.png" ></img>

            {/* ------ */}
            <div className="flex justify-center py-10">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="bg-red-500 p-2 rounded-full">
                    <span className="text-3xl text-white">
                      <MdOutlineReceiptLong />
                    </span>
                  </div>
                  <div className="hidden md:block w-52 h-1 bg-red-400" />
                  <div className="md:hidden w-1 h-20 bg-red-500" />
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="bg-red-500 p-2 rounded-full">
                    <span className="text-3xl text-white">
                      <PiPackage />
                    </span>
                  </div>
                  <div className="hidden md:block w-48 h-1 bg-red-400" />
                  <div className="md:hidden w-1 h-20 bg-red-500" />
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="bg-red-500 p-2 rounded-full">
                    <span className="text-3xl text-white">
                      <TbTruckDelivery />
                    </span>
                  </div>
                  <div className="hidden md:block w-52 h-1 bg-red-200" />
                  <div className="md:hidden w-1 h-20 bg-red-500" />
                </div>

                <div>
                  <div className="bg-red-500 p-2 rounded-full">
                    <span className="text-3xl text-white">
                      <IoCheckmarkDoneCircleOutline />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="text-lg font-bold">You orde has been Pending</h5>
            <p className="text-xs">
            You Recived Your Product On 13-03-2024/15-03-2024
            </p>
          </div>

          <div className="border-2 p-5 rounded-lg bg-50-50">
            <h1 className="text-2xl font-bold pb-1">All order</h1>
            <div className="overflow-x-auto">
              <table className="w-full mt-2">
                <tr>
                  <th className="border border-black p-2">#</th>
                  <th className="border border-black p-2">Order Code</th>
                  <th className="border border-black p-2">Product Nme</th>
                  <th className="border border-black p-2">Qty</th>
                  <th className="border border-black p-2">Price</th>
                  <th className="border border-black p-2">Delivery Status</th>
                  <th className="border border-black p-2">Order Status</th>
                  <th className="border border-black p-2">Payment</th>
                </tr>
                <tr>
                  <td className="border border-black p-2">1</td>
                  <td className="border border-black p-2">
                    34FG78899KLD30d
                  </td>
                  <td className="border border-black p-2">Whiskers</td>
                  <td className="border border-black p-2">3</td>
                  <td className="border border-black p-2">320</td>
                  <td className="border border-black p-2">
                    <span className="p-1 w-fit bg-gray-400 text-white text-sm rounded-md">
                      Painding
                    </span>
                  </td>
                  <td className="border border-black p-2">
                    <span className="p-1 w-fit bg-blue-400 text-white text-sm rounded-md">
                      Done
                    </span>
                  </td>
                  <td className="border border-black p-2">
                    <span className="p-1 w-fit bg-green-500 text-white text-sm rounded-md">
                     Success
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          {/* all order section end */}
        </div>
      </div>
    </div>
    </Dashboard>
  );
};

export default TrackOrder;