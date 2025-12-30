import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function ListingMap({
  lat,
  long,
  title,
  price,
  height = "350px",
  width="100%",
}) {
  if (!lat || !long) return null;

  return (
    <div className="rounded-2xl overflow-hidden border">
      <MapContainer
        center={[lat, long]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height, width }}
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker */}
        <Marker position={[lat, long]}>
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">{title}</p>
              {price && (
                <p className="text-gray-600">
                  ₹{price} / night
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
