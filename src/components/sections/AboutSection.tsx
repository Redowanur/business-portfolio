import AboutVideo from '../../assets/LED Mirror Manufacturers.mp4';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:flex mlg:items-center lg:gap-8">

                {/* <!-- Text Content --> */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-4 ">
                        Why Choose Flora?
                    </h2>
                    <p className="text-base lg:text-lg text-darkGrey leading-relaxed">
                        Our products are crafted from the finest materials, ensuring durability and timeless
                        elegance. We blend
                        cutting-edge technology with contemporary aesthetics for a truly modern feel and are
                        dedicated to
                        pushing the boundaries of design and quality to deliver exceptional products. Your
                        satisfaction is our
                        top priority, and we provide tailored solutions and dedicated support for every glass, LED
                        mirror, and
                        aluminium door project.
                    </p>
                    <button
                        className="mt-5 cursor-pointer btn btn-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider">
                        Go to Shop
                    </button>
                </div>

                {/* <!-- Video Content --> */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <video controls className="rounded-lg w-full max-w-lg lg:max-w-full shadow-lg">
                        <source src={AboutVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}

export default AboutSection