

const Notfound = () => {
    return (
        <div>
            
        <img className='pl-[475px] object-cover  bg-cover pt-20 ' src='https://i.ibb.co/5rRpxZn/cute-cartoon-kawaii-cat-404-error-page-not-found-vector-47808521-removebg-preview.png' alt="" />
    
    <h1 className='text-6xl font-bold text-center text-gray-700'>Sorry,Page Not Found</h1>
   <div className='flex mt-5 justify-center' >
         <a href='/'><button   className='btn btn-outline btn-warning '> Go to Home </button></a>
   </div>
        </div>
    );
};

export default Notfound;