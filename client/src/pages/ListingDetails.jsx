import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

import ImageGallery from "../components/ImageGallery";
import Amenities from "../components/Amenities";
import HostInfo from "../components/HostInfo";
import Reviews from "../components/Reviews";
import BookingCard from "../components/BookingCard";
import ListingMap from "../components/ListingMap";
import Loader from "../components/Loader";

export default function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await api.get(`/post/listings/${id}`);
      setListing(data);
    };
    load();
  }, [id]);

  if (!listing) return <p className="text-center mt-10"><Loader/></p>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* TITLE */}
      <h1 className="text-2xl font-semibold">{listing.name}</h1>
      <p className="text-gray-600">{listing.location}</p>

      {/* PHOTOS */}
      <ImageGallery images={listing.images} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          <HostInfo host={listing.owner} />

          <div>
            <h2 className="text-xl font-semibold mb-2">About this place</h2>
            <p className="text-gray-700">{listing.description}</p>
          </div>

          <Amenities amenities={listing.amenities} />

          <Reviews reviews={listing.reviews} />
        </div>



        {/* BOOKING CARD */}
        <BookingCard listing={listing} />
        <ListingMap
        height="450px"
          lat={listing.coordinates.lat}
          long={listing.coordinates.long}
          title={listing.name}
          price={listing.pricePerNight}
        />

      </div>
    </section>
  );
}
