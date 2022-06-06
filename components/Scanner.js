import QrReader from "react-qr-scanner";
import { useState } from "react";

const Scanner = (props) => {
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    setResult(data);
    console.log(result);
  };

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <>
      <QrReader delay="100" onScan={handleScan} onError={handleError} />
      <p>{console.log(result)}</p>
      <p>{result}</p>
    </>
  );
};

export default Scanner;
