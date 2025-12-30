import { FaWifi, FaParking, FaTv, FaSnowflake, FaUtensils   } from "react-icons/fa";

const ICONS = {
  WiFi: <FaWifi />,
  Parking: <FaParking />,
  TV: <FaTv />,
  AC: <FaSnowflake />,
  Kitchen: <FaUtensils />
};

export default function Amenities({ amenities = [] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Amenities</h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((a) => (
          <div key={a} className="flex items-center gap-3">
            <span className="text-lg">{ICONS[a]}</span>
            <span>{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
