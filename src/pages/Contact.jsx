import { useState } from "react";

export default function Order() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    type:"",
    quantity: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit order to WhatsApp
  const submitOrder = () => {
    const { name, phone, address, type, quantity } = form;

  if (!name || !phone || !address || !quantity || !type) {
  alert("Please fill all details");
  return;
}


const message = `
  *New Chicken Order*

 *Name:* ${name}
*Phone:* ${phone}
*Address:* ${address}

 *Cut Type:* ${type}
 *Quantity:* ${quantity}
`;


    const whatsappNumber = "918105369922"; // 👉 replace with your number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 
                    flex items-center justify-center px-4 py-8">

      <div className="relative bg-white/90 backdrop-blur-2xl p-12 rounded-[2rem]
                      shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                      w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
            Order Fresh Chicken
          </h2>
          <p className="text-gray-600">
            Clean • Hygienic • Same-Day Delivery
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Name */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📞</span>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div className="relative">
            <span className="absolute left-4 top-4 text-gray-400">📍</span>
            <textarea
              name="address"
              rows={3}
              placeholder="Delivery Address"
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
            />
          </div>

 
      {/* Cut Type */}
<div className="relative">
  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
    🍗
  </span>

  <select
    name="type"
    value={form.type}
    onChange={handleChange}
    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
               bg-white text-gray-700
               focus:ring-2 focus:ring-yellow-400 focus:outline-none"
  >
    <option value="">Select Cut Type</option>
    <option value="Curry Cut">Curry Cut</option>
    <option value="Boneless">Boneless</option>
    <option value="Liver">Liver</option>
    <option value="Leg Piece">Leg Piece</option>
  </select>
</div>



          {/* Quantity */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">⚖️</span>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity (e.g. 1kg)"
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* CTA */}
          <button
            onClick={submitOrder}
            className="w-full flex items-center justify-center gap-3
                       bg-black text-white py-4 rounded-full font-semibold text-lg
                       hover:bg-gray-800 hover:scale-[1.02]
                       transition-all duration-300 shadow-xl"
          >
            💬 Send Order on WhatsApp
          </button>
        </div>

        {/* Trust Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            🔒 Your details are safe • No spam • Only order confirmation
          </p>
        </div>

      </div>
    </div>
  );
}
