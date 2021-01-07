import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { Notification } from "baseui/notification";
import { StatefulPinCode } from "baseui/pin-code";
import { KIND } from "baseui/tag";
import { Label2 } from "baseui/typography";
import { useResendCodeMutation, useVerifyMutation } from "gql/api";
import { UnexpectedError } from "gql/util";
import Fade from "components/Fade";
import SpaceBetween from "components/SpaceBetween";
import { getVerificationId, setVerificationId } from "gql/util";
import { useAuth } from "providers/Auth";
import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";

const Verify: FunctionComponent = () => {
  const { checkAuth, logout } = useAuth();
  const [verify, verifyState] = useVerifyMutation();
  const [resendCode, resendCodeState] = useResendCodeMutation();
  const { t } = useTranslation();
  const [css] = useStyletron();

  const [err, setErr] = useState<Error | null>(null);
  const [done, setDone] = useState(false);

  const submitCode = async (values: string[]) => {
    if (values.includes("")) {
      return;
    }
    try {
      await verify({
        variables: {
          verification: { code: values.join(""), id: getVerificationId() },
        },
      });
      setDone(true);
      await checkAuth();
    } catch (e) {
      console.error(e);
      setErr(e);
    }
  };

  const onResendClick = async () => {
    try {
      const res = await resendCode({
        variables: { verificationId: getVerificationId() },
      });
      if (!res.data) {
        return;
      }
      setVerificationId(res.data.resendCode.id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Fade>
      <Label2 overrides={{ Block: { style: { marginBottom: "1rem" } } }}>
        {t("message.enterValidationCode")}
      </Label2>
      <StatefulPinCode
        initialState={{ values: ["", "", "", "", "", ""] }}
        onChange={({ values }) => {
          submitCode(values).catch(console.error);
        }}
        error={!!err}
        positive={done}
      />

      {resendCodeState.error && (
        <Notification kind={KIND.negative}>
          {t(`errors.${UnexpectedError}`)}
        </Notification>
      )}

      <SpaceBetween
        className={css({
          marginTop: "1rem",
        })}
      >
        <Button
          onClick={onResendClick}
          isLoading={resendCodeState.loading || verifyState.loading}
        >
          {t("button.resendCode")}
        </Button>

        <Button
          kind="secondary"
          onClick={() => logout()}
          disabled={resendCodeState.loading || verifyState.loading}
        >
          {t("nav.logout")}
        </Button>
      </SpaceBetween>
    </Fade>
  );
};

export default Verify;
