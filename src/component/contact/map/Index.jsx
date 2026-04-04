import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue in React
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

// Creative IT Institute - Dhanmondi, Dhaka
const CIT_POSITION = [23.7461, 90.3742];

const Maps = () => {
  return (
    <div className="w-full h-[450px] rounded-sm overflow-hidden shadow-md">
      <MapContainer
        center={CIT_POSITION}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={CIT_POSITION}>
          <Popup>
            <div className="font-urbanist">
              <p className="font-bold text-[14px] text-primary mb-1">
                🎓 Creative IT Institute
              </p>
              <p className="text-[12px] text-secondary">
                Momtaz Plaza (4th Floor)
              </p>
              <p className="text-[12px] text-secondary">
                House#7, Road#4, Dhanmondi
              </p>
              <p className="text-[12px] text-secondary">Dhaka-1205</p>
              <a
                href="https://maps.google.com/?q=Creative+IT+Institute+Dhanmondi+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-tarnary mt-2 inline-block hover:underline"
              >
                Google Maps এ দেখো →
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;