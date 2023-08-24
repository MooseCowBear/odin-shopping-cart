import { useState } from "react";

export default function Billing() {
  const [formInfo, setFormInfo] = useState({name: "", card: "", exp:""});

  const updateFormInfo = (e) => {
    let data = { ...formInfo };
    data[e.target.id] = e.target.value;
    setFormInfo(data);
  };

  return (
    <div className="bg-gray-100 rounded p-5 grid grid-cols-auto-fit gap-2">
      <h2 className="font-bold col-span-full">Billing Info</h2>
    <div className="flex whitespace-nowrap gap-2">
        <label htmlFor="name" className="lowercase">Name:</label>
        <input
          id="name"
          type="text"
          value={formInfo.one}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
      <div className="flex whitespace-nowrap gap-2">
        <label htmlFor="card" className="lowercase">Card Number:</label>
        <input
          id="card"
          type="text"
          value={formInfo.one}
          onChange={(e) => updateFormInfo(e)}
          className="w-full rounded px-2"
        ></input>
      </div>
      <div className="flex whitespace-nowrap gap-2">
        <label htmlFor="exp" className="lowercase">Expiration Date:</label>
        <input
          id="exp"
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

