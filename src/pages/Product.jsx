import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Drumsticks(Leg piece)", price: "₹260/kg" , url:"./leg pice.webp", page:"/leg-piece" },
  { id: 2, name: "Curry Cut", price: "₹220/kg" , url:"./curry cut.jpg" , page:"/curry-cut"},
  { id: 3, name: "Boneless Chicken", price: "₹250/kg", url:"./boneless.jpg" , page:"/boneless" },
  { id: 4, name: "Gizzard & Liver", price: "₹180/kg" , url:"./liver.jpeg" , page:"/liver"},
];

const Products = () => {
  const phone = "918105369922";

  

  return (
    <div className="min-h-screen bg-yellow-50 px-6 py-5">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-14">
    Our <span className="text-yellow-500">Products</span>
  </h2>
 
  <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12">
    {products.map((item) => (
      < Link to= {`${item.page}`}>
      <div
        key={item.id}
        className="group bg-white rounded-3xl shadow-lg overflow-hidden 
                   hover:-translate-y-2 transition-all duration-300"
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={item.url}
            alt={item.name}
            className="w-full h-72 object-cover 
                       group-hover:scale-110 transition-transform duration-500"
          />

          {/* Price badge */}
          <span className="absolute top-4 right-4 bg-yellow-400 text-black 
                           px-4 py-1 rounded-full text-lg font-bold shadow">
            {item.price}
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            {item.name}
          </h3>

          <p className="text-gray-600 mb-6">
            Fresh, hygienic & ready for same-day delivery.
          </p>
        
          <button
           
            className="inline-flex items-center gap-2 bg-black text-white 
                       text-lg px-8 py-3 rounded-full font-semibold
                       hover:bg-gray-800 transition-all duration-300
                       shadow-lg hover:shadow-xl"
          >
             Place Your Order
          </button> 
        </div>
      </div>
      </Link>
    ))}
  </div>
</div>

  );
};

export default Products;
