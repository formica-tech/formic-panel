import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Notification } from "baseui/notification";
import { KIND } from "baseui/tag";
import Fade from "components/Fade";
import SpaceBetween from "components/SpaceBetween";
import { checkMutationError, setVerificationId } from "gql/util";
import { useSignUpMutation } from "gql/api";
import { useAuth } from "providers/Auth";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SignUpFormData {
  email: string;
  password: string;
  rePassword: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password does not match")
    .required(),
});

const SignUp: FunctionComponent = () => {
  const history = useHistory();
  const { checkAuth } = useAuth();
  const { t } = useTranslation();

  const { handleSubmit, register, errors, getValues } = useForm<SignUpFormData>(
    {
      defaultValues: {
        email: "",
        password: "",
        rePassword: "",
      },
      resolver: yupResolver(formSchema),
    }
  );

  const [signup, signupState] = useSignUpMutation();
  const onSubmit = async ({ email, password }: SignUpFormData) => {
    try {
      const res = await signup({ variables: { email, password } });
      if (!res.data || res.data.signup.__typename !== "SignedUp") {
        return;
      }
      setVerificationId(res.data.signup.verificationId);
      await checkAuth(res.data.signup.token);
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  let err = checkMutationError(signupState, ({ signup }) => signup.__typename);

  return (
    <Fade>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          label={t("form.email")}
          error={!!errors["email"]}
          caption={errors["email"]?.message}
        >
          <Input
            type="text"
            inputRef={register}
            name="email"
            error={!!errors["email"]}
          />
        </FormControl>

        <FormControl
          label={t("form.password")}
          error={!!errors["password"]}
          caption={errors["password"]?.message}
        >
          <Input
            type="password"
            inputRef={register}
            name="password"
            error={!!errors["password"]}
          />
        </FormControl>

        <FormControl
          label={t("form.rePassword")}
          error={!!errors["rePassword"]}
          caption={errors["rePassword"]?.message}
        >
          <Input
            type="password"
            inputRef={register({
              validate: {
                shouldEqualPassword: (value: string) =>
                  getValues("password") === value || "not equal to password",
              },
            })}
            name="rePassword"
            error={!!errors["rePassword"]}
          />
        </FormControl>

        {err && (
          <Notification kind={KIND.negative}>{t(`errors.${err}`)}</Notification>
        )}

        <SpaceBetween>
          <Button type="submit" isLoading={signupState.loading}>
            {t("button.signup")}
          </Button>

          <Link to="/">
            <Button kind="secondary">{t("button.login")}</Button>
          </Link>
        </SpaceBetween>
      </form>
    </Fade>
  );
};

export default SignUp;
