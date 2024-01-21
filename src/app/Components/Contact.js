
import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl mb-20 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
		<div className="flex flex-col justify-between">
			<div className="space-y-2">
				<h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
				<div className="">Chat to our friendly team..!</div>
			</div>
			<img  src="https://i.ibb.co/LNHWW00/istockphoto-1269831054-612x612-removebg-preview.png" alt="Contact our customer support" className=" lg:-ml-32 -ml-5 w-[1700px]" />
		</div>
		<form novalidate="" className="space-y-6">
			<div>
				<label for="name" className="text-sm">Full name</label>
				<input id="name" type="text" placeholder="" className="w-full p-3 rounded border-2" />
			</div>
			<div>
				<label for="email" className="text-sm">Email</label>
				<input id="email" type="email" className="w-full p-3 rounded border-2" />
			</div>
			<div>
				<label for="message" className="text-sm">Message</label>
				<textarea id="message" rows="3" className="w-full p-3 rounded border-2"></textarea>
			</div>
			<button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-red-400 text-white ">Send Message</button>
		</form>
	</div>

        </div>
    );
};

export default Contact;