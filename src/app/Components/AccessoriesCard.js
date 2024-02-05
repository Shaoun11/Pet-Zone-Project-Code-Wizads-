import Link from "next/link";


/* eslint-disable @next/next/no-img-element */
const AccessoriesCard = ({ accessory }) => {
  const { _id, name, animal, category, description, image, price } = accessory;

  return (
    <div className="p-7">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-1000 hover:shadow-primary-400  ring-4 ring-white ring-opacity-40 hover:ring-red-400 hover:ring-opacity-40 max-w-sm ">
        <div className="relative">
          <img
            className=" w-96 h-60 object-cover"
            src={image}
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {description.slice(0, 70)}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$ {price}</span>

            <Link href={`/AllAccessories/${_id}`}>
              {" "}
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesCard;
