import { QrReader } from "react-qr-reader";
import { useState } from "react";
import abi from "../constants/abi";
import { ethers } from "ethers";

const Scanner = (props) => {
  const [result, setResult] = useState("");

  const [status, setStatus] = useState(0);
  // const [flag, setFlag] = useState(0);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [license, setLicense] = useState("");
  const [batch, setBatch] = useState("");
  const [mdate, setMdate] = useState("");
  const [edate, setEdate] = useState("");
  const [price, setPrice] = useState("");
  const [adrs, setAdrs] = useState("");
  const [ingredients, setIngredients] = useState("");

  const postsplitValue = result.split(";");
  const address = postsplitValue[0];
  const index = postsplitValue[1];

  const contractABI = abi.abi;
  const contractAddress = "0x9BFFd0bA042d40f38811Ff7e34D7D22e2FeaC223";

  async function getDrugData() {
    const provider = props.provider;
    const signer = provider.getSigner();
    const manufacturer = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    try {
      console.log("loading details");
      const getData = await manufacturer.getDrugDetails(address, index);
      console.log("Data successfully loaded!");
      // setFlag(1);
      setStatus(1);
      setName(getData.name);
      const content = getData.netContent;
      setContent(content.toNumber());
      setLicense(getData.mfgLicenseNum);
      const batchNum = getData.batchNum;
      setBatch(batchNum.toNumber());
      const mfdDate = getData.mfdDate;
      const time = new Date(mfdDate * 1000);
      setMdate(time.toString());
      const expDate = getData.expDate;
      const time2 = new Date(expDate * 1000);
      setEdate(time2.toString());
      const amount = getData.price;
      setPrice(amount.toNumber());
      setAdrs(getData.mfdBy);
      setIngredients(getData.ingredients);
    } catch (e) {
      console.log(e);
    }
  }
  async function checkStatus() {
    // if (status == 1 && flag == 1) {
    //   window.alert("Drug is authentic");
    // } else if (status == 1) window.alert("Drug is counterfeit");
    // else window.alert("Please scan a valid QR");
    if (status == 1) window.alert("Drug is authentic");
    else window.alert("Drug is counterfeit");
  }

  return (
    <>
      {props.active ? (
        <>
          <div style={{ width: "300px", margin: "0 auto" }}>
            <QrReader
              onResult={(result) => {
                if (!!result) {
                  setResult(result?.text);
                  console.log("Data Fetched from QR");
                  setStatus(1);
                }
              }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={() => checkStatus()}>Verify</button>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <button onClick={() => getDrugData()}>Get Drug Data</button>
            <form>
              <p>{`Name: ${name}`}</p>
              <p>{`Net Content: ${content}`}</p>
              <p>{`Mfg License Num: ${license}`}</p>
              <p>{`Batch Num: ${batch}`}</p>
              <p>{`Mfg Date: ${mdate}`}</p>
              <p>{`Exp Date: ${edate}`}</p>
              <p>{`Price: ${price}`}</p>
              <p>{`Mfg By: ${adrs}`}</p>
              <p>{`Ingredients: ${ingredients}`}</p>
            </form>
          </div>
        </>
      ) : (
        <>Please connect to metamask</>
      )}
    </>
  );
};

export default Scanner;
