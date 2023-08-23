import { useState } from "react";

export default function Billing() {
  const [formInfo, setFormInfo] = useState({name: "", card: "", exp:""});

  const updateFormInfo = (e) => {
    let data = { ...formInfo };
    data[e.target.name] = e.target.value;
    setFormInfo(data);
  };

  return (
    <div className="bg-gray-100 rounded p-5 grid grid-cols-auto-fit gap-2">
      <h2 className="font-bold col-span-full">Billing Info</h2>
    <div className="flex whitespace-nowrap gap-2">
        <label className="lowercase">Name:</label>
        <input
          name="name"
          type="text"
          value={formInfo.one}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
      <div className="flex whitespace-nowrap gap-2">
        <label className="lowercase">Card Number:</label>
        <input
          name="card"
          type="text"
          value={formInfo.one}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
      <div className="flex whitespace-nowrap gap-2">
        <label className="lowercase">Expiration Date:</label>
        <input
          name="exp"
          type="text"
          value={formInfo.one}
          placeholder="MM/YYYY"
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
    </div>
  )
}

