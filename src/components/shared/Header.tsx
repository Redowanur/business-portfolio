const Header = () => {
  return (
      <header className="fixed top-0 left-0 bg-white text-primary z-50 shadow-md m-2 rounded-lg w-[calc(100%-1rem)]">
          <nav className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                  <a href="#home" className="text-3xl font-serif font-bold">
                      FLORA
                  </a>
                  <ul className="hidden md:flex items-center space-x-8 text-lg">
                      <li><a href="#about" className="nav-link">About</a></li>
                      <li><a href="#shop" className="nav-link">Shop</a></li>
                      <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
                      <li><a href="#blog" className="nav-link">Blog</a></li>
                  </ul>
                  <button
                      className="cursor-pointer bg-accent text-white px-5 py-2 rounded-lg font-semibold hover:bg-highlight transition-colors duration-300 hidden md:block">
                      Contact
                  </button>
                  <button className="md:hidden text-primary focus:outline-none" id="mobile-menu-btn">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16m-7 6h7"></path>
                      </svg>
                  </button>
              </div>
              {/* <!-- Mobile Menu --> */}
              <div className="hidden md:hidden mt-4" id="mobile-menu">
                  <ul className="flex flex-col space-y-4 items-center">
                      <li><a href="#about" className="block hover:text-high[#F8F9FB]">About</a></li>
                      <li><a href="#shop" className="block hover:text-high[#F8F9FB]">Shop</a></li>
                      <li><a href="#testimonials" className="block hover:text-high[#F8F9FB]">Testimonials</a></li>
                      <li><a href="#blog" className="block hover:text-high[#F8F9FB]">Blog</a></li>
                      <li><a href="#contact"
                          className="mt-2 bg-[#C42B2B] text-white px-5 py-2 rounded-lg font-semibold hover:bg-high[#F8F9FB] transition-colors duration-300">Contact</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </header>
  )
}

export default Header