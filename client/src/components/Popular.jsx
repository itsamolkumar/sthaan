import { FaRegHeart } from "react-icons/fa";

export default function Popular(){

    return(
        <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold mb-4">Popular near you</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Cards */}
        <a href="listing-details.html" className="block bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition relative">
          <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=60" alt="Sunny Loft" />
          <button aria-label="Add to wishlist" className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-pink-100 transition">
            <i className="fa-regular fa-heart text-pink-500"></i>
          </button>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Sunny Loft</h3>
              <div className="text-sm text-yellow-500">★ 4.8</div>
            </div>
            <p className="text-sm text-gray-500">Goa, India</p>
            <div className="mt-2 font-bold">₹3,200 <span className="text-sm font-normal text-gray-500">/ night</span></div>
          </div>
        </a>
        <a href="listing-details.html" className="block bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition relative">
          <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=60" alt="Palm Villa" />
          <button aria-label="Add to wishlist" className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-pink-100 transition">
            <i className="fa-regular fa-heart text-pink-500"></i>
          </button>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Palm Villa</h3>
              <div className="text-sm text-yellow-500">★ 4.7</div>
            </div>
            <p className="text-sm text-gray-500">Alibag, India</p>
            <div className="mt-2 font-bold">₹7,500 <span className="text-sm font-normal text-gray-500">/ night</span></div>
          </div>
        </a>
        <a href="listing-details.html" className="block bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition relative">
          <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=60" alt="Cliff Cabin" />
          <button aria-label="Add to wishlist" className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-pink-100 transition">
            <i className="fa-regular fa-heart text-pink-500"></i>
          </button>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Cliff Cabin</h3>
              <div className="text-sm text-yellow-500">★ 4.6</div>
            </div>
            <p className="text-sm text-gray-500">Manali, India</p>
            <div className="mt-2 font-bold">₹4,900 <span className="text-sm font-normal text-gray-500">/ night</span></div>
          </div>
        </a>
        <a href="listing-details.html" className="block bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition relative">
          <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=1200&q=60" alt="City Studio" />
          <button aria-label="Add to wishlist" className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-pink-100 transition">
            <i className="fa-regular fa-heart text-pink-500"></i>
          </button>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">City Studio</h3>
              <div className="text-sm text-yellow-500">★ 4.9</div>
            </div>
            <p className="text-sm text-gray-500">Mumbai, India</p>
            <div className="mt-2 font-bold">₹,300 <span className="text-sm font-normal text-gray-500">/ night</span></div>
          </div>
        </a>
        
      </div>
    </section>
  
    )
}