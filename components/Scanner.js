import { QrReader } from "react-qr-reader";
import { useState } from "react";

const Scanner = (props) => {
  const [result, setResult] = useState("");

  const presplitValue = result;
  const postsplitValue = presplitValue.split(";");
  const address = postsplitValue[0];
  const drugIndex = postsplitValue[1];
  console.log(address);
  console.log(drugIndex);

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setResult(result?.text);
          }
          //   if (!!error) {
          //     console.info(error);
          //   }
        }}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </>
  );
};

export default Scanner;
