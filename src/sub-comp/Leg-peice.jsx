import React, { useState } from "react";

const Leg = () => {
  const [quantity, setQuantity] = useState("");
  const phone = "918105369922";

  const orderNow = () => {
    if (!quantity) {
      alert("Please enter quantity!");
      return;
    }

    const msg = `Hello Meatzy 👋
I want to order:

🍗 Item: Boneless Chicken
⚖️ Quantity: ${quantity}
💰 Price: ₹250/kg`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen  bg-yellow-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* IMAGE */}
        <div className="md:w-1/2">
          <img
            src="./leg pice.webp"
            alt="Boneless Chicken"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="md:w-1/2 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Drumsticks(Leg pieces) </h1>
            <p className="text-xl text-gray-700 mb-4">₹260/kg</p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our Drumsticks(Leg piece), is freshly cut, hygienic, and ready for your 
              daily cooking needs. Perfect for curries, stir-fries, or quick meals.
            </p>

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✔ Fresh & Quality Checked</li>
              <li>✔ Skinless and Cleaned</li>
              <li>✔ Same-Day Delivery</li>
              <li>✔ Easy Ordering via WhatsApp</li>
            </ul>

            {/* Quantity input */}
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                ⚖️
              </span>
              <input
                type="text"
                placeholder="Quantity (e.g. 1kg)"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
                           focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Order button */}
          <button
            onClick={orderNow}
            className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg
                       hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >
            💬 Order on WhatsApp
          </button>

          <p className="mt-4 text-xs text-gray-500 text-center">
            🔒 Your details are safe • Only order confirmation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leg;
