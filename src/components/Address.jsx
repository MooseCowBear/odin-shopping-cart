import PropTypes from "prop-types";
import { useState } from "react";

export default function Address({ title }) {
  const [formInfo, setFormInfo] = useState({
    one: "",
    two: "",
    city: "",
    state: "",
    zip: "",
  });

  const updateFormInfo = (e) => {
    let data = { ...formInfo };
    data[e.target.name] = e.target.value;
    setFormInfo(data);
  };

  return (
    <div className="bg-gray-100 rounded p-5 grid grid-cols-auto-fit gap-2">
      <h2 className="font-bold col-span-full">{title}</h2>
      <div className="flex whitespace-nowrap gap-2">
        <label className="lowercase">Line 1:</label>
        <input
          name="one"
          type="text"
          value={formInfo.one}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
      <div className="flex whitespace-nowrap gap-2">
        <label className="lowercase">Line 2:</label>
        <input
          name="two"
          type="text"
          value={formInfo.two}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
      <div className="flex whitespace-nowrap gap-2">
        <label className="lowercase">City:</label>
        <input
          name="city"
          type="text"
          value={formInfo.city}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
      <div className="flex whitespace-nowrap gap-2">
        <label className="lowercase">State:</label>
        <input
          name="state"
          type="text"
          value={formInfo.state}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
      <div className="flex whitespace-nowrap gap-2">
        <label className="lowercase">Zipcode:</label>
        <input
          name="zip"
          type="text"
          value={formInfo.zip}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
    </div>
  );
}

Address.propTypes = {
  title: PropTypes.string.isRequired,
};
