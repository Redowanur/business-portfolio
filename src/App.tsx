import AboutSection from "./components/sections/AboutSection"
import BlogPreviewSection from "./components/sections/BlogPreviewSection"
import ContactSection from "./components/sections/ContactSection"
import ProductCategorySection from "./components/sections/ProductCategorySection"
import HeroSection from "./components/sections/HeroSection"
import TestimonialsSection from "./components/sections/TestimonialsSection"
import Footer from "./components/shared/Footer"
import Header from "./components/shared/Header"

const App = () => {
	return (
		<>
			<Header />
			<main>
				<HeroSection/>
				<AboutSection/>
				<ProductCategorySection/>
				<TestimonialsSection/>
				<BlogPreviewSection/>
				<ContactSection/>
			</main>
			<Footer />
		</>
	)
}

export default App