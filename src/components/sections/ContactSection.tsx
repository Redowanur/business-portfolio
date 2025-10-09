import contact from '../../assets/contact_us2.png';

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-white text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 ">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#1F4A89]">Let's Connect</h2>
                    <p className="text-lg text-[#333333] max-w-3xl mx-auto">Have a project in mind? We'd love to hear
                        from
                        you. Reach out for a complimentary consultation.</p>
                </div>
                <div className='lg:flex mlg:items-center lg:gap-8'>
                    <div className="w-full lg:w-1/2">
                        <img
                            src={contact}
                            alt='Contact Us'
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className=" bg-primary p-6 rounded-lg shadow-2xl ">
                            <form>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block mb-2 font-semibold">Name</label>
                                        <input type="text" id="name" placeholder="Your Name"
                                            className="w-full px-4 py-3 rounded-lg bg-white text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#C42B2B]" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 font-semibold">Email</label>
                                        <input type="email" id="email" placeholder="Your Email"
                                            className="w-full px-4 py-3 rounded-lg bg-white text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#C42B2B]" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 font-semibold">Message</label>
                                    <textarea id="message" rows={5} placeholder="Tell us about your project..."
                                        className="w-full px-4 py-3 rounded-lg bg-white text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#C42B2B]"></textarea>
                                </div>
                                <button type="submit"
                                    className="cursor-pointer w-full btn btn-primary px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection