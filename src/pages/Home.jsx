import { Link } from "react-router-dom";

const Home = () => {
  const phone = "918105369922";

  return (
<div className="min-h-screen bg-yellow-50 text-gray-900">

  {/* HERO */}
  <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-400 py-4 text-center overflow-hidden">
    {/* Background accents */}
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
      
      {/* LOGO */}
    <img
      src="/meatzy1.png"
      alt="Chicken Delivery Logo"
      className="relative mx-auto  w-24 sm:w-52 drop-shadow-xl"
    />

    <h1 className="relative text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
      Fresh <span className="text-white">Skinless Chicken</span><br />
      Delivered to Your Door
    </h1>

    <p className="relative text-lg sm:text-xl text-gray-900/90 mb-10">
      100% Hygienic • Farm Fresh • Same-Day Delivery
    </p>

    < Link 
    to='/contact'
      className="relative inline-flex items-center gap-2 bg-black text-white px-12 py-4 rounded-full text-lg font-semibold
                 hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
    >
      🛒 Place Your Order
    </Link>
  </section>

  {/* FEATURES */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-lg 
                      hover:-translate-y-2 transition-all duration-300">
        <div className="text-4xl mb-4">🐔</div>
        <h3 className="font-bold text-2xl mb-3">Fresh Daily</h3>
        <p className="text-gray-700 leading-relaxed">
          Freshly cut chicken sourced daily from trusted local farms to ensure maximum taste and nutrition.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-lg 
                      hover:-translate-y-2 transition-all duration-300">
        <div className="text-4xl mb-4">🚚</div>
        <h3 className="font-bold text-2xl mb-3">Fast Delivery</h3>
        <p className="text-gray-700 leading-relaxed">
          Same-day delivery available between <strong>8 AM – 9 PM</strong>, right at your doorstep.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-lg 
                      hover:-translate-y-2 transition-all duration-300">
        <div className="text-4xl mb-4">🧼</div>
        <h3 className="font-bold text-2xl mb-3">Premium Quality</h3>
        <p className="text-gray-700 leading-relaxed">
          Skinless, hygienically cleaned, and quality-checked chicken you can trust for your family.
        </p>
      </div>

    </div>
  </section>

</div>


  );
};

export default Home;
