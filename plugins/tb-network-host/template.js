if (!usingInterface) {
  return [icon("FaComputer"), " ", "127.0.0.1"];
}

return [Icon({ name: "FaComputer" }), " ", usingInterface.ipv4];
