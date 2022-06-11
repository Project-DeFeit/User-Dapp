import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import Scanner from "../components/Scanner";
import {AppBar, Button, Card } from "@material-ui/core";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Home() {
  const injected = new InjectedConnector();
  const { activate, active, account, library: provider } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    
    <div className={styles.container}>
      <div className={styles.navbar}>
              <div className={styles.navelements}>
                DEFEIT
              </div>
      </div>
      {active ? (
        <>
        
          <Scanner account={account} active={active} provider={provider} />
        </>
      ) : (
        
        <div className={styles.main}>
         
          <>
          <h1 className={styles.title}>
              Welcome to{" "}
              <a
                href="https://www.globalgradshow.com/project/defeit/"
                target="_blank"
              >
                DeFeit!
              </a>
            </h1>
            <div className={styles.initcard}>
              <div className={styles.icon}>
               {/* <AccountCircleIcon color="primary" size={250}/> */}
                    <p><h2>User Login:</h2></p>
              </div>
            
           <div className={styles.group}>
           <Button style={{
                      background: "blue",
                      color: "white",
                      padding: "10px",
                      borderRadius: "7px",
                      textDecoration: 'none',
                      margin:"5px",
                      width:"150px"
                    }}
                    onClick={() => connect()}>Connect</Button>
           <Button style={{
                      background: "orange",
                      color: "black",
                      padding: "10px",
                      borderRadius: "7px",
                      textDecoration: 'none',
                      margin:"5px",
                      width:"150px"
                    }} >
                    <a href="https://metamask.io/download/"><b>Create Wallet</b></a>
                  </Button>
                  </div>
                  </div>
          </>
          
          
        </div>
       
      )}
    </div>
  );
}
