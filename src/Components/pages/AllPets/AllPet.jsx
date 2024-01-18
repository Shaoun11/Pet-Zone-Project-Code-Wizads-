const AllPet = ({ allPet }) => {
  const {
    _id,
    name,
    species,
    breed,
    age,
    gender,
    color,
    description,
    image,
    adoption_fee,
    available,
  } = allPet;
  console.log(
    _id,
    name,
    species,
    breed,
    age,
    gender,
    color,
    description,
    image,
    adoption_fee,
    available
  );
  return (
    <div>
      <div className="card card-compact px-4 mx-4 bg-base-100 shadow-xl hover:shadow-gray-500 md:max-lg:px-24 md:max-lg:mx-16 lg:w-[450px]">
        <figure>
          <img src={image} alt={species} className="h-[400px] w-full p-4" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{name}</h2>
          <div className="flex justify-around gap-x-2">
          <div>
          <p className="text-md font-semibold"><span className="font-semibold text-lg">Species:</span> {species}</p>
          <p className="text-md font-semibold"><span className="font-semibold text-lg">Breed:</span> {breed}</p>
          <p className="text-md font-semibold"><span className="font-semibold text-lg">Age:</span> {age}</p>
          </div>
          <div>
          <p className="text-md font-semibold"><span className="font-semibold text-lg">Gender:</span> {gender}</p>
          <p className="text-md font-semibold"><span className="font-semibold text-lg">Color:</span> {color}</p>
          <p className="text-md font-semibold"><span className="font-semibold text-lg">Fee:</span> {adoption_fee} Bdt</p>
          </div>
          </div>
          <p className="text-lg font-semibold text-center italic">"{description}"</p>
          <div className="card-actions justify-center">
            <button className="btn btn-info">Adopt Now</button>
            <button className="btn btn-success">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPet;
