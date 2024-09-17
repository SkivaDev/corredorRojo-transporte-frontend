import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [
      { image: "/src/assets/images/img1.jpg", title: "UN NUEVO SISTEMA", subtitle: "de trasporte urbano" },
      { image: "/src/assets/images/img2.jpg", title: "MODERNA FLOTA DE BUSES", subtitle: "para el trasporte público de Lima" },
      { image: "/src/assets/images/img3.jpg", title: "MÁS DE 40 PARADEROS", subtitle: "exclusivo para nuestros pasajeros" },
    ]
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
      }, 5000) // Change slide every 5 seconds
  
      return () => clearInterval(timer)
    }, [])
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
    }

  return (
    <section className="relative h-[400px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            alt1={slide.subtitle}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-2xl font-bold mb-4">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
