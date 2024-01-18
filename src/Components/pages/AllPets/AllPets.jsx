import { useLoaderData } from "react-router-dom";
import AllPet from "./AllPet";
import Headings from "../../Headings/Headings";


const AllPets = () => {
    const allPets = useLoaderData();
    console.log(allPets)
    return (
        <div>
        <Headings mainHeading={"Available Pets"} subHeading={"Find your companion"}></Headings>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4 lg:max-w-screen-2xl lg:mx-auto">
          {allPets.map((allPet) => (
            <AllPet key={allPet._id} allPet={allPet}></AllPet>
          ))}
        </div>
      </div>
    );
};

export default AllPets;