const FAQ = () => {
    return (
        <div className="lg:mx-32 mb-20">
            <h2 className="font-bold text-center text-3xl mb-5">Frequently Asked Questions</h2>
            <div className="collapse bg-slate-300">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How does the pet adoption process work?
                </div>
                <div className="collapse-content">
                    <p>Our adoption process is designed to be straightforward and rewarding. You can start by browsing available pets, submitting an adoption application, and completing a meet-and-greet. Our team is here to guide you through every step.</p>
                </div>
            </div>
            <div className="collapse bg-slate-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    What are the fees associated with pet adoption?
                </div>
                <div className="collapse-content">
                    <p>Adoption fees cover veterinary care, vaccinations, spaying/neutering, and other essential services. These fees contribute to the well-being of the pets and help us continue our mission of rescuing and rehoming animals.</p>
                </div>
            </div>
            <div className="collapse bg-slate-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Can I adopt if I live outside the local area?
                </div>
                <div className="collapse-content">
                    <p>While we primarily serve the local community, we encourage potential adopters from nearby areas to inquire. Each case is considered individually, and we may collaborate with reputable transport services to facilitate adoptions.</p>
                </div>
            </div>
            <div className="collapse bg-slate-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    What should I consider before adopting a pet?
                </div>
                <div className="collapse-content">
                    <p>Adopting a pet is a long-term commitment. Consider factors such as your lifestyle, available time for exercise and care, and the specific needs of the pet. We are happy to provide guidance to ensure a successful match.</p>
                </div>
            </div>
            <div className="collapse bg-slate-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Are the pets up-to-date on vaccinations and medical care?
                </div>
                <div className="collapse-content">
                    <p>Yes, all our pets receive thorough veterinary care, including vaccinations and medical treatments, before adoption. We provide a complete health history for each pet, and our team is available to discuss any specific medical considerations.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;