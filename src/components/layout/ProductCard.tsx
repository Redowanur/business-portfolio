interface ProductProps {
    id: number;
    name: string;
    price?: number;
    image: string;
    description: string; // optional property
}

const ProductCard = ({product}:{product: ProductProps}) => {
    return (
        <div className="cursor-pointer relative group w-full max-w-xs sm:max-w-sm md:w-72 rounded-xl overflow-hidden shadow-2xl">

            {/* <!-- The div with the specified aspect ratio --> */}
            <div className="aspect-square">
                {/* <!-- The image that fills the container --> */}
                <img
                    src={product.image}
                    alt="A beautiful tropical beach with a cozy seating area under a straw umbrella."
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>

            {/* <!-- The overlay that appears on hover -->
		  <!-- Using inset-0 to make it cover the parent div completely --> */}
            <div className="absolute inset-0 hover:bg-black/60 transition-all duration-500 ease-in-out">

                {/* <!-- Container for the details text --> */}
                <div className="p-6 flex flex-col items-center justify-end h-full text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">

                    {/* <!-- The details that will be shown on the overlay --> */}
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <h3 className="text-2xl font-bold">Serenity Beach</h3>
                        <p className="mt-2 text-sm text-gray-200">Escape to paradise. A perfect getaway spot with calming waves and a gentle breeze.</p>
                    </div>

                </div>
            </div>
        </div>)
}

export default ProductCard