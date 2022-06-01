import { ethers } from "ethers";
import abi from "../constants/abi";
import { useState } from "react";

const View = (props) => {
  const contractAddress = "0x9f43BBcA63d6B7D22cd9FD93b0e450183C3Cb649";
  const contractABI = abi.abi;

  const [index, setIndex] = useState(1);
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState([]);

  const onArrayIndexChange = (event) => {
    setIndex(event.target.value);
  };

  const onAddressChange = () => {
    setAddress(event.target.value);
  };

  async function view() {
    const provider = props.provider;
    const signer = provider.getSigner();
    const manufacturer = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    try {
      console.log("Fetching details");
      const viewData = await manufacturer.getDrugDetails(
        address ? address : window.alert("Enter the manufacturer address"),
        index ? index : window.alert("Enter Id")
      );
      console.log(viewData.name);
      // console.log(viewData.price);
      // console.log(viewData.batchNum);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <main>
        {props.active ? (
          <div>
            Verify Drug Details
            <br />
            <br />
            <label>Enter the manufacturer address:</label>
            <br />
            <input id="address" type="name" onChange={onAddressChange} />
            <br />
            <label>Enter the id: </label>
            <br />
            <input id="index" type="number" onChange={onArrayIndexChange} />
            <br />
            <br />
            <button type="button" onClick={() => view()}>
              view
            </button>
          </div>
        ) : (
          <>Connect Wallet</>
        )}
      </main>
    </div>
  );
};

export default View;
