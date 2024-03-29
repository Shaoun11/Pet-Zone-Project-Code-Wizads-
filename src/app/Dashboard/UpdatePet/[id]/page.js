"use client";
import React, { useContext, useEffect, useState } from 'react';
import Dashboard from "../../page";
import Swal from 'sweetalert2';

const UpdatePet = ({ params }) => {
    const { id } = params;
    console.log(id);

    // Fetching Data
    const [pet, setPet] = useState([]);
    const {name, image, gender, age, adoption_fee, available, species, color, breed, description} = pet;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pet-zone-project-next-js.vercel.app/myallpet/${id}`);
                const data = await response.json();
                setPet(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    console.log(pet);


    const handleUpdatePetDetails = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const gender = form.gender.value;
        const age = form.age.value;
        const adoption_fee = form.adoption_fee.value;
        const species = form.species.value;
        const color = form.color.value;
        const breed = form.breed.value;
        const available = form.available.value;
        const description = form.description.value;
    
        const updatedProduct = {
          name,
          image,
          gender,
          age,
          adoption_fee,
          species,
          color,
          breed,
          available,
          description,
        };
        console.log(updatedProduct);
    
        // Sending updated details to the server
        fetch(`https://pet-zone-project-next-js.vercel.app/myallpet/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Congratulations",
                text: "Details Update Successful!",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      };


    return (
        <Dashboard>
            <div className='lg:ml-72'>
                <p className="text-2xl mt-5 ml-6 font-semibold mb-2">
                    Update Pet
                </p>

                <div className="lg:flex   md:flex items-center justify-center">
                    <div>
                        <img className="h-[350px]" src="https://i.ibb.co/HnP9Qdj/360-F-254878309-P62oik-Pc8zu9-TQjr4j2-Xp-Ekl5d-FBa6ep-removebg-preview.png" alt="" />
                    </div>
                    <div className="flex  items-center justify-center p-12">

                        <div className="mx-auto w-full max-w-[550px]">
                            <h1 className="text-3xl text-center font-semibold">Update <span className='text-red-500'>Your</span> Desire <span className='text-red-500'>Pet</span> Details</h1>


                            <form  onSubmit={handleUpdatePetDetails}>
                            
                                <div className="mb-5 mt-6">
                                    <label
                                        for="name"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Type Your Pet Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        defaultValue={name}
                                        placeholder="Type Your Pet Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        for="image"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        name="image"
                                        id="img"
                                        defaultValue={image}
                                        placeholder=" Pet Image URL"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                for="gender"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Gender
                                            </label>
                                            <input
                                                type="text"
                                                name="gender"
                                                id="gender"
                                                defaultValue={gender}
                                                placeholder="Pet Gender"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            for="age"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Age
                                        </label>
                                        <input
                                            type="text"
                                            name="age"
                                            id="age"
                                            defaultValue={age}
                                            placeholder="Pet Age "
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>

                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                for="adoption_fee"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Price
                                            </label>
                                            <input
                                                type="number"
                                                name="adoption_fee"
                                                id="price"
                                                defaultValue={adoption_fee}
                                                placeholder="Pet Price"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/2">
                                            <div className="mb-5">
                                                <label
                                                    for="color"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Color
                                                </label>
                                                <input
                                                    type="text"
                                                    name="color"
                                                    id="color"
                                                    defaultValue={color}
                                                    placeholder="Pet Color"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                for="breed"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Breed
                                            </label>
                                            <input
                                                type="text"
                                                name="breed"
                                                id="breed"
                                                defaultValue={breed}
                                                placeholder="Breed"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                for="available"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Available
                                            </label>
                                            <input
                                                type="text"
                                                name="available"
                                                id="available"
                                                defaultValue={available}
                                                placeholder="Entry Free"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                for="species"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Species
                                            </label>
                                            <input
                                                type="text"
                                                name="species"
                                                id="species"
                                                defaultValue={species}
                                                placeholder="Pet Species "
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>



                                </div>
                                <div className="mb-5">
                                    <label
                                        for="message"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Short Description
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="description"
                                        id="description"
                                        defaultValue={description}
                                        placeholder="Type your description"
                                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    ></textarea>
                                </div>
                                <div>
                                    <input type='submit' value="Update Contest" className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none" />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </Dashboard>
    );
};

export default UpdatePet;