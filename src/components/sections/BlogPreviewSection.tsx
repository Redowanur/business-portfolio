const BlogPreviewSection = () => {
    return (
        <section id="blog" className="py-24 bg-lightGrey">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 ">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1F4A89] mb-4">From Our Journal</h2>
                    <p className="text-lg text-[#333333] max-w-3xl mx-auto">Insights, trends, and inspiration for your
                        next
                        project.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <article className="bg-white rounded-lg overflow-hidden shadow-lg  group">
                        <img src="https://placehold.co/600x400/F8F9FB/1F4A89?text=Blog+1" alt="Blog Post"
                            className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <p className="text-sm text-[#C42B2B] font-semibold mb-2">Design Tips</p>
                            <h3
                                className="text-xl font-serif font-bold text-[#1F4A89] mb-3 group-hover:text-[#C42B2B] transition-colors cursor-pointer">
                                5 Ways to Modernize Your Home Entrance</h3>
                            <p className="text-[#333333] mb-4">Discover how aluminium doors can transform your home's
                                first
                                impression...</p>
                            <a href="#" className="font-bold text-[#333333] hover:text-[#C42B2B]">Read More &rarr;</a>
                        </div>
                    </article>
                    <article className="bg-white rounded-lg overflow-hidden shadow-lg  group">
                        <img src="https://placehold.co/600x400/F8F9FB/1F4A89?text=Blog+2" alt="Blog Post"
                            className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <p className="text-sm text-[#C42B2B] font-semibold mb-2">Product Guide</p>
                            <h3
                                className="text-xl font-serif font-bold text-[#1F4A89] mb-3 group-hover:text-[#C42B2B] transition-colors cursor-pointer">
                                The Ultimate Guide to LED Mirror lighting</h3>
                            <p className="text-[#333333] mb-4">Learn how to choose the perfect LED mirror for your
                                bathroom...
                            </p>
                            <a href="#" className="font-bold text-[#333333] hover:text-[#C42B2B]">Read More &rarr;</a>
                        </div>
                    </article>
                    <article className="bg-white rounded-lg overflow-hidden shadow-lg  group">
                        <img src="https://placehold.co/600x400/F8F9FB/1F4A89?text=Blog+3" alt="Blog Post"
                            className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <p className="text-sm text-[#C42B2B] font-semibold mb-2">Industry News</p>
                            <h3
                                className="text-xl font-serif font-bold text-[#1F4A89] mb-3 group-hover:text-[#C42B2B] transition-colors cursor-pointer">
                                Why Aluminium is the Future of Sustainable Building</h3>
                            <p className="text-[#333333] mb-4">Explore the environmental benefits of choosing aluminium
                                products...</p>
                            <a href="#" className="font-bold text-[#333333] hover:text-[#C42B2B]">Read More &rarr;</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default BlogPreviewSection