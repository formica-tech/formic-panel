import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  bigint: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

export type AlreadySignedUp = {
  __typename?: "AlreadySignedUp";
  email: Scalars["String"];
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

export type ForgotPasswordResult = UserNotFound | Verification;

export type InvalidCredentials = {
  __typename?: "InvalidCredentials";
  email: Scalars["String"];
};

export type LoginResult = InvalidCredentials | Token;

export type Me = {
  __typename?: "Me";
  email: Scalars["String"];
  id: Scalars["ID"];
  username: Scalars["String"];
  verified: Scalars["Boolean"];
};

export type Mutation = {
  __typename?: "Mutation";
  forgotPassword: ForgotPasswordResult;
  login: LoginResult;
  resendCode: Verification;
  restorePassword: PasswordChanged;
  signup: SignUpResult;
  uploadProfileImage: Scalars["Boolean"];
  verify: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationResendCodeArgs = {
  verificationId: Scalars["String"];
};

export type MutationRestorePasswordArgs = {
  newPassword: Scalars["String"];
  verification: VerificationInput;
};

export type MutationSignupArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationUploadProfileImageArgs = {
  image: Scalars["Upload"];
};

export type MutationVerifyArgs = {
  verification: VerificationInput;
};

export type PasswordChanged = {
  __typename?: "PasswordChanged";
  email: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  me: Me;
};

export type SignUpResult = AlreadySignedUp | SignedUp;

export type SignedUp = {
  __typename?: "SignedUp";
  token: Scalars["String"];
  verificationId: Scalars["String"];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

export type Token = {
  __typename?: "Token";
  token: Scalars["String"];
};

export type UserNotFound = {
  __typename?: "UserNotFound";
  email: Scalars["String"];
};

export type Verification = {
  __typename?: "Verification";
  id: Scalars["String"];
};

export type VerificationInput = {
  code: Scalars["String"];
  id: Scalars["String"];
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars["bigint"]>;
  _gt?: Maybe<Scalars["bigint"]>;
  _gte?: Maybe<Scalars["bigint"]>;
  _in?: Maybe<Array<Scalars["bigint"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["bigint"]>;
  _lte?: Maybe<Scalars["bigint"]>;
  _neq?: Maybe<Scalars["bigint"]>;
  _nin?: Maybe<Array<Scalars["bigint"]>>;
};

/** columns and relationships of "device" */
export type Device = {
  __typename?: "device";
  createdAt: Scalars["timestamp"];
  /** An array relationship */
  device_signals: Array<Device_Signal>;
  /** An aggregated array relationship */
  device_signals_aggregate: Device_Signal_Aggregate;
  id: Scalars["String"];
  name: Scalars["String"];
  updatedAt: Scalars["timestamp"];
};

/** columns and relationships of "device" */
export type DeviceDevice_SignalsArgs = {
  distinct_on?: Maybe<Array<Device_Signal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Signal_Order_By>>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** columns and relationships of "device" */
export type DeviceDevice_Signals_AggregateArgs = {
  distinct_on?: Maybe<Array<Device_Signal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Signal_Order_By>>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** aggregated selection of "device" */
export type Device_Aggregate = {
  __typename?: "device_aggregate";
  aggregate?: Maybe<Device_Aggregate_Fields>;
  nodes: Array<Device>;
};

/** aggregate fields of "device" */
export type Device_Aggregate_Fields = {
  __typename?: "device_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Device_Max_Fields>;
  min?: Maybe<Device_Min_Fields>;
};

/** aggregate fields of "device" */
export type Device_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Device_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "device" */
export type Device_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Device_Max_Order_By>;
  min?: Maybe<Device_Min_Order_By>;
};

/** input type for inserting array relation for remote table "device" */
export type Device_Arr_Rel_Insert_Input = {
  data: Array<Device_Insert_Input>;
  on_conflict?: Maybe<Device_On_Conflict>;
};

/** Boolean expression to filter rows from the table "device". All fields are combined with a logical 'AND'. */
export type Device_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Device_Bool_Exp>>>;
  _not?: Maybe<Device_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Device_Bool_Exp>>>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  device_signals?: Maybe<Device_Signal_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "device" */
export enum Device_Constraint {
  /** unique or primary key constraint */
  Pk_2dc10972aa4e27c01378dad2c72 = "PK_2dc10972aa4e27c01378dad2c72",
}

/** input type for inserting data into table "device" */
export type Device_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  device_signals?: Maybe<Device_Signal_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type Device_Max_Fields = {
  __typename?: "device_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "device" */
export type Device_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Min_Fields = {
  __typename?: "device_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "device" */
export type Device_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "device" */
export type Device_Mutation_Response = {
  __typename?: "device_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Device>;
};

/** input type for inserting object relation for remote table "device" */
export type Device_Obj_Rel_Insert_Input = {
  data: Device_Insert_Input;
  on_conflict?: Maybe<Device_On_Conflict>;
};

/** on conflict condition type for table "device" */
export type Device_On_Conflict = {
  constraint: Device_Constraint;
  update_columns: Array<Device_Update_Column>;
  where?: Maybe<Device_Bool_Exp>;
};

/** ordering options when selecting data from "device" */
export type Device_Order_By = {
  createdAt?: Maybe<Order_By>;
  device_signals_aggregate?: Maybe<Device_Signal_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "device" */
export type Device_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "device" */
export enum Device_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** input type for updating data in table "device" */
export type Device_Set_Input = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** columns and relationships of "device_signal" */
export type Device_Signal = {
  __typename?: "device_signal";
  /** An object relationship */
  device?: Maybe<Device>;
  deviceId?: Maybe<Scalars["String"]>;
  event: Scalars["String"];
  id: Scalars["uuid"];
  /** An object relationship */
  machine?: Maybe<Machine>;
  machineId?: Maybe<Scalars["String"]>;
  /** An object relationship */
  machineStateById?: Maybe<Machine_State>;
  /** An object relationship */
  machine_state?: Maybe<Machine_State>;
  payload: Scalars["jsonb"];
  timestamp: Scalars["timestamptz"];
};

/** columns and relationships of "device_signal" */
export type Device_SignalPayloadArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "device_signal" */
export type Device_Signal_Aggregate = {
  __typename?: "device_signal_aggregate";
  aggregate?: Maybe<Device_Signal_Aggregate_Fields>;
  nodes: Array<Device_Signal>;
};

/** aggregate fields of "device_signal" */
export type Device_Signal_Aggregate_Fields = {
  __typename?: "device_signal_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Device_Signal_Max_Fields>;
  min?: Maybe<Device_Signal_Min_Fields>;
};

/** aggregate fields of "device_signal" */
export type Device_Signal_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Device_Signal_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "device_signal" */
export type Device_Signal_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Device_Signal_Max_Order_By>;
  min?: Maybe<Device_Signal_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Device_Signal_Append_Input = {
  payload?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "device_signal" */
export type Device_Signal_Arr_Rel_Insert_Input = {
  data: Array<Device_Signal_Insert_Input>;
  on_conflict?: Maybe<Device_Signal_On_Conflict>;
};

/** Boolean expression to filter rows from the table "device_signal". All fields are combined with a logical 'AND'. */
export type Device_Signal_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Device_Signal_Bool_Exp>>>;
  _not?: Maybe<Device_Signal_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Device_Signal_Bool_Exp>>>;
  device?: Maybe<Device_Bool_Exp>;
  deviceId?: Maybe<String_Comparison_Exp>;
  event?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  machine?: Maybe<Machine_Bool_Exp>;
  machineId?: Maybe<String_Comparison_Exp>;
  machineStateById?: Maybe<Machine_State_Bool_Exp>;
  machine_state?: Maybe<Machine_State_Bool_Exp>;
  payload?: Maybe<Jsonb_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "device_signal" */
export enum Device_Signal_Constraint {
  /** unique or primary key constraint */
  Pk_5327c90defa854436ea519bbde8 = "PK_5327c90defa854436ea519bbde8",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Device_Signal_Delete_At_Path_Input = {
  payload?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Device_Signal_Delete_Elem_Input = {
  payload?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Device_Signal_Delete_Key_Input = {
  payload?: Maybe<Scalars["String"]>;
};

/** input type for inserting data into table "device_signal" */
export type Device_Signal_Insert_Input = {
  device?: Maybe<Device_Obj_Rel_Insert_Input>;
  deviceId?: Maybe<Scalars["String"]>;
  event?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  machine?: Maybe<Machine_Obj_Rel_Insert_Input>;
  machineId?: Maybe<Scalars["String"]>;
  machineStateById?: Maybe<Machine_State_Obj_Rel_Insert_Input>;
  machine_state?: Maybe<Machine_State_Obj_Rel_Insert_Input>;
  payload?: Maybe<Scalars["jsonb"]>;
  timestamp?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Device_Signal_Max_Fields = {
  __typename?: "device_signal_max_fields";
  deviceId?: Maybe<Scalars["String"]>;
  event?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  machineId?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "device_signal" */
export type Device_Signal_Max_Order_By = {
  deviceId?: Maybe<Order_By>;
  event?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  machineId?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Signal_Min_Fields = {
  __typename?: "device_signal_min_fields";
  deviceId?: Maybe<Scalars["String"]>;
  event?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  machineId?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "device_signal" */
export type Device_Signal_Min_Order_By = {
  deviceId?: Maybe<Order_By>;
  event?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  machineId?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** response of any mutation on the table "device_signal" */
export type Device_Signal_Mutation_Response = {
  __typename?: "device_signal_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Device_Signal>;
};

/** input type for inserting object relation for remote table "device_signal" */
export type Device_Signal_Obj_Rel_Insert_Input = {
  data: Device_Signal_Insert_Input;
  on_conflict?: Maybe<Device_Signal_On_Conflict>;
};

/** on conflict condition type for table "device_signal" */
export type Device_Signal_On_Conflict = {
  constraint: Device_Signal_Constraint;
  update_columns: Array<Device_Signal_Update_Column>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** ordering options when selecting data from "device_signal" */
export type Device_Signal_Order_By = {
  device?: Maybe<Device_Order_By>;
  deviceId?: Maybe<Order_By>;
  event?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  machine?: Maybe<Machine_Order_By>;
  machineId?: Maybe<Order_By>;
  machineStateById?: Maybe<Machine_State_Order_By>;
  machine_state?: Maybe<Machine_State_Order_By>;
  payload?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** primary key columns input for table: "device_signal" */
export type Device_Signal_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Device_Signal_Prepend_Input = {
  payload?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "device_signal" */
export enum Device_Signal_Select_Column {
  /** column name */
  DeviceId = "deviceId",
  /** column name */
  Event = "event",
  /** column name */
  Id = "id",
  /** column name */
  MachineId = "machineId",
  /** column name */
  Payload = "payload",
  /** column name */
  Timestamp = "timestamp",
}

/** input type for updating data in table "device_signal" */
export type Device_Signal_Set_Input = {
  deviceId?: Maybe<Scalars["String"]>;
  event?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  machineId?: Maybe<Scalars["String"]>;
  payload?: Maybe<Scalars["jsonb"]>;
  timestamp?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "device_signal" */
export enum Device_Signal_Update_Column {
  /** column name */
  DeviceId = "deviceId",
  /** column name */
  Event = "event",
  /** column name */
  Id = "id",
  /** column name */
  MachineId = "machineId",
  /** column name */
  Payload = "payload",
  /** column name */
  Timestamp = "timestamp",
}

/** update columns of table "device" */
export enum Device_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars["jsonb"]>;
  _eq?: Maybe<Scalars["jsonb"]>;
  _gt?: Maybe<Scalars["jsonb"]>;
  _gte?: Maybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars["String"]>>;
  _in?: Maybe<Array<Scalars["jsonb"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["jsonb"]>;
  _lte?: Maybe<Scalars["jsonb"]>;
  _neq?: Maybe<Scalars["jsonb"]>;
  _nin?: Maybe<Array<Scalars["jsonb"]>>;
};

/** columns and relationships of "machine" */
export type Machine = {
  __typename?: "machine";
  createdAt: Scalars["timestamp"];
  /** An array relationship */
  device_signals: Array<Device_Signal>;
  /** An aggregated array relationship */
  device_signals_aggregate: Device_Signal_Aggregate;
  id: Scalars["String"];
  /** An array relationship */
  machine_states: Array<Machine_State>;
  /** An aggregated array relationship */
  machine_states_aggregate: Machine_State_Aggregate;
  name: Scalars["String"];
  updatedAt: Scalars["timestamp"];
};

/** columns and relationships of "machine" */
export type MachineDevice_SignalsArgs = {
  distinct_on?: Maybe<Array<Device_Signal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Signal_Order_By>>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** columns and relationships of "machine" */
export type MachineDevice_Signals_AggregateArgs = {
  distinct_on?: Maybe<Array<Device_Signal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Signal_Order_By>>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** columns and relationships of "machine" */
export type MachineMachine_StatesArgs = {
  distinct_on?: Maybe<Array<Machine_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_State_Order_By>>;
  where?: Maybe<Machine_State_Bool_Exp>;
};

/** columns and relationships of "machine" */
export type MachineMachine_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Machine_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_State_Order_By>>;
  where?: Maybe<Machine_State_Bool_Exp>;
};

/** aggregated selection of "machine" */
export type Machine_Aggregate = {
  __typename?: "machine_aggregate";
  aggregate?: Maybe<Machine_Aggregate_Fields>;
  nodes: Array<Machine>;
};

/** aggregate fields of "machine" */
export type Machine_Aggregate_Fields = {
  __typename?: "machine_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Machine_Max_Fields>;
  min?: Maybe<Machine_Min_Fields>;
};

/** aggregate fields of "machine" */
export type Machine_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Machine_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "machine" */
export type Machine_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Machine_Max_Order_By>;
  min?: Maybe<Machine_Min_Order_By>;
};

/** input type for inserting array relation for remote table "machine" */
export type Machine_Arr_Rel_Insert_Input = {
  data: Array<Machine_Insert_Input>;
  on_conflict?: Maybe<Machine_On_Conflict>;
};

/** Boolean expression to filter rows from the table "machine". All fields are combined with a logical 'AND'. */
export type Machine_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Machine_Bool_Exp>>>;
  _not?: Maybe<Machine_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Machine_Bool_Exp>>>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  device_signals?: Maybe<Device_Signal_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  machine_states?: Maybe<Machine_State_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "machine" */
export enum Machine_Constraint {
  /** unique or primary key constraint */
  PkAcc588900ffa841d96eb5fd566c = "PK_acc588900ffa841d96eb5fd566c",
}

/** input type for inserting data into table "machine" */
export type Machine_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  device_signals?: Maybe<Device_Signal_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["String"]>;
  machine_states?: Maybe<Machine_State_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type Machine_Max_Fields = {
  __typename?: "machine_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "machine" */
export type Machine_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Machine_Min_Fields = {
  __typename?: "machine_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "machine" */
export type Machine_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "machine" */
export type Machine_Mutation_Response = {
  __typename?: "machine_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Machine>;
};

/** input type for inserting object relation for remote table "machine" */
export type Machine_Obj_Rel_Insert_Input = {
  data: Machine_Insert_Input;
  on_conflict?: Maybe<Machine_On_Conflict>;
};

/** on conflict condition type for table "machine" */
export type Machine_On_Conflict = {
  constraint: Machine_Constraint;
  update_columns: Array<Machine_Update_Column>;
  where?: Maybe<Machine_Bool_Exp>;
};

/** ordering options when selecting data from "machine" */
export type Machine_Order_By = {
  createdAt?: Maybe<Order_By>;
  device_signals_aggregate?: Maybe<Device_Signal_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  machine_states_aggregate?: Maybe<Machine_State_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "machine" */
export type Machine_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "machine" */
export enum Machine_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** input type for updating data in table "machine" */
export type Machine_Set_Input = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** columns and relationships of "machine_state" */
export type Machine_State = {
  __typename?: "machine_state";
  closeSignalId: Scalars["uuid"];
  createdAt: Scalars["timestamp"];
  /** An object relationship */
  deviceSignalByClosesignalid: Device_Signal;
  /** An object relationship */
  device_signal: Device_Signal;
  duration: Scalars["bigint"];
  /** An object relationship */
  machine: Machine;
  machineId: Scalars["String"];
  openSignalId: Scalars["uuid"];
  state: Scalars["String"];
};

/** aggregated selection of "machine_state" */
export type Machine_State_Aggregate = {
  __typename?: "machine_state_aggregate";
  aggregate?: Maybe<Machine_State_Aggregate_Fields>;
  nodes: Array<Machine_State>;
};

/** aggregate fields of "machine_state" */
export type Machine_State_Aggregate_Fields = {
  __typename?: "machine_state_aggregate_fields";
  avg?: Maybe<Machine_State_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Machine_State_Max_Fields>;
  min?: Maybe<Machine_State_Min_Fields>;
  stddev?: Maybe<Machine_State_Stddev_Fields>;
  stddev_pop?: Maybe<Machine_State_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Machine_State_Stddev_Samp_Fields>;
  sum?: Maybe<Machine_State_Sum_Fields>;
  var_pop?: Maybe<Machine_State_Var_Pop_Fields>;
  var_samp?: Maybe<Machine_State_Var_Samp_Fields>;
  variance?: Maybe<Machine_State_Variance_Fields>;
};

/** aggregate fields of "machine_state" */
export type Machine_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Machine_State_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "machine_state" */
export type Machine_State_Aggregate_Order_By = {
  avg?: Maybe<Machine_State_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Machine_State_Max_Order_By>;
  min?: Maybe<Machine_State_Min_Order_By>;
  stddev?: Maybe<Machine_State_Stddev_Order_By>;
  stddev_pop?: Maybe<Machine_State_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Machine_State_Stddev_Samp_Order_By>;
  sum?: Maybe<Machine_State_Sum_Order_By>;
  var_pop?: Maybe<Machine_State_Var_Pop_Order_By>;
  var_samp?: Maybe<Machine_State_Var_Samp_Order_By>;
  variance?: Maybe<Machine_State_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "machine_state" */
export type Machine_State_Arr_Rel_Insert_Input = {
  data: Array<Machine_State_Insert_Input>;
  on_conflict?: Maybe<Machine_State_On_Conflict>;
};

/** aggregate avg on columns */
export type Machine_State_Avg_Fields = {
  __typename?: "machine_state_avg_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "machine_state" */
export type Machine_State_Avg_Order_By = {
  duration?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "machine_state". All fields are combined with a logical 'AND'. */
export type Machine_State_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Machine_State_Bool_Exp>>>;
  _not?: Maybe<Machine_State_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Machine_State_Bool_Exp>>>;
  closeSignalId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  deviceSignalByClosesignalid?: Maybe<Device_Signal_Bool_Exp>;
  device_signal?: Maybe<Device_Signal_Bool_Exp>;
  duration?: Maybe<Bigint_Comparison_Exp>;
  machine?: Maybe<Machine_Bool_Exp>;
  machineId?: Maybe<String_Comparison_Exp>;
  openSignalId?: Maybe<Uuid_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "machine_state" */
export enum Machine_State_Constraint {
  /** unique or primary key constraint */
  Pk_472e55b3b64795a303750182136 = "PK_472e55b3b64795a303750182136",
  /** unique or primary key constraint */
  Rel_54bf57abfb9fed2e2591f6f795 = "REL_54bf57abfb9fed2e2591f6f795",
  /** unique or primary key constraint */
  RelEbbef3e028f6452658c7b6ac9c = "REL_ebbef3e028f6452658c7b6ac9c",
}

/** input type for incrementing integer column in table "machine_state" */
export type Machine_State_Inc_Input = {
  duration?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "machine_state" */
export type Machine_State_Insert_Input = {
  closeSignalId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  deviceSignalByClosesignalid?: Maybe<Device_Signal_Obj_Rel_Insert_Input>;
  device_signal?: Maybe<Device_Signal_Obj_Rel_Insert_Input>;
  duration?: Maybe<Scalars["bigint"]>;
  machine?: Maybe<Machine_Obj_Rel_Insert_Input>;
  machineId?: Maybe<Scalars["String"]>;
  openSignalId?: Maybe<Scalars["uuid"]>;
  state?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Machine_State_Max_Fields = {
  __typename?: "machine_state_max_fields";
  closeSignalId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["bigint"]>;
  machineId?: Maybe<Scalars["String"]>;
  openSignalId?: Maybe<Scalars["uuid"]>;
  state?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "machine_state" */
export type Machine_State_Max_Order_By = {
  closeSignalId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  machineId?: Maybe<Order_By>;
  openSignalId?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Machine_State_Min_Fields = {
  __typename?: "machine_state_min_fields";
  closeSignalId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["bigint"]>;
  machineId?: Maybe<Scalars["String"]>;
  openSignalId?: Maybe<Scalars["uuid"]>;
  state?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "machine_state" */
export type Machine_State_Min_Order_By = {
  closeSignalId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  machineId?: Maybe<Order_By>;
  openSignalId?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
};

/** response of any mutation on the table "machine_state" */
export type Machine_State_Mutation_Response = {
  __typename?: "machine_state_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Machine_State>;
};

/** input type for inserting object relation for remote table "machine_state" */
export type Machine_State_Obj_Rel_Insert_Input = {
  data: Machine_State_Insert_Input;
  on_conflict?: Maybe<Machine_State_On_Conflict>;
};

/** on conflict condition type for table "machine_state" */
export type Machine_State_On_Conflict = {
  constraint: Machine_State_Constraint;
  update_columns: Array<Machine_State_Update_Column>;
  where?: Maybe<Machine_State_Bool_Exp>;
};

/** ordering options when selecting data from "machine_state" */
export type Machine_State_Order_By = {
  closeSignalId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deviceSignalByClosesignalid?: Maybe<Device_Signal_Order_By>;
  device_signal?: Maybe<Device_Signal_Order_By>;
  duration?: Maybe<Order_By>;
  machine?: Maybe<Machine_Order_By>;
  machineId?: Maybe<Order_By>;
  openSignalId?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
};

/** primary key columns input for table: "machine_state" */
export type Machine_State_Pk_Columns_Input = {
  closeSignalId: Scalars["uuid"];
  machineId: Scalars["String"];
  openSignalId: Scalars["uuid"];
};

/** select columns of table "machine_state" */
export enum Machine_State_Select_Column {
  /** column name */
  CloseSignalId = "closeSignalId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Duration = "duration",
  /** column name */
  MachineId = "machineId",
  /** column name */
  OpenSignalId = "openSignalId",
  /** column name */
  State = "state",
}

/** input type for updating data in table "machine_state" */
export type Machine_State_Set_Input = {
  closeSignalId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["bigint"]>;
  machineId?: Maybe<Scalars["String"]>;
  openSignalId?: Maybe<Scalars["uuid"]>;
  state?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Machine_State_Stddev_Fields = {
  __typename?: "machine_state_stddev_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "machine_state" */
export type Machine_State_Stddev_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Machine_State_Stddev_Pop_Fields = {
  __typename?: "machine_state_stddev_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "machine_state" */
export type Machine_State_Stddev_Pop_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Machine_State_Stddev_Samp_Fields = {
  __typename?: "machine_state_stddev_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "machine_state" */
export type Machine_State_Stddev_Samp_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Machine_State_Sum_Fields = {
  __typename?: "machine_state_sum_fields";
  duration?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "machine_state" */
export type Machine_State_Sum_Order_By = {
  duration?: Maybe<Order_By>;
};

/** update columns of table "machine_state" */
export enum Machine_State_Update_Column {
  /** column name */
  CloseSignalId = "closeSignalId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Duration = "duration",
  /** column name */
  MachineId = "machineId",
  /** column name */
  OpenSignalId = "openSignalId",
  /** column name */
  State = "state",
}

/** aggregate var_pop on columns */
export type Machine_State_Var_Pop_Fields = {
  __typename?: "machine_state_var_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "machine_state" */
export type Machine_State_Var_Pop_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Machine_State_Var_Samp_Fields = {
  __typename?: "machine_state_var_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "machine_state" */
export type Machine_State_Var_Samp_Order_By = {
  duration?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Machine_State_Variance_Fields = {
  __typename?: "machine_state_variance_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "machine_state" */
export type Machine_State_Variance_Order_By = {
  duration?: Maybe<Order_By>;
};

/** update columns of table "machine" */
export enum Machine_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "device" */
  delete_device?: Maybe<Device_Mutation_Response>;
  /** delete single row from the table: "device" */
  delete_device_by_pk?: Maybe<Device>;
  /** delete data from the table: "device_signal" */
  delete_device_signal?: Maybe<Device_Signal_Mutation_Response>;
  /** delete single row from the table: "device_signal" */
  delete_device_signal_by_pk?: Maybe<Device_Signal>;
  /** delete data from the table: "machine" */
  delete_machine?: Maybe<Machine_Mutation_Response>;
  /** delete single row from the table: "machine" */
  delete_machine_by_pk?: Maybe<Machine>;
  /** delete data from the table: "machine_state" */
  delete_machine_state?: Maybe<Machine_State_Mutation_Response>;
  /** delete single row from the table: "machine_state" */
  delete_machine_state_by_pk?: Maybe<Machine_State>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_verification_code" */
  delete_user_verification_code?: Maybe<User_Verification_Code_Mutation_Response>;
  /** delete single row from the table: "user_verification_code" */
  delete_user_verification_code_by_pk?: Maybe<User_Verification_Code>;
  forgotPassword: ForgotPasswordResult;
  /** insert data into the table: "device" */
  insert_device?: Maybe<Device_Mutation_Response>;
  /** insert a single row into the table: "device" */
  insert_device_one?: Maybe<Device>;
  /** insert data into the table: "device_signal" */
  insert_device_signal?: Maybe<Device_Signal_Mutation_Response>;
  /** insert a single row into the table: "device_signal" */
  insert_device_signal_one?: Maybe<Device_Signal>;
  /** insert data into the table: "machine" */
  insert_machine?: Maybe<Machine_Mutation_Response>;
  /** insert a single row into the table: "machine" */
  insert_machine_one?: Maybe<Machine>;
  /** insert data into the table: "machine_state" */
  insert_machine_state?: Maybe<Machine_State_Mutation_Response>;
  /** insert a single row into the table: "machine_state" */
  insert_machine_state_one?: Maybe<Machine_State>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_verification_code" */
  insert_user_verification_code?: Maybe<User_Verification_Code_Mutation_Response>;
  /** insert a single row into the table: "user_verification_code" */
  insert_user_verification_code_one?: Maybe<User_Verification_Code>;
  login: LoginResult;
  resendCode: Verification;
  restorePassword: PasswordChanged;
  signup: SignUpResult;
  /** update data of the table: "device" */
  update_device?: Maybe<Device_Mutation_Response>;
  /** update single row of the table: "device" */
  update_device_by_pk?: Maybe<Device>;
  /** update data of the table: "device_signal" */
  update_device_signal?: Maybe<Device_Signal_Mutation_Response>;
  /** update single row of the table: "device_signal" */
  update_device_signal_by_pk?: Maybe<Device_Signal>;
  /** update data of the table: "machine" */
  update_machine?: Maybe<Machine_Mutation_Response>;
  /** update single row of the table: "machine" */
  update_machine_by_pk?: Maybe<Machine>;
  /** update data of the table: "machine_state" */
  update_machine_state?: Maybe<Machine_State_Mutation_Response>;
  /** update single row of the table: "machine_state" */
  update_machine_state_by_pk?: Maybe<Machine_State>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_verification_code" */
  update_user_verification_code?: Maybe<User_Verification_Code_Mutation_Response>;
  /** update single row of the table: "user_verification_code" */
  update_user_verification_code_by_pk?: Maybe<User_Verification_Code>;
  uploadProfileImage: Scalars["Boolean"];
  verify: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_DeviceArgs = {
  where: Device_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Device_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Device_SignalArgs = {
  where: Device_Signal_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Device_Signal_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_MachineArgs = {
  where: Machine_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Machine_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Machine_StateArgs = {
  where: Machine_State_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Machine_State_By_PkArgs = {
  closeSignalId: Scalars["uuid"];
  machineId: Scalars["String"];
  openSignalId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_User_Verification_CodeArgs = {
  where: User_Verification_Code_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Verification_Code_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootForgotPasswordArgs = {
  email: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_DeviceArgs = {
  objects: Array<Device_Insert_Input>;
  on_conflict?: Maybe<Device_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Device_OneArgs = {
  object: Device_Insert_Input;
  on_conflict?: Maybe<Device_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Device_SignalArgs = {
  objects: Array<Device_Signal_Insert_Input>;
  on_conflict?: Maybe<Device_Signal_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Device_Signal_OneArgs = {
  object: Device_Signal_Insert_Input;
  on_conflict?: Maybe<Device_Signal_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MachineArgs = {
  objects: Array<Machine_Insert_Input>;
  on_conflict?: Maybe<Machine_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Machine_OneArgs = {
  object: Machine_Insert_Input;
  on_conflict?: Maybe<Machine_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Machine_StateArgs = {
  objects: Array<Machine_State_Insert_Input>;
  on_conflict?: Maybe<Machine_State_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Machine_State_OneArgs = {
  object: Machine_State_Insert_Input;
  on_conflict?: Maybe<Machine_State_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Verification_CodeArgs = {
  objects: Array<User_Verification_Code_Insert_Input>;
  on_conflict?: Maybe<User_Verification_Code_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Verification_Code_OneArgs = {
  object: User_Verification_Code_Insert_Input;
  on_conflict?: Maybe<User_Verification_Code_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

/** mutation root */
export type Mutation_RootResendCodeArgs = {
  verificationId: Scalars["String"];
};

/** mutation root */
export type Mutation_RootRestorePasswordArgs = {
  newPassword: Scalars["String"];
  verification: VerificationInput;
};

/** mutation root */
export type Mutation_RootSignupArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

/** mutation root */
export type Mutation_RootUpdate_DeviceArgs = {
  _set?: Maybe<Device_Set_Input>;
  where: Device_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Device_By_PkArgs = {
  _set?: Maybe<Device_Set_Input>;
  pk_columns: Device_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Device_SignalArgs = {
  _append?: Maybe<Device_Signal_Append_Input>;
  _delete_at_path?: Maybe<Device_Signal_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Device_Signal_Delete_Elem_Input>;
  _delete_key?: Maybe<Device_Signal_Delete_Key_Input>;
  _prepend?: Maybe<Device_Signal_Prepend_Input>;
  _set?: Maybe<Device_Signal_Set_Input>;
  where: Device_Signal_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Device_Signal_By_PkArgs = {
  _append?: Maybe<Device_Signal_Append_Input>;
  _delete_at_path?: Maybe<Device_Signal_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Device_Signal_Delete_Elem_Input>;
  _delete_key?: Maybe<Device_Signal_Delete_Key_Input>;
  _prepend?: Maybe<Device_Signal_Prepend_Input>;
  _set?: Maybe<Device_Signal_Set_Input>;
  pk_columns: Device_Signal_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MachineArgs = {
  _set?: Maybe<Machine_Set_Input>;
  where: Machine_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Machine_By_PkArgs = {
  _set?: Maybe<Machine_Set_Input>;
  pk_columns: Machine_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Machine_StateArgs = {
  _inc?: Maybe<Machine_State_Inc_Input>;
  _set?: Maybe<Machine_State_Set_Input>;
  where: Machine_State_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Machine_State_By_PkArgs = {
  _inc?: Maybe<Machine_State_Inc_Input>;
  _set?: Maybe<Machine_State_Set_Input>;
  pk_columns: Machine_State_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Verification_CodeArgs = {
  _set?: Maybe<User_Verification_Code_Set_Input>;
  where: User_Verification_Code_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Verification_Code_By_PkArgs = {
  _set?: Maybe<User_Verification_Code_Set_Input>;
  pk_columns: User_Verification_Code_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUploadProfileImageArgs = {
  image: Scalars["Upload"];
};

/** mutation root */
export type Mutation_RootVerifyArgs = {
  verification: VerificationInput;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: Device_Aggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table: "device_signal" */
  device_signal: Array<Device_Signal>;
  /** fetch aggregated fields from the table: "device_signal" */
  device_signal_aggregate: Device_Signal_Aggregate;
  /** fetch data from the table: "device_signal" using primary key columns */
  device_signal_by_pk?: Maybe<Device_Signal>;
  /** fetch data from the table: "machine" */
  machine: Array<Machine>;
  /** fetch aggregated fields from the table: "machine" */
  machine_aggregate: Machine_Aggregate;
  /** fetch data from the table: "machine" using primary key columns */
  machine_by_pk?: Maybe<Machine>;
  /** fetch data from the table: "machine_state" */
  machine_state: Array<Machine_State>;
  /** fetch aggregated fields from the table: "machine_state" */
  machine_state_aggregate: Machine_State_Aggregate;
  /** fetch data from the table: "machine_state" using primary key columns */
  machine_state_by_pk?: Maybe<Machine_State>;
  me: Me;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_verification_code" */
  user_verification_code: Array<User_Verification_Code>;
  /** fetch aggregated fields from the table: "user_verification_code" */
  user_verification_code_aggregate: User_Verification_Code_Aggregate;
  /** fetch data from the table: "user_verification_code" using primary key columns */
  user_verification_code_by_pk?: Maybe<User_Verification_Code>;
};

/** query root */
export type Query_RootDeviceArgs = {
  distinct_on?: Maybe<Array<Device_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Order_By>>;
  where?: Maybe<Device_Bool_Exp>;
};

/** query root */
export type Query_RootDevice_AggregateArgs = {
  distinct_on?: Maybe<Array<Device_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Order_By>>;
  where?: Maybe<Device_Bool_Exp>;
};

/** query root */
export type Query_RootDevice_By_PkArgs = {
  id: Scalars["String"];
};

/** query root */
export type Query_RootDevice_SignalArgs = {
  distinct_on?: Maybe<Array<Device_Signal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Signal_Order_By>>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** query root */
export type Query_RootDevice_Signal_AggregateArgs = {
  distinct_on?: Maybe<Array<Device_Signal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Signal_Order_By>>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** query root */
export type Query_RootDevice_Signal_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootMachineArgs = {
  distinct_on?: Maybe<Array<Machine_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_Order_By>>;
  where?: Maybe<Machine_Bool_Exp>;
};

/** query root */
export type Query_RootMachine_AggregateArgs = {
  distinct_on?: Maybe<Array<Machine_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_Order_By>>;
  where?: Maybe<Machine_Bool_Exp>;
};

/** query root */
export type Query_RootMachine_By_PkArgs = {
  id: Scalars["String"];
};

/** query root */
export type Query_RootMachine_StateArgs = {
  distinct_on?: Maybe<Array<Machine_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_State_Order_By>>;
  where?: Maybe<Machine_State_Bool_Exp>;
};

/** query root */
export type Query_RootMachine_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Machine_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_State_Order_By>>;
  where?: Maybe<Machine_State_Bool_Exp>;
};

/** query root */
export type Query_RootMachine_State_By_PkArgs = {
  closeSignalId: Scalars["uuid"];
  machineId: Scalars["String"];
  openSignalId: Scalars["uuid"];
};

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootUser_Verification_CodeArgs = {
  distinct_on?: Maybe<Array<User_Verification_Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Verification_Code_Order_By>>;
  where?: Maybe<User_Verification_Code_Bool_Exp>;
};

/** query root */
export type Query_RootUser_Verification_Code_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Verification_Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Verification_Code_Order_By>>;
  where?: Maybe<User_Verification_Code_Bool_Exp>;
};

/** query root */
export type Query_RootUser_Verification_Code_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: Device_Aggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table: "device_signal" */
  device_signal: Array<Device_Signal>;
  /** fetch aggregated fields from the table: "device_signal" */
  device_signal_aggregate: Device_Signal_Aggregate;
  /** fetch data from the table: "device_signal" using primary key columns */
  device_signal_by_pk?: Maybe<Device_Signal>;
  /** fetch data from the table: "machine" */
  machine: Array<Machine>;
  /** fetch aggregated fields from the table: "machine" */
  machine_aggregate: Machine_Aggregate;
  /** fetch data from the table: "machine" using primary key columns */
  machine_by_pk?: Maybe<Machine>;
  /** fetch data from the table: "machine_state" */
  machine_state: Array<Machine_State>;
  /** fetch aggregated fields from the table: "machine_state" */
  machine_state_aggregate: Machine_State_Aggregate;
  /** fetch data from the table: "machine_state" using primary key columns */
  machine_state_by_pk?: Maybe<Machine_State>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_verification_code" */
  user_verification_code: Array<User_Verification_Code>;
  /** fetch aggregated fields from the table: "user_verification_code" */
  user_verification_code_aggregate: User_Verification_Code_Aggregate;
  /** fetch data from the table: "user_verification_code" using primary key columns */
  user_verification_code_by_pk?: Maybe<User_Verification_Code>;
};

/** subscription root */
export type Subscription_RootDeviceArgs = {
  distinct_on?: Maybe<Array<Device_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Order_By>>;
  where?: Maybe<Device_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDevice_AggregateArgs = {
  distinct_on?: Maybe<Array<Device_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Order_By>>;
  where?: Maybe<Device_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDevice_By_PkArgs = {
  id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootDevice_SignalArgs = {
  distinct_on?: Maybe<Array<Device_Signal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Signal_Order_By>>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDevice_Signal_AggregateArgs = {
  distinct_on?: Maybe<Array<Device_Signal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Device_Signal_Order_By>>;
  where?: Maybe<Device_Signal_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDevice_Signal_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootMachineArgs = {
  distinct_on?: Maybe<Array<Machine_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_Order_By>>;
  where?: Maybe<Machine_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMachine_AggregateArgs = {
  distinct_on?: Maybe<Array<Machine_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_Order_By>>;
  where?: Maybe<Machine_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMachine_By_PkArgs = {
  id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootMachine_StateArgs = {
  distinct_on?: Maybe<Array<Machine_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_State_Order_By>>;
  where?: Maybe<Machine_State_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMachine_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Machine_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Machine_State_Order_By>>;
  where?: Maybe<Machine_State_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMachine_State_By_PkArgs = {
  closeSignalId: Scalars["uuid"];
  machineId: Scalars["String"];
  openSignalId: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUser_Verification_CodeArgs = {
  distinct_on?: Maybe<Array<User_Verification_Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Verification_Code_Order_By>>;
  where?: Maybe<User_Verification_Code_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_Verification_Code_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Verification_Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Verification_Code_Order_By>>;
  where?: Maybe<User_Verification_Code_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_Verification_Code_By_PkArgs = {
  id: Scalars["uuid"];
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamp"]>;
  _gt?: Maybe<Scalars["timestamp"]>;
  _gte?: Maybe<Scalars["timestamp"]>;
  _in?: Maybe<Array<Scalars["timestamp"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamp"]>;
  _lte?: Maybe<Scalars["timestamp"]>;
  _neq?: Maybe<Scalars["timestamp"]>;
  _nin?: Maybe<Array<Scalars["timestamp"]>>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: "user";
  createdAt: Scalars["timestamp"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["uuid"];
  lastName: Scalars["String"];
  passwordHash: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  salt: Scalars["String"];
  updatedAt: Scalars["timestamp"];
  /** An array relationship */
  user_verification_codes: Array<User_Verification_Code>;
  /** An aggregated array relationship */
  user_verification_codes_aggregate: User_Verification_Code_Aggregate;
  username: Scalars["String"];
  verified: Scalars["Boolean"];
};

/** columns and relationships of "user" */
export type UserUser_Verification_CodesArgs = {
  distinct_on?: Maybe<Array<User_Verification_Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Verification_Code_Order_By>>;
  where?: Maybe<User_Verification_Code_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserUser_Verification_Codes_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Verification_Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Verification_Code_Order_By>>;
  where?: Maybe<User_Verification_Code_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: "user_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  passwordHash?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  salt?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamp_Comparison_Exp>;
  user_verification_codes?: Maybe<User_Verification_Code_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  verified?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  Uq_8e1f623798118e629b46a9e6299 = "UQ_8e1f623798118e629b46a9e6299",
  /** unique or primary key constraint */
  UqE12875dfb3b1d92d7d7c5377e22 = "UQ_e12875dfb3b1d92d7d7c5377e22",
  /** unique or primary key constraint */
  UserPkey = "user_pkey",
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastName?: Maybe<Scalars["String"]>;
  passwordHash?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  salt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  user_verification_codes?: Maybe<User_Verification_Code_Arr_Rel_Insert_Input>;
  username?: Maybe<Scalars["String"]>;
  verified?: Maybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: "user_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastName?: Maybe<Scalars["String"]>;
  passwordHash?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  salt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  passwordHash?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: "user_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastName?: Maybe<Scalars["String"]>;
  passwordHash?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  salt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  passwordHash?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: "user_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  passwordHash?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user_verification_codes_aggregate?: Maybe<User_Verification_Code_Aggregate_Order_By>;
  username?: Maybe<Order_By>;
  verified?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  FirstName = "firstName",
  /** column name */
  Id = "id",
  /** column name */
  LastName = "lastName",
  /** column name */
  PasswordHash = "passwordHash",
  /** column name */
  Phone = "phone",
  /** column name */
  Salt = "salt",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Username = "username",
  /** column name */
  Verified = "verified",
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastName?: Maybe<Scalars["String"]>;
  passwordHash?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  salt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  username?: Maybe<Scalars["String"]>;
  verified?: Maybe<Scalars["Boolean"]>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  FirstName = "firstName",
  /** column name */
  Id = "id",
  /** column name */
  LastName = "lastName",
  /** column name */
  PasswordHash = "passwordHash",
  /** column name */
  Phone = "phone",
  /** column name */
  Salt = "salt",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Username = "username",
  /** column name */
  Verified = "verified",
}

/** columns and relationships of "user_verification_code" */
export type User_Verification_Code = {
  __typename?: "user_verification_code";
  code: Scalars["String"];
  createdAt: Scalars["timestamp"];
  expiresAt: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** aggregated selection of "user_verification_code" */
export type User_Verification_Code_Aggregate = {
  __typename?: "user_verification_code_aggregate";
  aggregate?: Maybe<User_Verification_Code_Aggregate_Fields>;
  nodes: Array<User_Verification_Code>;
};

/** aggregate fields of "user_verification_code" */
export type User_Verification_Code_Aggregate_Fields = {
  __typename?: "user_verification_code_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Verification_Code_Max_Fields>;
  min?: Maybe<User_Verification_Code_Min_Fields>;
};

/** aggregate fields of "user_verification_code" */
export type User_Verification_Code_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Verification_Code_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user_verification_code" */
export type User_Verification_Code_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Verification_Code_Max_Order_By>;
  min?: Maybe<User_Verification_Code_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_verification_code" */
export type User_Verification_Code_Arr_Rel_Insert_Input = {
  data: Array<User_Verification_Code_Insert_Input>;
  on_conflict?: Maybe<User_Verification_Code_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_verification_code". All fields are combined with a logical 'AND'. */
export type User_Verification_Code_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Verification_Code_Bool_Exp>>>;
  _not?: Maybe<User_Verification_Code_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Verification_Code_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  expiresAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_verification_code" */
export enum User_Verification_Code_Constraint {
  /** unique or primary key constraint */
  PkA82f7853b7c83fb01318ed276e1 = "PK_a82f7853b7c83fb01318ed276e1",
  /** unique or primary key constraint */
  Uq_3a0a432bdb975b5c74b48431359 = "UQ_3a0a432bdb975b5c74b48431359",
}

/** input type for inserting data into table "user_verification_code" */
export type User_Verification_Code_Insert_Input = {
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type User_Verification_Code_Max_Fields = {
  __typename?: "user_verification_code_max_fields";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "user_verification_code" */
export type User_Verification_Code_Max_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  expiresAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Verification_Code_Min_Fields = {
  __typename?: "user_verification_code_min_fields";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "user_verification_code" */
export type User_Verification_Code_Min_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  expiresAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_verification_code" */
export type User_Verification_Code_Mutation_Response = {
  __typename?: "user_verification_code_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User_Verification_Code>;
};

/** input type for inserting object relation for remote table "user_verification_code" */
export type User_Verification_Code_Obj_Rel_Insert_Input = {
  data: User_Verification_Code_Insert_Input;
  on_conflict?: Maybe<User_Verification_Code_On_Conflict>;
};

/** on conflict condition type for table "user_verification_code" */
export type User_Verification_Code_On_Conflict = {
  constraint: User_Verification_Code_Constraint;
  update_columns: Array<User_Verification_Code_Update_Column>;
  where?: Maybe<User_Verification_Code_Bool_Exp>;
};

/** ordering options when selecting data from "user_verification_code" */
export type User_Verification_Code_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  expiresAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_verification_code" */
export type User_Verification_Code_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "user_verification_code" */
export enum User_Verification_Code_Select_Column {
  /** column name */
  Code = "code",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  ExpiresAt = "expiresAt",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "user_verification_code" */
export type User_Verification_Code_Set_Input = {
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "user_verification_code" */
export enum User_Verification_Code_Update_Column {
  /** column name */
  Code = "code",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  ExpiresAt = "expiresAt",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "userId",
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"];
}>;

export type ForgotPasswordMutation = { __typename?: "mutation_root" } & {
  forgotPassword:
    | { __typename: "UserNotFound" }
    | ({ __typename: "Verification" } & Pick<Verification, "id">);
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "mutation_root" } & {
  login:
    | ({ __typename: "InvalidCredentials" } & Pick<InvalidCredentials, "email">)
    | ({ __typename: "Token" } & Pick<Token, "token">);
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "query_root" } & {
  me: { __typename?: "Me" } & Pick<
    Me,
    "id" | "email" | "username" | "verified"
  >;
};

export type ResendCodeMutationVariables = Exact<{
  verificationId: Scalars["String"];
}>;

export type ResendCodeMutation = { __typename?: "mutation_root" } & {
  resendCode: { __typename?: "Verification" } & Pick<Verification, "id">;
};

export type RestorePasswordMutationVariables = Exact<{
  verification: VerificationInput;
  newPassword: Scalars["String"];
}>;

export type RestorePasswordMutation = { __typename?: "mutation_root" } & {
  restorePassword: { __typename?: "PasswordChanged" } & Pick<
    PasswordChanged,
    "email"
  >;
};

export type SignUpMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignUpMutation = { __typename?: "mutation_root" } & {
  signup:
    | ({ __typename: "AlreadySignedUp" } & Pick<AlreadySignedUp, "email">)
    | ({ __typename: "SignedUp" } & Pick<SignedUp, "token" | "verificationId">);
};

export type UploadProfileImageMutationVariables = Exact<{
  file: Scalars["Upload"];
}>;

export type UploadProfileImageMutation = {
  __typename?: "mutation_root";
} & Pick<Mutation_Root, "uploadProfileImage">;

export type UserByIdSubscriptionVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type UserByIdSubscription = { __typename?: "subscription_root" } & {
  user?: Maybe<
    { __typename?: "user" } & Pick<
      User,
      | "id"
      | "username"
      | "firstName"
      | "lastName"
      | "email"
      | "phone"
      | "verified"
      | "updatedAt"
      | "createdAt"
    >
  >;
};

export type VerifyMutationVariables = Exact<{
  verification: VerificationInput;
}>;

export type VerifyMutation = { __typename?: "mutation_root" } & Pick<
  Mutation_Root,
  "verify"
>;

export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      ... on Verification {
        __typename
        id
      }
      ... on UserNotFound {
        __typename
      }
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, baseOptions);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ... on Token {
        __typename
        token
      }
      ... on InvalidCredentials {
        __typename
        email
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const MeDocument = gql`
  query ME {
    me {
      id
      email
      username
      verified
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ResendCodeDocument = gql`
  mutation ResendCode($verificationId: String!) {
    resendCode(verificationId: $verificationId) {
      id
    }
  }
`;
export type ResendCodeMutationFn = Apollo.MutationFunction<
  ResendCodeMutation,
  ResendCodeMutationVariables
>;

/**
 * __useResendCodeMutation__
 *
 * To run a mutation, you first call `useResendCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendCodeMutation, { data, loading, error }] = useResendCodeMutation({
 *   variables: {
 *      verificationId: // value for 'verificationId'
 *   },
 * });
 */
export function useResendCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResendCodeMutation,
    ResendCodeMutationVariables
  >
) {
  return Apollo.useMutation<ResendCodeMutation, ResendCodeMutationVariables>(
    ResendCodeDocument,
    baseOptions
  );
}
export type ResendCodeMutationHookResult = ReturnType<
  typeof useResendCodeMutation
>;
export type ResendCodeMutationResult = Apollo.MutationResult<ResendCodeMutation>;
export type ResendCodeMutationOptions = Apollo.BaseMutationOptions<
  ResendCodeMutation,
  ResendCodeMutationVariables
>;
export const RestorePasswordDocument = gql`
  mutation RestorePassword(
    $verification: VerificationInput!
    $newPassword: String!
  ) {
    restorePassword(newPassword: $newPassword, verification: $verification) {
      email
    }
  }
`;
export type RestorePasswordMutationFn = Apollo.MutationFunction<
  RestorePasswordMutation,
  RestorePasswordMutationVariables
>;

/**
 * __useRestorePasswordMutation__
 *
 * To run a mutation, you first call `useRestorePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestorePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restorePasswordMutation, { data, loading, error }] = useRestorePasswordMutation({
 *   variables: {
 *      verification: // value for 'verification'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useRestorePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RestorePasswordMutation,
    RestorePasswordMutationVariables
  >
) {
  return Apollo.useMutation<
    RestorePasswordMutation,
    RestorePasswordMutationVariables
  >(RestorePasswordDocument, baseOptions);
}
export type RestorePasswordMutationHookResult = ReturnType<
  typeof useRestorePasswordMutation
>;
export type RestorePasswordMutationResult = Apollo.MutationResult<RestorePasswordMutation>;
export type RestorePasswordMutationOptions = Apollo.BaseMutationOptions<
  RestorePasswordMutation,
  RestorePasswordMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      ... on AlreadySignedUp {
        __typename
        email
      }
      ... on SignedUp {
        __typename
        token
        verificationId
      }
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    baseOptions
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const UploadProfileImageDocument = gql`
  mutation UploadProfileImage($file: Upload!) {
    uploadProfileImage(image: $file)
  }
`;
export type UploadProfileImageMutationFn = Apollo.MutationFunction<
  UploadProfileImageMutation,
  UploadProfileImageMutationVariables
>;

/**
 * __useUploadProfileImageMutation__
 *
 * To run a mutation, you first call `useUploadProfileImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadProfileImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadProfileImageMutation, { data, loading, error }] = useUploadProfileImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadProfileImageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadProfileImageMutation,
    UploadProfileImageMutationVariables
  >
) {
  return Apollo.useMutation<
    UploadProfileImageMutation,
    UploadProfileImageMutationVariables
  >(UploadProfileImageDocument, baseOptions);
}
export type UploadProfileImageMutationHookResult = ReturnType<
  typeof useUploadProfileImageMutation
>;
export type UploadProfileImageMutationResult = Apollo.MutationResult<UploadProfileImageMutation>;
export type UploadProfileImageMutationOptions = Apollo.BaseMutationOptions<
  UploadProfileImageMutation,
  UploadProfileImageMutationVariables
>;
export const UserByIdDocument = gql`
  subscription UserById($id: uuid!) {
    user: user_by_pk(id: $id) {
      id
      username
      firstName
      lastName
      email
      phone
      verified
      updatedAt
      createdAt
    }
  }
`;

/**
 * __useUserByIdSubscription__
 *
 * To run a query within a React component, call `useUserByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByIdSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    UserByIdSubscription,
    UserByIdSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    UserByIdSubscription,
    UserByIdSubscriptionVariables
  >(UserByIdDocument, baseOptions);
}
export type UserByIdSubscriptionHookResult = ReturnType<
  typeof useUserByIdSubscription
>;
export type UserByIdSubscriptionResult = Apollo.SubscriptionResult<UserByIdSubscription>;
export const VerifyDocument = gql`
  mutation Verify($verification: VerificationInput!) {
    verify(verification: $verification)
  }
`;
export type VerifyMutationFn = Apollo.MutationFunction<
  VerifyMutation,
  VerifyMutationVariables
>;

/**
 * __useVerifyMutation__
 *
 * To run a mutation, you first call `useVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMutation, { data, loading, error }] = useVerifyMutation({
 *   variables: {
 *      verification: // value for 'verification'
 *   },
 * });
 */
export function useVerifyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyMutation,
    VerifyMutationVariables
  >
) {
  return Apollo.useMutation<VerifyMutation, VerifyMutationVariables>(
    VerifyDocument,
    baseOptions
  );
}
export type VerifyMutationHookResult = ReturnType<typeof useVerifyMutation>;
export type VerifyMutationResult = Apollo.MutationResult<VerifyMutation>;
export type VerifyMutationOptions = Apollo.BaseMutationOptions<
  VerifyMutation,
  VerifyMutationVariables
>;
