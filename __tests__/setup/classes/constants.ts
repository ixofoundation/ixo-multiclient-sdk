export const setup_class_constants = {
  dao: {
    entityType: "dao",
    relayerNode: undefined,
    contextClass: "",
  },
  asset: {
    entityType: "asset",
    relayerNode: undefined,
    contextClass: "",
  },
  oracle: {
    entityType: "oracle",
    relayerNode: undefined,
    contextClass: "",
  },
  protocol: {
    entityType: "protocol",
    relayerNode: undefined,
    contextClass: "",
  },
};

// Types for typescript strict type checking, please ignore
export type SetupClassConstants = typeof setup_class_constants;
