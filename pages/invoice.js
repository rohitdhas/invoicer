import { getSession } from "next-auth/react";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { getValue, setValue } from "../utils";
import { v4 as uuidv4 } from "uuid";
import FormModel from "../components/formModel";

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
  const [termsAndConditions, setTermsAndConditions] = useState(
    `- Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.\n- Please quote invoice number when remitting funds.`
  );
  const [dueDate, setDueDate] = useState("");
  const [billedBy, setBilledBy] = useState();
  const [billedTo, setBilledTo] = useState();
  const [bussinessList, setBussinessList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedModal, setSelectedModal] = useState("bussiness");

  useEffect(() => {
    const bussinesses = getValue("bussiness_list");
    const customers = getValue("client_list");

    if (bussinesses && bussinesses.length) setBussinessList(bussinesses);
    if (customers && customers.length) setCustomerList(customers);
  }, [modalVisible]);

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
      {modalVisible ? (
        <div
          onClick={() => setModalVisible(false)}
          className="z-[10] fixed top-0 left-0 right-0 bottom-0 flex align items-center justify-center h-[100vh]"
        >
          <div className="bg-black opacity-50 fixed top-0 left-0 right-0 bottom-0" />
          <FormModel setModalVisible={setModalVisible} type={selectedModal} />
        </div>
      ) : (
        <></>
      )}
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
            <h4 className="underline font-bold">
              Billed By{" "}
              <span className="text-sm no-underline text-gray-500 font-normal">
                (Your Details)
              </span>
            </h4>
            <select
              className="w-full p-2 rounded-sm border-2 border-gray-600 my-2"
              name="bussiness"
              id="bussiness_select"
            >
              {bussinessList.map((item) => {
                return (
                  <option key={uuidv4()} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <p className="text-center my-2">Or</p>
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedModal("bussiness");
                  setModalVisible(true);
                }}
                className="cursor-pointer text-sm px-4 py-2 mx-auto rounded-sm bg-primary-400 hover:bg-primary-300 text-white font-bold"
              >
                <span>Add new Bussiness</span>
                <i className="bi bi-plus-circle ml-2"></i>
              </button>
            </div>
          </div>
          <div className="p-4 rounded-sm border-2 border-gray-600 w-[100%] md:w-[50%] my-4">
            <h4 className="underline font-bold">
              Billed To{" "}
              <span className="text-sm no-underline text-gray-500 font-normal">
                (Client Details)
              </span>
            </h4>
            <select
              className="w-full p-2 rounded-sm border-2 border-gray-600 my-2"
              name="bussiness"
              id="bussiness_select"
            >
              {customerList.map((item) => {
                return (
                  <option key={uuidv4()} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <p className="text-center my-2">Or</p>
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedModal("client");
                  setModalVisible(true);
                }}
                className="cursor-pointer text-sm px-4 py-2 text-center rounded-sm bg-primary-400 hover:bg-primary-300 text-white font-bold"
              >
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
