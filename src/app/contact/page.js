import React from 'react';
import Contact from '../Components/Contact';


const ContactPage = () => {
    return (
     
        <div>
              <div className='bg-[#f0f8ff] pb-20'>
            <section className=" ">
    <div className="container px-6  mx-auto">
    <div className="w-full  mt-10 mb-20 flex justify-center items-end">
            <h1 className="text-2xl md:text-4xl font-bold">Our Contact Us</h1>
            <div className="w-2 h-2 rounded-full ml-1 bg-red-500 mb-1"></div>
             
          </div>

        <img className="object-cover w-full h-72 mt-10 rounded-lg lg:h-[700px]" src="https://i.ibb.co/1sgbQdN/pexels-photo-332974.jpg" alt=""/>
        
       
    </div>
</section>


<div className="grid grid-cols-1 max-w-6xl mb-28 mx-auto gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
            <div className="p-4 rounded-lg  md:p-6 bg-white">
                <span className="inline-block p-3 text-black rounded-lg  bg-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 className="mt-4 text-base font-medium  text-black">Chat to sales</h2>
                <p className="mt-2 text-sm  ">Speak to our friendly team.</p>
                <p className="mt-2 text-sm text-black ">hello@merakiui.com</p>
            </div>

            <div className="p-4 rounded-lg  md:p-6 bg-white">
                <span className="inline-block p-3 text-black rounded-lg bg-red-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                
                <h2 className="mt-4 text-base font-medium  text-black">Visit us</h2>
                <p className="mt-2 text-sm  ">Visit our office HQ..</p>
                <p className="mt-2 text-sm text-black ">100 Smith Street Collingwood VIC 3066 AU</p>
            </div>

            <div className="p-4 rounded-lg  md:p-6 bg-white">
                <span className="inline-block p-3 text-black rounded-lg bg-red-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 className="mt-4 text-base font-medium  text-black">Call us</h2>
                <p className="mt-2 text-sm  ">Mon-Fri from 8am to 5pm.</p>
                <p className="mt-2 text-sm text-black ">+1 (555) 000-0000</p>
            </div>
        </div>
        <Contact></Contact>
        <div>
        <div className="w-full  mt-10 mb-20 flex justify-center items-end">
            <h1 className="text-2xl md:text-4xl font-bold">Our Location</h1>
            <div className="w-2 h-2 rounded-full ml-1 bg-red-500 mb-1"></div>
             
          </div>
            <div className="overflow-hidden max-w-7xl mx-auto rounded-lg lg:col-span-2 pb-16 h-[600px] mt-20">
                <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128699.92342182469!2d90.3372878168281!3d23.780818635320927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1697660855052!5m2!1sen!2sbd"></iframe>
            </div>
       
        </div>
      
        </div>
      
        </div>
        
     
        
    );
};

export default ContactPage;