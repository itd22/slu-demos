if (!usingInterface) {
  return [icon("PiNetworkXLight"), " ", "0.0.0.0"];
}

return [
  Icon({ name: "PiNetworkLight" }),
  " ",
  usingInterface?.gateway || "0.0.0.0",
];
