import { getSession } from "next-auth/react";
import Navbar from "../components/navbar";
import { useState } from "react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function Invoice() {
  const [invoiceDate, setInvoiceDate] = useState("");
  const [productDetails, setProductDetails] = useState([
    { key: "zzz", item_name: "", quantity: 0, amount: 0 },
  ]);
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [billedBy, setBilledBy] = useState();
  const [billedTo, setBilledTo] = useState();

  const updateProductDetails = (key, field, value) => {
    const newList = productDetails.map((item) => {
      if (item.key === key) {
        item[field] = value;
      }
      return item;
    });

    setProductDetails(newList);
  };

  return (
    <div className="pt-12">
      <Navbar />
      <h3 className="text-xl font-bold text-primary-400 underline text-center">
        New Invoice
      </h3>
      <form className="w-[90%] md:w-[70%] bg-primary-100 p-10 mx-auto my-6 rounded-sm">
        <div className="text-center">
          <h3 className="text-xl font-bold">Invoice - A00001</h3>
          <p className="text-xs text-gray-500 font-medium">
            Fill up all the required (*) fields.
          </p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="invoice_date"
            className="font-medium text-sm text-gray-500 my-2"
          >
            Invoice Date
          </label>
          <input
            onChange={({ target }) => setInvoiceDate(target.value)}
            className="w-min px-4 py-2 rounded-sm border-2 border-gray-600"
            type="date"
            id="invoice_date"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="due_date"
            className="font-medium text-sm text-gray-500 my-2"
          >
            Due Date
          </label>
          <input
            onChange={({ target }) => setDueDate(target.value)}
            className="w-min px-4 py-2 rounded-sm border-2 border-gray-600"
            type="date"
            id="due_date"
            required
          />
        </div>
        <div className="flex justify-center flex-col md:flex-row">
          <div className="p-4 rounded-sm border-2 border-gray-600 w-[100%] md:w-[50%] my-4 mr-4">
            <h4 className="underline font-bold">Billed By</h4>
            <select
              className="w-full p-2 rounded-sm border-2 border-gray-600 my-2"
              name="bussiness"
              id="bussiness_select"
            >
              <option value="text">Option 1</option>
              <option value="text">Option 2</option>
              <option value="text">Option 3</option>
            </select>
            <p className="text-center my-2">Or</p>
            <div className="flex justify-center">
              <button className="cursor-pointer text-sm px-4 py-2 mx-auto rounded-sm bg-primary-400 hover:bg-primary-300 text-white font-bold">
                <span>Add new Bussiness</span>
                <i className="bi bi-plus-circle ml-2"></i>
              </button>
            </div>
          </div>
          <div className="p-4 rounded-sm border-2 border-gray-600 w-[100%] md:w-[50%] my-4">
            <h4 className="underline font-bold">Billed To</h4>
            <select
              className="w-full p-2 rounded-sm border-2 border-gray-600 my-2"
              name="bussiness"
              id="bussiness_select"
            >
              <option value="text">Option 1</option>
              <option value="text">Option 2</option>
              <option value="text">Option 3</option>
            </select>
            <p className="text-center my-2">Or</p>
            <div className="flex justify-center">
              <button className="cursor-pointer text-sm px-4 py-2 text-center rounded-sm bg-primary-400 hover:bg-primary-300 text-white font-bold">
                <span>Add new Client</span>
                <i className="bi bi-plus-circle ml-2"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-sm border-2 border-gray-600 p-4">
          <h4 className="underline font-bold">Product/Service Details</h4>
          <div className="flex flex-col">
            {productDetails.map((item) => {
              return (
                <div
                  key={item.key}
                  className="flex justify-between align items-center flex-col lg:flex-row"
                >
                  <div className="flex flex-col">
                    <label className="font-medium text-sm text-gray-500 my-2">
                      Item Name
                    </label>
                    <input
                      className="w-min px-4 py-2 rounded-sm border-2 border-gray-600"
                      type="text"
                      required
                      onChange={({ target }) =>
                        updateProductDetails(
                          item.key,
                          "item_name",
                          target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-sm text-gray-500 my-2">
                      Quantity
                    </label>
                    <input
                      className="w-min px-4 py-2 rounded-sm border-2 border-gray-600"
                      type="number"
                      required
                      onChange={({ target }) =>
                        updateProductDetails(item.key, "quantity", target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-sm text-gray-500 my-2">
                      Amount
                    </label>
                    <input
                      className="w-min px-4 py-2 rounded-sm border-2 border-gray-600"
                      type="number"
                      required
                      onChange={({ target }) =>
                        updateProductDetails(item.key, "amount", target.value)
                      }
                    />
                  </div>
                  {productDetails.length > 1 ? (
                    <i
                      onClick={() => {
                        const list = productDetails.filter((obj) => {
                          return obj.key !== item.key;
                        });
                        setProductDetails(list);
                      }}
                      className="bi bi-x-circle"
                    ></i>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProductDetails((prev) => [
                ...prev,
                { key: Date.now(), amount: 0, quantity: 0, item_name: "" },
              ]);
            }}
            className="cursor-pointer text-sm px-4 py-2 my-4 text-center rounded-sm hover:bg-gray-200 bg-white w-full font-bold border-2 border-gray-600"
          >
            <span>Add Field</span>
            <i className="bi bi-plus-circle ml-2"></i>
          </button>
        </div>
        <div className="rounded-sm border-2 border-gray-600 p-4 my-4">
          <h4 className="underline font-bold">Terms and Conditions</h4>
          <textarea
            value={termsAndConditions}
            onChange={({ target }) => setTermsAndConditions(target.value)}
            className="px-4 py-2 mt-2 rounded-sm border-2 border-gray-600 w-full"
          ></textarea>
        </div>
        <div className="flex justify-center mt-6">
          <button className="cursor-pointer mr-2 text-sm px-4 py-2 text-center rounded-sm bg-white hover:bg-gray-100 border-2 border-black font-bold">
            Save As Draft
          </button>
          <button className="cursor-pointer text-sm px-4 py-2 text-center rounded-sm bg-secondary-300 border-2 border-secondary-300 hover:bg-secondary-200 text-white font-bold">
            Save And Continue
          </button>
        </div>
      </form>
    </div>
  );
}
