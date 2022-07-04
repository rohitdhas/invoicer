import { useState } from "react";
import { setValue } from "../utils";

export default function FormModel({ type, setModalVisible }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (type === "bussiness") {
      setValue("bussiness_list", { name, email, mobile, address, pincode });
    } else {
      setValue("client_list", { name, email, mobile, address, pincode });
    }
    setModalVisible(false);
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="z-10 bg-white p-6 w-[30%] rounded-sm shadow-lg"
    >
      <h2 className="text-2xl font-bold text-black text-center">
        Add new <br /> {type === "bussiness" ? "Bussiness" : "Client"}
      </h2>
      <form className="flex flex-col justify-center">
        <div className="flex flex-col my-2">
          <label className="text-sm" htmlFor="client_input">
            {type === "bussiness" ? "Bussiness" : "Client"} Name
          </label>
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="border border-gray-500 p-2 rounded-sm"
            type="text"
            name="client"
            id="client_input"
            required
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="border border-gray-500 p-2 rounded-sm"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="text-sm" htmlFor="mobile">
            Mobile
          </label>
          <input
            value={mobile}
            onChange={({ target }) => setMobile(target.value)}
            className="border border-gray-500 p-2 rounded-sm"
            type="number"
            name="mobile"
            id="mobile"
            required
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="text-sm" htmlFor="address">
            Address
          </label>
          <textarea
            value={address}
            onChange={({ target }) => setAddress(target.value)}
            className="border border-gray-500 rounded-sm p-2"
            name="address"
            id="address"
            required
          ></textarea>
        </div>
        <div className="flex flex-col my-2">
          <label className="text-sm" htmlFor="zip_code">
            Postal/Zip Code
          </label>
          <input
            value={pincode}
            onChange={({ target }) => setPincode(target.value)}
            className="border border-gray-500 p-2 rounded-sm"
            type="number"
            name="zip_code"
            id="zip_code"
            required
          />
        </div>
        <button
          type="submit"
          onClick={(e) => onSubmit(e)}
          className="p-2 rounded-sm bg-secondary-300 hover:bg-secondary-200 text-white font-bold text-sm my-2"
        >
          Save and Continue
        </button>
      </form>
    </div>
  );
}
