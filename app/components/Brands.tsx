import Image from "next/image";
const BrandsWeRepair = () => {
  const brands = [
    { name: "Samsung", logo: "/brands/samsung.png" },
    { name: "LG", logo: "/brands/lg.png" },
    { name: "Whirlpool", logo: "/brands/whirlpool.png" },
    { name: "Dacor Appliances", logo: "/brands/dacor.png" },
    { name: "Bosch", logo: "/brands/bosch-logo.png" },
    { name: "ElectroLux", logo: "/brands/electrolux.webp" },
    { name: "Maytag", logo: "/brands/maytag.png" },
    { name: "Frigidaire", logo: "/brands/frigidaire.png" },
  ];

  return (
    <section className="bg-gray-100 py-20" id="brands">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#ce360b] mb-2 text-center">
          {" "}
          Brands We Repair
        </h2>
        <div className="h-[2px] w-16 bg-blue-700 mb-4 mx-auto "></div>

        <p className="text-center text-gray-600 mb-6 text-lg">
          We specialize in repairing appliances from leading brands.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="mx-auto">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={96}
                height={96}
                className="w-24 h-24 object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsWeRepair;
