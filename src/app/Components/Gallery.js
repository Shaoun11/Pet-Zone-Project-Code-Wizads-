
const Gallery = () => {
  return (
    <div className="max-container max-w-6xl mx-auto  my-10 md:my-20">
      <div className="w-full flex justify-center  items-end">
        <h1 className="text-2xl md:text-4xl font-bold">Gallery</h1>
        <div className="w-2 h-2 rounded-full bg-red-500 mb-1"></div>
      </div>
   
<div className="container mx-auto px-5  py-2 lg:px-28 lg:pt-20">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/DMK1kV5/pexels-sourav-dey-16844537.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/0QGjV3g/pexels-yana-kangal-17489683.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/Z8QW1n0/pexels-antoni-shkraba-7524671.jpg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/FxpK8fD/pexels-nng-5402409.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/KsWX3WZ/pexels-antoni-shkraba-4498874.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/qMSbbZP/pexels-los-muertos-crew-10041686.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/2gLHXP6/pexels-baris-selcen-12011932.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/R70DgNr/pexels-pavel-danilyuk-7055937.jpg" />
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Gallery;
