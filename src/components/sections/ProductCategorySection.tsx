import { doorCategories, showerCategories, mirrorCategories } from "../../data/data"
import ProductCard from "../layout/ProductCard";

const ProductCategorySection = () => {
	return (
		<section id="products" className="min-h-screen bg-lightGrey py-24">
			<div className="container mx-auto px-4 text-center">
				<h1 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-4 ">Product Categories</h1>
				<div>
					<h2 className="text-3xl font-bold text-darkGrey">Mirrors</h2>
					<div className="bg-darkGrey h-2 rounded-full w-30 mx-auto mb-5" />
					<div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
						{
							mirrorCategories.map(product => <ProductCard key={product.id} product={product} />)
						}
					</div>
				</div>
				<div>
					<h2 className="text-3xl font-bold text-darkGrey">Interior Doors</h2>
					<div className="bg-darkGrey h-2 rounded-full w-30 mx-auto mb-5" />
					<div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
						{
							doorCategories.map(product => <ProductCard key={product.id} product={product} />)
						}
					</div>
				</div>
				<div>
					<h2 className="text-3xl font-bold text-darkGrey">Showers</h2>
					<div className="bg-darkGrey h-2 rounded-full w-30 mx-auto mb-5" />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
						{
							showerCategories.map(product => <ProductCard key={product.id} product={product} />)
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductCategorySection;