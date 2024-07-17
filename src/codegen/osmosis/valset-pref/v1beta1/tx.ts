import { ValidatorPreference, ValidatorPreferenceAmino, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference";
  value: Uint8Array;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceAmino {
  /** delegator is the user who is trying to create a validator-set. */
  delegator?: string;
  /** list of {valAddr, weight} to delegate to */
  preferences?: ValidatorPreferenceAmino[];
}
export interface MsgSetValidatorSetPreferenceAminoMsg {
  type: "osmosis/valset-pref/MsgSetValidatorSetPreference";
  value: MsgSetValidatorSetPreferenceAmino;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {}
export interface MsgSetValidatorSetPreferenceResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse";
  value: Uint8Array;
}
export interface MsgSetValidatorSetPreferenceResponseAmino {}
export interface MsgSetValidatorSetPreferenceResponseAminoMsg {
  type: "osmosis/valsetpref/set-validator-set-preference-response";
  value: MsgSetValidatorSetPreferenceResponseAmino;
}
export interface MsgSetValidatorSetPreferenceResponseSDKType {}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin: Coin;
}
export interface MsgDelegateToValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet";
  value: Uint8Array;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetAmino {
  /** delegator is the user who is trying to delegate. */
  delegator?: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin?: CoinAmino;
}
export interface MsgDelegateToValidatorSetAminoMsg {
  type: "osmosis/valset-pref/MsgDelegateToValidatorSet";
  value: MsgDelegateToValidatorSetAmino;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {}
export interface MsgDelegateToValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgDelegateToValidatorSetResponseAmino {}
export interface MsgDelegateToValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/delegate-to-validator-set-response";
  value: MsgDelegateToValidatorSetResponseAmino;
}
export interface MsgDelegateToValidatorSetResponseSDKType {}
export interface MsgUndelegateFromValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin: Coin;
}
export interface MsgUndelegateFromValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet";
  value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetAmino {
  /** delegator is the user who is trying to undelegate. */
  delegator?: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin?: CoinAmino;
}
export interface MsgUndelegateFromValidatorSetAminoMsg {
  type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet";
  value: MsgUndelegateFromValidatorSetAmino;
}
export interface MsgUndelegateFromValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {}
export interface MsgUndelegateFromValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetResponseAmino {}
export interface MsgUndelegateFromValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/undelegate-from-validator-set-response";
  value: MsgUndelegateFromValidatorSetResponseAmino;
}
export interface MsgUndelegateFromValidatorSetResponseSDKType {}
export interface MsgRedelegateValidatorSet {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet";
  value: Uint8Array;
}
export interface MsgRedelegateValidatorSetAmino {
  /** delegator is the user who is trying to create a validator-set. */
  delegator?: string;
  /** list of {valAddr, weight} to delegate to */
  preferences?: ValidatorPreferenceAmino[];
}
export interface MsgRedelegateValidatorSetAminoMsg {
  type: "osmosis/valsetpref/redelegate-validator-set";
  value: MsgRedelegateValidatorSetAmino;
}
export interface MsgRedelegateValidatorSetSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {}
export interface MsgRedelegateValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgRedelegateValidatorSetResponseAmino {}
export interface MsgRedelegateValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/redelegate-validator-set-response";
  value: MsgRedelegateValidatorSetResponseAmino;
}
export interface MsgRedelegateValidatorSetResponseSDKType {}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards";
  value: Uint8Array;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsAmino {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator?: string;
}
export interface MsgWithdrawDelegationRewardsAminoMsg {
  type: "osmosis/valset-pref/MsgWithdrawDelegationRewards";
  value: MsgWithdrawDelegationRewardsAmino;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {}
export interface MsgWithdrawDelegationRewardsResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse";
  value: Uint8Array;
}
export interface MsgWithdrawDelegationRewardsResponseAmino {}
export interface MsgWithdrawDelegationRewardsResponseAminoMsg {
  type: "osmosis/valsetpref/withdraw-delegation-rewards-response";
  value: MsgWithdrawDelegationRewardsResponseAmino;
}
export interface MsgWithdrawDelegationRewardsResponseSDKType {}
function createBaseMsgSetValidatorSetPreference(): MsgSetValidatorSetPreference {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgSetValidatorSetPreference = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
  encode(message: MsgSetValidatorSetPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetValidatorSetPreferenceAmino): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = message.preferences;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetValidatorSetPreferenceAminoMsg): MsgSetValidatorSetPreference {
    return MsgSetValidatorSetPreference.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAminoMsg {
    return {
      type: "osmosis/valset-pref/MsgSetValidatorSetPreference",
      value: MsgSetValidatorSetPreference.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetValidatorSetPreferenceProtoMsg): MsgSetValidatorSetPreference {
    return MsgSetValidatorSetPreference.decode(message.value);
  },
  toProto(message: MsgSetValidatorSetPreference): Uint8Array {
    return MsgSetValidatorSetPreference.encode(message).finish();
  },
  toProtoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
      value: MsgSetValidatorSetPreference.encode(message).finish()
    };
  }
};
function createBaseMsgSetValidatorSetPreferenceResponse(): MsgSetValidatorSetPreferenceResponse {
  return {};
}
export const MsgSetValidatorSetPreferenceResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
  encode(_: MsgSetValidatorSetPreferenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  fromAmino(_: MsgSetValidatorSetPreferenceResponseAmino): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  toAmino(_: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetValidatorSetPreferenceResponseAminoMsg): MsgSetValidatorSetPreferenceResponse {
    return MsgSetValidatorSetPreferenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/set-validator-set-preference-response",
      value: MsgSetValidatorSetPreferenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetValidatorSetPreferenceResponseProtoMsg): MsgSetValidatorSetPreferenceResponse {
    return MsgSetValidatorSetPreferenceResponse.decode(message.value);
  },
  toProto(message: MsgSetValidatorSetPreferenceResponse): Uint8Array {
    return MsgSetValidatorSetPreferenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
      value: MsgSetValidatorSetPreferenceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateToValidatorSet(): MsgDelegateToValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgDelegateToValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
  encode(message: MsgDelegateToValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgDelegateToValidatorSetAmino): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateToValidatorSetAminoMsg): MsgDelegateToValidatorSet {
    return MsgDelegateToValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAminoMsg {
    return {
      type: "osmosis/valset-pref/MsgDelegateToValidatorSet",
      value: MsgDelegateToValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateToValidatorSetProtoMsg): MsgDelegateToValidatorSet {
    return MsgDelegateToValidatorSet.decode(message.value);
  },
  toProto(message: MsgDelegateToValidatorSet): Uint8Array {
    return MsgDelegateToValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
      value: MsgDelegateToValidatorSet.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateToValidatorSetResponse(): MsgDelegateToValidatorSetResponse {
  return {};
}
export const MsgDelegateToValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
  encode(_: MsgDelegateToValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  fromAmino(_: MsgDelegateToValidatorSetResponseAmino): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateToValidatorSetResponseAminoMsg): MsgDelegateToValidatorSetResponse {
    return MsgDelegateToValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/delegate-to-validator-set-response",
      value: MsgDelegateToValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateToValidatorSetResponseProtoMsg): MsgDelegateToValidatorSetResponse {
    return MsgDelegateToValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgDelegateToValidatorSetResponse): Uint8Array {
    return MsgDelegateToValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
      value: MsgDelegateToValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateFromValidatorSet(): MsgUndelegateFromValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgUndelegateFromValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
  encode(message: MsgUndelegateFromValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateFromValidatorSetAmino): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromValidatorSetAminoMsg): MsgUndelegateFromValidatorSet {
    return MsgUndelegateFromValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAminoMsg {
    return {
      type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet",
      value: MsgUndelegateFromValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateFromValidatorSetProtoMsg): MsgUndelegateFromValidatorSet {
    return MsgUndelegateFromValidatorSet.decode(message.value);
  },
  toProto(message: MsgUndelegateFromValidatorSet): Uint8Array {
    return MsgUndelegateFromValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
      value: MsgUndelegateFromValidatorSet.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateFromValidatorSetResponse(): MsgUndelegateFromValidatorSetResponse {
  return {};
}
export const MsgUndelegateFromValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
  encode(_: MsgUndelegateFromValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  fromAmino(_: MsgUndelegateFromValidatorSetResponseAmino): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromValidatorSetResponseAminoMsg): MsgUndelegateFromValidatorSetResponse {
    return MsgUndelegateFromValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/undelegate-from-validator-set-response",
      value: MsgUndelegateFromValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateFromValidatorSetResponseProtoMsg): MsgUndelegateFromValidatorSetResponse {
    return MsgUndelegateFromValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateFromValidatorSetResponse): Uint8Array {
    return MsgUndelegateFromValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
      value: MsgUndelegateFromValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedelegateValidatorSet(): MsgRedelegateValidatorSet {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgRedelegateValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
  encode(message: MsgRedelegateValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRedelegateValidatorSetAmino): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = message.preferences;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateValidatorSetAminoMsg): MsgRedelegateValidatorSet {
    return MsgRedelegateValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAminoMsg {
    return {
      type: "osmosis/valsetpref/redelegate-validator-set",
      value: MsgRedelegateValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedelegateValidatorSetProtoMsg): MsgRedelegateValidatorSet {
    return MsgRedelegateValidatorSet.decode(message.value);
  },
  toProto(message: MsgRedelegateValidatorSet): Uint8Array {
    return MsgRedelegateValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
      value: MsgRedelegateValidatorSet.encode(message).finish()
    };
  }
};
function createBaseMsgRedelegateValidatorSetResponse(): MsgRedelegateValidatorSetResponse {
  return {};
}
export const MsgRedelegateValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
  encode(_: MsgRedelegateValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  fromAmino(_: MsgRedelegateValidatorSetResponseAmino): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateValidatorSetResponseAminoMsg): MsgRedelegateValidatorSetResponse {
    return MsgRedelegateValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/redelegate-validator-set-response",
      value: MsgRedelegateValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedelegateValidatorSetResponseProtoMsg): MsgRedelegateValidatorSetResponse {
    return MsgRedelegateValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgRedelegateValidatorSetResponse): Uint8Array {
    return MsgRedelegateValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
      value: MsgRedelegateValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegationRewards(): MsgWithdrawDelegationRewards {
  return {
    delegator: ""
  };
}
export const MsgWithdrawDelegationRewards = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
  encode(message: MsgWithdrawDelegationRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = object.delegator ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawDelegationRewardsAmino): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    return message;
  },
  toAmino(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegationRewardsAminoMsg): MsgWithdrawDelegationRewards {
    return MsgWithdrawDelegationRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAminoMsg {
    return {
      type: "osmosis/valset-pref/MsgWithdrawDelegationRewards",
      value: MsgWithdrawDelegationRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegationRewardsProtoMsg): MsgWithdrawDelegationRewards {
    return MsgWithdrawDelegationRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegationRewards): Uint8Array {
    return MsgWithdrawDelegationRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
      value: MsgWithdrawDelegationRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegationRewardsResponse(): MsgWithdrawDelegationRewardsResponse {
  return {};
}
export const MsgWithdrawDelegationRewardsResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
  encode(_: MsgWithdrawDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawDelegationRewardsResponseAmino): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  toAmino(_: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegationRewardsResponseAminoMsg): MsgWithdrawDelegationRewardsResponse {
    return MsgWithdrawDelegationRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/withdraw-delegation-rewards-response",
      value: MsgWithdrawDelegationRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegationRewardsResponseProtoMsg): MsgWithdrawDelegationRewardsResponse {
    return MsgWithdrawDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegationRewardsResponse): Uint8Array {
    return MsgWithdrawDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
      value: MsgWithdrawDelegationRewardsResponse.encode(message).finish()
    };
  }
};