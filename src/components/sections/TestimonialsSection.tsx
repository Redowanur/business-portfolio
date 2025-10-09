import Quote from '../../assets/quote.png';
import Customer from '../../assets/customer1..png';

interface Testimonial {
    id: number
    name: string
    role: string
    company: string
    content: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Interior Designer",
        company: "Modern Spaces",
        content:
            "The quality of their mirrors is exceptional. Our clients are always impressed with the craftsmanship and attention to detail.",
        rating: 5
    },
    {
        id: 2,
        name: "James Rodriguez",
        role: "Contractor",
        company: "BuildRight Co",
        content:
            "We've been using their interior doors for years. The installation is seamless and the durability is unmatched.",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Homeowner",
        company: "Private Client",
        content:
            "Transformed our bathroom with their shower enclosures. The frameless design is stunning and the quality is outstanding.",
        rating: 5,
    },
    {
        id: 4,
        name: "Michael Thompson",
        role: "Architect",
        company: "Thompson & Associates",
        content:
            "Their product range perfectly complements modern architectural designs. Highly recommend for any premium project.",
        rating: 5,
    },
    {
        id: 5,
        name: "Lisa Anderson",
        role: "Property Developer",
        company: "Urban Living",
        content:
            "We outfit all our luxury apartments with their products. The consistency in quality and style is remarkable.",
        rating: 5,
    },
    {
        id: 6,
        name: "David Park",
        role: "Renovation Specialist",
        company: "Park Renovations",
        content: "The customer service is as impressive as the products. They truly care about getting every detail right.",
        rating: 5,
    },
    {
        id: 7,
        name: "Rachel Green",
        role: "Design Consultant",
        company: "Green Interiors",
        content:
            "Their mirrors add that perfect finishing touch to any space. The LED options are particularly popular with clients.",
        rating: 5,
    },
    {
        id: 8,
        name: "Tom Wilson",
        role: "Hotel Manager",
        company: "Luxury Suites",
        content:
            "We've installed their products throughout our hotel. Guests consistently compliment the bathroom fixtures.",
        rating: 5,
    },
]



const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="flex-shrink-0 w-[350px] p-6 bg-card border border-primary/25 transition-colors duration-300 bg-lightGrey rounded-lg">
            <div className="mb-4">
                <img
                    alt="Qoute icon"
                    src={Quote}
                    className='h-5'
                />
            </div>
            <p className="text-foreground/90 mb-6 leading-relaxed text-balance">{testimonial.content}</p>
            <div className="flex items-center gap-3">
                <img
                    src={Customer}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    // Duplicate testimonials for seamless infinite scroll
    const firstRow = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)]
    const secondRow = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)]

    return (
        <section className="min-h-screen py-24 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-4">What Our Clients Say</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Trusted by designers, contractors, and homeowners for exceptional quality and service
                </p>
            </div>

            <div className="relative">
                {/* Fade overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* First row - scrolls right */}
                <div className="mb-8 overflow-hidden">
                    <div className="flex gap-6 animate-scroll-right">
                        {firstRow.map((testimonial, index) => (
                            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>

                {/* Second row - scrolls left */}
                <div className="overflow-hidden">
                    <div className="flex gap-6 animate-scroll-left">
                        {secondRow.map((testimonial, index) => (
                            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
