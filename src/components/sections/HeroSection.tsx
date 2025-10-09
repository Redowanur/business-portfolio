const HeroSection = () => {
    return (
        <section id="home" className="hero-section h-screen flex items-center justify-center text-center">
            <div className="container mx-auto px-6 text-white animate-slide-in-up"
                style={{ animation: "slideInUp 1s ease-out forwards" }}>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
                    Elegance in Every <span className="text-accent">Reflection</span>
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
                    Discover our collection of premium aluminium doors and innovative LED mirrors, crafted to bring
                    modern sophistication and quality to your space.
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-4">
                    <a href="#shop" className="btn btn-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider">
                        View Collection
                    </a>
                    <a href="#contact"
                        className="btn btn-secondary px-8 py-4 rounded-lg font-bold uppercase tracking-wider">
                        Request a Quote
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection