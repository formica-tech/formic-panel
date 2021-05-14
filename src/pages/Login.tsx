import { Notification } from "baseui/notification";
import { KIND } from "baseui/tag";
import Centered from "components/Centered";
import Fade from "components/Fade";
import SpaceBetween from "components/SpaceBetween";
import { checkMutationError } from "gql/util";
import React, { FunctionComponent } from "react";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Label4 } from "baseui/typography";
import { useLoginMutation } from "gql";
import { useAuth } from "providers/Auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login: FunctionComponent = () => {
  const { checkAuth } = useAuth();
  const [login, loginState] = useLoginMutation();
  const [css] = useStyletron();
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async ({ email, password }: LoginFormData) => {
    try {
      const res = await login({ variables: { email, password } });

      if (!res.data || res.data.login.__typename !== "Token") {
        return;
      }

      await checkAuth(res.data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  const err = checkMutationError(loginState, ({ login }) => login.__typename);

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
            maxLength={50}
            inputRef={register}
            name="email"
            error={!!errors["email"]}
            placeholder={t("form.email")}
          />
        </FormControl>

        <FormControl
          label={t("form.password")}
          error={!!errors["password"]}
          caption={errors["password"]?.message}
        >
          <Input
            type="password"
            maxLength={16}
            inputRef={register}
            name="password"
            error={!!errors["email"]}
            placeholder={t("form.password")}
          />
        </FormControl>

        {err && (
          <Notification kind={KIND.negative}>{t(`errors.${err}`)}</Notification>
        )}

        <SpaceBetween>
          <Button type="submit" isLoading={loginState.loading}>
            {t("button.login")}
          </Button>

          <Link to="/signup">
            <Button kind="secondary">{t("button.signup")}</Button>
          </Link>
        </SpaceBetween>

        <Centered
          className={css({
            padding: ".5rem",
          })}
        >
          <Link to="/forgotPassword">
            <Label4>{t("link.forgotPassword")}</Label4>
          </Link>
        </Centered>
      </form>
    </Fade>
  );
};

export default Login;
