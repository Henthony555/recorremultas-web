import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "../assets/css/MapAgencias.css";
import { MAP_KEY } from "../util/MAP_KEY";

export default function MapAgencias() {
  const { isLoaded } = useLoadScript({
   googleMapsApiKey: MAP_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const [center, setCenter] = useState({ lat: -8.113366, lng: -35.030695 });
  const [selected, setSelected] = useState(null);

  const handleSelect = async (address) => {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    setCenter({ lat, lng });
  };

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete handleSelect={handleSelect} />
      </div>

      <GoogleMap
        zoom={18}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ handleSelect }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelectOption = (address) => {
    setValue(address, false);
    clearSuggestions();
    handleSelect(address);
  };

  return (
    <Combobox onSelect={handleSelectOption}>
      <ComboboxInput
        value={value}
        onChange={handleChange}
        disabled={!ready}
        className="combobox-input"
        placeholder="Buscar Rua..."
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
