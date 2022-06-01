import {ethers} from "ethers";
import abi from "../constants/abi"

const View = (props) => {
    const contractAddress="0xF7D50F2e91807D521521692c25B37C7b19EfCB70";
    const contractABI = abi.abi;
 
    async function view() {
        const provider = props.provider;
        const signer = provider.getSigner();
        const manufacturer = new ethers.Contract(contractAddress, contractABI, signer);
        try {
            console.log("Fetching details");
            const viewData =  await manufacturer.getDrugDetails("0xBA97fD3c50f1D10Ec9a8ebbF2d273213306c30C2", 1)
            console.log(viewData.name);
            // console.log(viewData.price);
            // console.log(viewData.batchNum);
 
        } catch(e) {
            console.log(e);
        }
    }
    return(
        <div>        
           <main>
            {props.active ? (
               <div>             
                       View Drug details
                       <button type="button" onClick={() => view()}>view</button>
               </div>
               ): (<>Connect Wallet</>)}
           </main>
        </div>
    )
} 

export default View