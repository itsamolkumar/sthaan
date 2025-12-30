export default function BookingCard({ listing }) {
  return (
    <div className="border rounded-xl p-6 shadow sticky top-24">
      <p className="text-xl font-semibold">
        ₹{listing.pricePerNight}{" "}
        <span className="text-sm font-normal">night</span>
      </p>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <input type="date" className="border border-gray-300 px-4 py-2 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition bg-white shadow-sm" />
        <input type="date" className="border border-gray-300 px-4 py-2 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition bg-white shadow-sm" />
      </div>

      <button className="w-full bg-pink-600 text-white py-3 rounded mt-4 font-semibold">
        Reserve
      </button>

      <p className="text-center text-sm text-gray-500 mt-2">
        You won’t be charged yet
      </p>
    </div>
  );
}
