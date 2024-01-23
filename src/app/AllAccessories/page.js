import AccessoriesCard from "../Components/AccessoriesCard";

const page = async () => {
  const response = await fetch(
    `https://pet-zone-project-next-js.vercel.app/petshop`
  );
  const accessories = await response.json();

  return (
    <div>
      <div className="w-full  mt-10 mb-20 flex flex-col justify-center items-center">
        <div className="flex justify-center items-end my-10">
        <h1 className="text-2xl md:text-4xl font-bold">
          Available Accessories
        </h1>
        <div className="w-2 h-2 rounded-full ml-1 bg-secondary mb-1"></div>
        </div>
        <div className="join">
          <button className="btn join-item">All Items</button>
          <button className="btn join-item">Dog Items</button>
          <button className="btn join-item">Bird Items</button>
          <button className="btn join-item">Cat Items</button>
          <button className="btn join-item">Rabbit Items</button>
        </div>
      </div>
      <div className="grid mt-16 mb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
        {accessories.map((accessory) => (
          <AccessoriesCard
            key={accessory._id}
            accessory={accessory}
          ></AccessoriesCard>
        ))}
      </div>
    </div>
  );
};

export default page;
