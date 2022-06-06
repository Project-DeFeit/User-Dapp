import { QrReader } from "react-qr-reader";
import { useState } from "react";
import abi from "../constants/abi";
import { ethers } from "ethers";

const Scanner = (props) => {
  const [result, setResult] = useState("");

  const postsplitValue = result.split(";");
  const address = postsplitValue[0];
  const index = postsplitValue[1];

  const contractABI = abi.abi;
  const contractAddress = "0x17E105B0dFDD153Da61bb3040eF53Ae4EFCa8922";

  async function checkStatus() {
    const provider = props.provider;
    const signer = provider.getSigner();
    const manufacturer = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    try {
      console.log("loading details");
      console.log(address);
      console.log(index);
      const getData = await manufacturer.getDrugDetails(address, index);
      console.log("Data successfully loaded!");
      console.log(getData.name);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {props.active ? (
        <div style={{ width: "500px" }}>
          <QrReader
            onResult={(result) => {
              if (!!result) {
                setResult(result?.text);
                console.log("Data Fetched from QR");
              }
            }}
          />
          <button onClick={() => checkStatus()}>Verify</button>
        </div>
      ) : (
        <>Please connect to metamask</>
      )}
    </>
  );
};

export default Scanner;
