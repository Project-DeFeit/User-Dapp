import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { styled, Grid, Button, Typography } from "@material-ui/core";
// import { InjectedConnector } from "@web3-react/injected-connector";
// import {ethers} from "ethers";
// import { useWeb3React } from "@web3-react/core";

class View extends Component {
  // function QRscanner() {
  state = {
    result: "",
    verify: "Not Verified",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };

  render() {
    const presplitValue = this.state.result;
    const postsplitValue = presplitValue.split(";");
    const address = postsplitValue[0];
    const drugIndex = postsplitValue[1];
    console.log(address);
    console.log(drugIndex);

    // const injected = new InjectedConnector();
    // const { activate, active, account, library: provider } = useWeb3React();

    async function connect() {
      try {
        await activate(injected);
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <div>
        {this.props.active ? (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "25vw" }}
            />
            <p>{this.state.result}</p>
            <B
              variant="outlined"
              onClick={() => {
                alert(this.state.verify);
              }}
            >
              <h2>
                <T>Check Status</T>
              </h2>
            </B>
          </Grid>
        ) : (
          connect
        )}
        {/* //<a>href={this.state.result}</a> */}
      </div>
    );
  }
}

export default View;

const B = styled(Button)({
  height: "90px",
  borderRadius: "25px",
  padding: "10px 10px",
  margin: "1vh 5vw",
  borderWidth: "2px",
  position: "relative",
  background: "linear-gradient(315deg, #01224a 0%,  #033840 100% )",
});
const T = styled(Typography)({
  color: "white",
  fontFamily: "Poppins",
  fontWeight: 500,
  letterSpacing: "0.5px",
  fontSize: "32px",
  padding: "5px",
});
