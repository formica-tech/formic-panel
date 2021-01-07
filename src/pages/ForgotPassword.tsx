import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Notification } from "baseui/notification";
import { KIND } from "baseui/tag";
import { toaster } from "baseui/toast";
import Fade from "components/Fade";
import SpaceBetween from "components/SpaceBetween";
import { checkMutationError } from "gql/util";
import { useForgotPasswordMutation, useRestorePasswordMutation } from "gql/api";
import React, { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const updateFormSchema = yup.object().shape({
  code: yup.string().required(),
  newPassword: yup.string().required(),
  rePassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "password does not match")
    .required(),
});

interface UpdatePasswordFormData {
  code: string;
  newPassword: string;
  rePassword: string;
}

interface UpdatePasswordFormProps {
  verificationId: string;
}

const UpdatePasswordForm = ({ verificationId }: UpdatePasswordFormProps) => {
  const [updatePassword, updatePasswordState] = useRestorePasswordMutation();
  const history = useHistory();
  const { t } = useTranslation();

  const { register, handleSubmit, errors } = useForm<UpdatePasswordFormData>({
    defaultValues: {
      code: "",
      newPassword: "",
      rePassword: "",
    },
    resolver: yupResolver(updateFormSchema),
  });

  const onSubmit = async ({ code, newPassword }: UpdatePasswordFormData) => {
    try {
      await updatePassword({
        variables: { verification: { code, id: verificationId }, newPassword },
      });
      history.push("/");
      toaster.info(t("notifications.passwordUpdated"), {
        autoHideDuration: 2000,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Fade>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          disabled={updatePasswordState.loading}
          label={t("form.code")}
        >
          <Input type="text" inputRef={register} name="code" maxLength={6} />
        </FormControl>

        <FormControl
          disabled={updatePasswordState.loading}
          label={t("form.newPassword")}
          caption={errors["newPassword"]?.message}
          error={!!errors["newPassword"]}
        >
          <Input
            type="password"
            inputRef={register}
            name="newPassword"
            error={!!errors["newPassword"]}
            maxLength={16}
          />
        </FormControl>

        <FormControl
          disabled={updatePasswordState.loading}
          label={t("form.rePassword")}
          caption={errors["rePassword"]?.message}
          error={!!errors["rePassword"]}
        >
          <Input
            type="password"
            inputRef={register}
            name="rePassword"
            error={!!errors["rePassword"]}
            maxLength={16}
          />
        </FormControl>

        {updatePasswordState.error && (
          <Notification kind={KIND.negative}>
            {t(`errors.UpdatePasswordFailed`)}
          </Notification>
        )}

        <Button type="submit" isLoading={updatePasswordState.loading}>
          {t("button.submit")}
        </Button>
      </form>
    </Fade>
  );
};

const ForgotPassword: FunctionComponent = () => {
  const [
    forgotPasswordMutation,
    forgotPasswordState,
  ] = useForgotPasswordMutation();
  const [verificationId, setVerificationId] = useState("");
  const history = useHistory();
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm<{ email: string }>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(
      yup.object().shape({ email: yup.string().email().required() })
    ),
  });

  const onSubmit = async ({ email }: { email: string }) => {
    const response = await forgotPasswordMutation({ variables: { email } });

    if (
      !response.data ||
      response.data.forgotPassword.__typename !== "Verification"
    ) {
      return;
    }
    const { forgotPassword } = response.data;
    setVerificationId(forgotPassword.id);
  };

  const err = checkMutationError(
    forgotPasswordState,
    ({ forgotPassword }) => forgotPassword.__typename
  );

  const idExist = verificationId !== "";
  return (
    <>
      <Fade>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            label={t("form.email")}
            disabled={forgotPasswordState.loading || idExist}
            caption={errors["email"]?.message}
            error={!!errors["email"]}
          >
            <Input
              type="text"
              inputRef={register}
              name="email"
              error={!!errors["email"]}
            />
          </FormControl>

          {err && (
            <Notification kind={KIND.negative}>
              {t(`errors.${err}`)}
            </Notification>
          )}
          {!idExist && (
            <Fade>
              <SpaceBetween>
                <Button type="submit" isLoading={forgotPasswordState.loading}>
                  {t("button.submit")}
                </Button>

                <Button onClick={() => history.goBack()} kind="secondary">
                  {t("button.back")}
                </Button>
              </SpaceBetween>
            </Fade>
          )}
        </form>
      </Fade>

      {idExist && <UpdatePasswordForm verificationId={verificationId} />}
    </>
  );
};

export default ForgotPassword;
