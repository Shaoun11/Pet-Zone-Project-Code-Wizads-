const Message = () => {
    return (
        <div className="lg:mx-32 mb-20">
            <div className="hero bg-blue-400">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content">
                    <div>
                        <h2 className="text-4xl font-bold mt-10 mb-3 text-center">Send Us Messages</h2>
                        <p className="font-semibold text-center lg:max-w-5xl mb-7">Drop us a line! Whether you have inquiries about adoption, need assistance, or just want to share your pet adoption story, we are here to lend an ear and support your journey. Your message matters, and we can not wait to hear from you!</p>
                        <div className='flex justify-center'>
                            <form className='w-2/3 mb-10'>
                                <label className='mr-2 text-xl font-semibold'>Name</label><br />
                                <input className='mb-5 p-3 w-full rounded' type="text" name="user_name" placeholder='Name' /><br />
                                <label className='mr-2 text-xl font-semibold'>Email</label><br />
                                <input className='mb-5 p-3 w-full rounded' type="email" name="user_email" placeholder='Email' /><br />
                                <label className='mr-2 text-xl font-semibold'>Message</label><br />
                                <textarea className='mb-5 p-3 w-full h-40 rounded' name="message" placeholder='Share Message' /><br />
                                <div className='text-center'><input type="submit" value="Message" className='bg-green-600 text-white px-6 py-2 rounded' /></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;