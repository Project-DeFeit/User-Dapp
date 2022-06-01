module.exports = {
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "netContent",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "mfgLicenseNum",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "batchNum",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mfdDate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "expDate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "mfdBy",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "ingredients",
          type: "string",
        },
      ],
      name: "NewDrug",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_mfgAdrs",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "getDrugDetails",
      outputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "netContent",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "mfgLicenseNum",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "batchNum",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "mfdDate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "expDate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "mfdBy",
          type: "address",
        },
        {
          internalType: "string",
          name: "ingredients",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_netContent",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_mfgLicenseNum",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_batchNum",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_ingredients",
          type: "string",
        },
      ],
      name: "setDrugDetails",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
