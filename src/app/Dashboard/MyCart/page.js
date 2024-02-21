import React from "react";
import Dashboard from "../page";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { MdOutlinePayment } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';
import useCart from '@/app/hooks/useCart';
import { AuthContext } from '@/app/Provider/AuthProvider';


const Page = () => {
    const { mycart, refetch } = useCart();
    console.log(mycart);
    const totalPrice = mycart.reduce((total, item) => total + ((parseFloat(item.price)) * (item.quantity)), 0);


    // const [allCart, setAllCart] = useState([]);
    // const { user } = useContext(AuthContext);
    // console.log(user);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(
    //                 'https://pet-zone-project-next-js.vercel.app/mycart'
    //             );
    //             const data = await response.json();
    //             setAllCart(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const myCart = allCart.filter((cart) => cart.customerEmail === user.email);
    // console.log(myCart);


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://pet-zone-project-next-js.vercel.app/mycart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


  return (
    <Dashboard>
      <div>
        <div>
          <h1 className="text-5xl font-semibold mt-5 text-center">
            My <span className="text-red-500">Cart</span>
          </h1>
        </div>
        <div className="text-right mr-20 mt-7 mb-14">
          {data.length ? (
            <Link href="/Dashboard/Payment">
              <button className="btn border-none bg-red-500 text-white text-lg">
                Payment
              </button>
            </Link>
          ) : (
            <button disabled className="btn bg-red-500 text-white">
              {" "}
              <p className="text-lg">
                <MdOutlinePayment />
              </p>{" "}
              Pay
            </button>
          )}
        </div>

                <div>
                    <h1 className='text-5xl font-semibold mt-5 text-center'>My <span className='text-red-500'>Cart</span></h1>
                </div>

                <div className='flex justify-between items-center my-10 mx-5 md:mx-10 lg:mx-20'>
                    <div>
                        <h2 className='text-3xl font-medium'>Your Total Bill: $ {totalPrice}</h2>
                    </div>
                    <div>
                        {
                            mycart.length ?
                                <Link href="/Dashboard/Payment"><button className="btn border-none bg-red-500 text-white text-lg">Payment</button></Link>
                                :
                                <button disabled className="btn bg-red-500 text-white"> <p className="text-lg">
                                    <MdOutlinePayment />
                                </p> Payment </button>
                        }
                    </div>
                </div>

                <div>
                    {
                        mycart.length === 0 ?
                            <>
                                <p className='text-3xl w-full h-[50vh] flex justify-center items-center -mt-16  '>Your cart is empty</p>
                            </>
                            :
                            <>
                                <div className="overflow-x-auto ">
                                    <table className="table  w-full">
                                        {/* head */}
                                        <thead>
                                            <tr className='text-gray-900'>
                                                <th></th>
                                                <th>Pet Name</th>
                                                <th>Pet  Image</th>
                                                <th>Quantity</th>
                                                <th>Price (Per Quantity)</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className=''>
                                            {
                                                mycart.map((contest, index) => <tr key={contest._id}>
                                                    <th>{index + 1}</th>
                                                    <td className='text-lg font-semibold'>{contest.name}</td>
                                                    <td><img className='w-20 h-20 rounded-md object-cover' src={contest.image} alt="" /></td>
                                                    <td>{contest.quantity}</td>
                                                    <td>{contest.price}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => handleDelete(contest._id)}
                                                            className="btn btn-ghost btn-lg">
                                                            <FaTrashAlt className="text-red-500"></FaTrashAlt>
                                                        </button>
                                                    </td>
                                                </tr>)
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </>
                    }
                </div>

            </div>
        </Dashboard>

    );
};

export default Page;
