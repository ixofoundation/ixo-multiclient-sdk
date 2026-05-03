import { queryClient } from "../helpers/common";

export const AllBonds = async () => {
  return await queryClient.ixo.bonds.v1beta1.bonds({});
};

export const AllEntities = async () => {
  return await queryClient.ixo.entity.v1beta1.entityList({});
};

export const AllIidDocuments = async () => {
  return await queryClient.ixo.iid.v1beta1.iidDocuments({});
};

export const IidDocument = async (did: string) => {
  return await queryClient.ixo.iid.v1beta1.iidDocument({
    id: did,
  });
};

export const AllAccounts = async () => {
  return await queryClient.cosmos.auth.v1beta1.accounts({});
};

// Claims module — team member budgets

export const CollectionMember = async (
  collectionId: string,
  memberAddress: string
) => {
  return await queryClient.ixo.claims.v1beta1.collectionMember({
    collectionId,
    memberAddress,
  });
};

export const CollectionMemberList = async (collectionId: string) => {
  return await queryClient.ixo.claims.v1beta1.collectionMemberList({
    collectionId,
  });
};

// ---------------------------------------------------------------------------
// Liquidstake module (v7 multi-pool)
// ---------------------------------------------------------------------------

/** Global module-wide parameters (min stake amount + global pause flag). */
export const LiquidStakeModuleParams = async () => {
  return await queryClient.ixo.liquidstake.v1beta1.moduleParams({});
};

/** Single pool by id. Throws "rpc error: code = NotFound" if absent. */
export const LiquidStakePool = async (poolId: string) => {
  return await queryClient.ixo.liquidstake.v1beta1.pool({ poolId });
};

/** All registered pools, paginated. Pass `pagination` if needed. */
export const LiquidStakePools = async () => {
  return await queryClient.ixo.liquidstake.v1beta1.pools({});
};

/**
 * Per-pool liquid validators with current state (weight, status, del_shares,
 * liquid_tokens). Useful for asserting the active set after Rebalance.
 */
export const LiquidStakeValidators = async (poolId: string) => {
  return await queryClient.ixo.liquidstake.v1beta1.liquidValidators({ poolId });
};

/**
 * Per-pool NetAmountState — supply, netAmount, mint/burn rates, etc.
 * The autocompound test reads this before/after epoch ticks to confirm
 * that net_amount strictly grows.
 */
export const LiquidStakeStates = async (poolId: string) => {
  return await queryClient.ixo.liquidstake.v1beta1.states({ poolId });
};

// ---------------------------------------------------------------------------
// Names module (chain-level name service, IXO-1123)
// ---------------------------------------------------------------------------

/** Single Namespace by name. */
export const NamesNamespace = async (name: string) => {
  return await queryClient.ixo.names.v1beta1.namespace({ name });
};

/** All Namespaces, paginated. */
export const NamesNamespaces = async () => {
  return await queryClient.ixo.names.v1beta1.namespaces({});
};

/**
 * Resolve an active NameRecord by (namespace, name). The chain normalizes the
 * name server-side so callers may pass the display form. Throws "rpc error:
 * code = NotFound" if the record is missing or its status is not ACTIVE.
 */
export const NamesResolve = async (namespace: string, name: string) => {
  return await queryClient.ixo.names.v1beta1.resolveName({ namespace, name });
};

/**
 * Get a NameRecord regardless of status (audit / moderation surface). The
 * `normalized_name` argument must already be in canonical form.
 */
export const NamesGet = async (namespace: string, normalizedName: string) => {
  return await queryClient.ixo.names.v1beta1.getName({
    namespace,
    normalizedName,
  });
};

/** All names under a Namespace, paginated. */
export const NamesByNamespace = async (namespace: string) => {
  return await queryClient.ixo.names.v1beta1.namesByNamespace({ namespace });
};

/** All names owned by a DID across every namespace, paginated. */
export const NamesByOwner = async (ownerDid: string) => {
  return await queryClient.ixo.names.v1beta1.namesByOwner({ ownerDid });
};
