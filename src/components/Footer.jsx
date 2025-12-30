const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10">
  <div className="max-w-6xl mx-auto text-center space-y-4">

    {/* Brand */}
    <h3 className="text-2xl font-extrabold tracking-wide text-white">
      Meatzy
    </h3>

    <p className="text-sm text-gray-400">
      Fresh • Hygienic • Fast Delivery
    </p>

    {/* Divider */}
    <div className="w-24 h-[2px] bg-yellow-400 mx-auto my-4 rounded-full"></div>

    {/* Info */}
    <p className="text-sm text-gray-400">
      Delivering premium quality, skinless chicken straight to your doorstep.
    </p>

    {/* Copyright */}
    <p className="text-xs text-gray-500 mt-6">
      © {new Date().getFullYear()} Meatzy. All rights reserved.
    </p>

  </div>
</footer>

  );
};

export default Footer;
