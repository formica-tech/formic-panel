import { MutationResult } from "@apollo/client";
import {
  UploadProfileImageDocument,
  UploadProfileImageMutationFn,
  UploadProfileImageMutationVariables,
} from "gql/index";
import { FORMIC_MEDIA_URI, getToken, uploadClient } from "gql/apollo";

export const ERROR_CODES: Record<string, string> = {
  InvalidCredentials: "InvalidCredentials",
  AlreadySignedUp: "AlreadySignedUp",
  UserNotFound: "UserNotFound",
};

export const UnexpectedError = "UnexpectedError";

export const getProfileImageUrl = () =>
  `${FORMIC_MEDIA_URI}/profile?token=${getToken()}`;

export const checkMutationError = <T>(
  r: MutationResult<T>,
  checkErr: (d: T) => string | undefined = () => undefined
) => {
  const errCode = r.data && checkErr(r.data);
  if (errCode) {
    return ERROR_CODES[errCode];
  }
  if (r.error || (!r.loading && r.called && !r.data)) {
    return UnexpectedError;
  }
};

const VERIFICATION_ID_KEY = "FORMICA_VERIFICATION_ID";
export const setVerificationId = (id: string) =>
  localStorage.setItem(VERIFICATION_ID_KEY, id);
export const getVerificationId = () =>
  localStorage.getItem(VERIFICATION_ID_KEY) || "";

export const uploadProfileImage = (
  variables: UploadProfileImageMutationVariables
) => {
  return uploadClient.mutate<UploadProfileImageMutationFn>({
    mutation: UploadProfileImageDocument,
    variables,
  });
};
