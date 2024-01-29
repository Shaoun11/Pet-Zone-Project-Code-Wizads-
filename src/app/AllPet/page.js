
import PetBanner from "../Components/PetBanner";
import AllpetCard from "../Components/AllpetCard";


const page = async () => {
    const response =await fetch(`https://pet-zone-project-next-js.vercel.app/petdata`)
    const data =await response.json();

 

    return (
        <div>
            <PetBanner></PetBanner>
              <div className="w-full  mt-10 mb-20 flex justify-center items-end">
            <h1 className="text-2xl md:text-4xl font-bold">Our All Collection</h1>
            <div className="w-2 h-2 rounded-full ml-1 bg-secondary mb-1"></div>
             
          </div>
             <div className='grid mt-16 mb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6'>
            {
                data.map(petdata=><AllpetCard key={petdata._id} data={petdata}></AllpetCard>)
            }
             
           </div>
        </div>
    );
};

export default page;