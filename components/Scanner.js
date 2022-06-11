import { QrReader } from "react-qr-reader";
import { useState } from "react";
import abi from "../constants/abi";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import{Modal, Box, Button,Typography} from "@material-ui/core";

const Scanner = (props) => {
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const contractAddress = "0xFbC9fB3147A49726bE11F29e9Bec2A82dd653817";

  

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
      setStatus(0);
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
          <div className={styles.cent}>
          <div className={styles.group} >
                <Button variant="contained" style={{background:"#ff6a00", color:"white", margin:"10px"}} onClick={() => checkStatus()}>Verify</Button>
              
              <br />
            
                <Button variant="contained" style={{background:"crimson", color:"white", margin:"10px"}} onClick={() => getDrugData()}>Get Drug Name</Button>
          </div>
          </div>
          
                
          
          <div style={{ textAlign: "center", color:"white" }}>
                <form>
                  <b>{`Name: ${name}`}</b>
                </form>
              </div>
          <div  style={{ textAlign: "center" }}>
          <Button variant="contained" style={{background:"green", color:"white", margin:"10px"}} onClick={handleOpen}>View Drug Details</Button>
          
          <div className={styles.group} >
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={styles.modal}>
              <div style={{ background: "black", borderRadius:"25px 25px 0 0 " }} >
                <Typography id="modal-modal-title"  variant="h6" component="h2" style={{margin: "1.5rem", textAlign: "center", color:"white",fontWeight:"bold"}}>
                <b>{`${name}`}</b>
                </Typography>
              </div>
             <div style={{margin: "1.5rem"}}>
             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <b>
              <p>{`Net Content: ${content}`}</p>
              <p>{`Mfg License Num: ${license}`}</p>
              <p>{`Batch Num: ${batch}`}</p>
              <p>{`Mfg Date: ${mdate}`}</p>
              <p>{`Price: ${price}`}</p>
              <p>{`Mfg By: ${adrs}`}</p>
              <p>{`Ingredients: ${ingredients}`}</p>
              </b>
              </Typography>
             </div>
              
            </Box>
          </Modal>
          </div>
          </div>
          
      
        </>
      ) : (
        <>Please connect to metamask</>
      )}
    </>
  );
};

export default Scanner;
