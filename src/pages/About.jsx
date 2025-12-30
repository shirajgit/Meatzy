const About = () => {
  return (
<div className="min-h-screen bg-gradient-to-br 
                from-red-50 via-rose-50 to-orange-50 
                px-6 py-4">


  {/* Heading */}
  <h2 className="text-4xl sm:text-6xl font-extrabold text-center mb-16">
    About <span className="text-red-600">Meatzy</span>
  </h2>

  {/* Cards */}
  <div className="max-w-5xl mx-auto grid gap-12">

    {/* Card 1 */}
    <div className="group bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl
                    hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="text-4xl">🐔</div>
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Fresh & Hygienic Chicken
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Meatzy delivers <strong>fresh, quality-checked, skinless chicken</strong>
            straight to your doorstep. Every order is hygienically cleaned,
            safely packed, and handled with care to lock in freshness.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="group bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl
                    hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="text-4xl">⭐</div>
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Why Choose Meatzy?
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>✔ Daily farm-fresh supply</li>
            <li>✔ 100% hygienic & skinless meat</li>
            <li>✔ Fast same-day delivery</li>
            <li>✔ Easy ordering via WhatsApp & phone</li>
            <li>✔ Trusted by families & local businesses</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="group bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl
                    hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="text-4xl">🧼</div>
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Quality & Safety First
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We follow strict hygiene standards at every step — from sourcing
            and cutting to packaging and delivery — ensuring safe,
            fresh meat reaches your kitchen every time.
          </p>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="group bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl
                    hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="text-4xl">👨‍👩‍👧‍👦</div>
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Who We Serve
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Meatzy proudly serves <strong>families, working professionals,
            restaurants, caterers, and local food businesses</strong>.
            Whether it’s a small home meal or bulk orders, we’ve got you covered.
          </p>
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="group bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl
                    hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="text-4xl">🚚</div>
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Your Convenience, Our Priority
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            From daily home cooking to bulk restaurant orders,
            Meatzy ensures <strong>consistent quality, fast delivery,
            and reliable service</strong> designed for modern lifestyles.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="bg-gray-100 rounded-xl px-4 py-3 text-center">
              🕗 <br /> <strong>8 AM – 9 PM</strong>
            </div>
            <div className="bg-gray-100 rounded-xl px-4 py-3 text-center">
              📍 <br /> <strong>Local Supply</strong>
            </div>
            <div className="bg-gray-100 rounded-xl px-4 py-3 text-center">
              📞 <br /> <strong>WhatsApp / Call</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  {/* CTA Section */}
  <div className="mt-20 text-center">
    <h3 className="text-3xl font-extrabold mb-4">
      Ready to Order Fresh Chicken?
    </h3>
    <p className="text-gray-600 mb-6">
      Experience freshness, hygiene, and fast delivery with Meatzy.
    </p>
    <a
      href="/contact"
      className="inline-block bg-black text-white px-10 py-4 rounded-full
                 font-semibold hover:bg-gray-800 transition shadow-lg"
    >
      Order Now on WhatsApp
    </a>
  </div>

</div>


  );
};

export default About;
