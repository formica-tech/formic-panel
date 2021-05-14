import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import { Card } from "baseui/card";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Cell, Grid } from "baseui/layout-grid";
import { Notification } from "baseui/notification";
import { PhoneInput } from "baseui/phone-input";
import { Radio, RadioGroup } from "baseui/radio";
import { Spinner } from "baseui/spinner";
import { Tab, Tabs } from "baseui/tabs-motion";
import { KIND } from "baseui/tag";
import Centered from "components/Centered";
import Fade from "components/Fade";
import Scale from "components/Scale";
import SpaceBetween from "components/SpaceBetween";
import { UnexpectedError } from "gql/util";
import { useUserByIdSubscription } from "gql";
import { getProfileImageUrl, uploadProfileImage } from "gql/util";
import { useAuth } from "providers/Auth";
import { LANG_PREF, saveLangPreference } from "providers/Locale";
import { ThemeType, useTheme } from "providers/Theme";
import React, { FunctionComponent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";

const Preferences = () => {
  const theme = useTheme();
  const { i18n, t } = useTranslation();
  return (
    <>
      <FormControl label={t("theme")}>
        <RadioGroup
          value={theme.themeType}
          onChange={(e) => theme.setTheme(e.target.value as ThemeType)}
        >
          <Radio value="light">{t("themeType.light")}</Radio>
          <Radio value="dark">{t("themeType.dark")}</Radio>
        </RadioGroup>
      </FormControl>

      <FormControl label={t("language")}>
        <RadioGroup
          value={i18n.language}
          onChange={(e) =>
            i18n
              .changeLanguage(e.target.value)
              .then(() => saveLangPreference(e.target.value))
          }
        >
          <Radio value={LANG_PREF.EN}>{t("lang.en")}</Radio>
          <Radio value={LANG_PREF.TR}>{t("lang.tr")}</Radio>
        </RadioGroup>
      </FormControl>
    </>
  );
};

const UpdateEmail = () => {
  const { t } = useTranslation();

  return (
    <>
      <Input value={""} />
      <Button>Update</Button>
    </>
  );
};

const UpdatePhone = () => {
  const { t } = useTranslation();

  return (
    <>
      <PhoneInput value={""} />
      <Button>Update</Button>
    </>
  );
};

const Profile: FunctionComponent = () => {
  const { user } = useAuth();
  const [css] = useStyletron();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const userProfile = useUserByIdSubscription({
    variables: { id: user?.id || "" },
  });

  const [activeTab, setActiveTab] = useState<React.Key>(0);

  // TODO: find a better way to show unauthorized!
  if (!user) {
    return <Redirect to={"/not-found"} />;
  }

  // TODO: implement firstname, lastname and phone

  return (
    <Grid>
      <Cell span={[4, 4, 5]}>
        <Scale>
          <Card>
            <Centered>
              <div
                className={css({ cursor: "pointer" })}
                onClick={() => {
                  if (!fileInputRef.current) {
                    return;
                  }
                  fileInputRef.current.click();
                }}
              >
                <Avatar
                  name={user.username}
                  src={getProfileImageUrl()}
                  size={"6rem"}
                />
              </div>
              <input
                ref={fileInputRef}
                className={css({ display: "none" })}
                type="file"
                onChange={({ target }) => {
                  const { validity, files } = target;
                  if (!validity.valid || !files || files.length === 0) {
                    return;
                  }
                  uploadProfileImage({ file: files[0] }).catch(console.error);
                  target.files = null;
                }}
              />
            </Centered>
            {userProfile.loading && (
              <Fade>
                <Centered>
                  <Spinner />
                </Centered>
              </Fade>
            )}
            {userProfile.error && (
              <Notification kind={KIND.negative}>
                {t(`errors.${UnexpectedError}`)}
              </Notification>
            )}
            {userProfile.data && userProfile.data.user && !userProfile.loading && (
              <Fade>
                <FormControl label={t("form.username")}>
                  <Input value={userProfile.data.user.username} />
                </FormControl>

                <FormControl label={t("form.email")}>
                  <Input value={userProfile.data.user.email} disabled />
                </FormControl>

                <FormControl label={t("form.phone")}>
                  <Input value={userProfile.data.user.phone || ""} disabled />
                </FormControl>

                <FormControl label={t("form.fullName")}>
                  <div
                    className={css({
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                    })}
                  >
                    <div className={css({ paddingRight: ".5rem", flex: "1" })}>
                      <Input
                        value={userProfile.data.user.firstName}
                        placeholder={t("form.firstName")}
                      />
                    </div>
                    <div className={css({ flex: "1" })}>
                      <Input
                        value={userProfile.data.user.lastName}
                        placeholder={t("form.lastName")}
                      />
                    </div>
                  </div>
                </FormControl>
              </Fade>
            )}
            <SpaceBetween>
              <Button>{t("button.save")}</Button>
              <Button kind={"secondary"}>{t("button.reset")}</Button>
            </SpaceBetween>
          </Card>
        </Scale>
      </Cell>
      <Cell span={[4, 4, 4]}>
        <Scale>
          <Card>
            <Tabs
              activeKey={activeTab}
              onChange={({ activeKey }) => setActiveTab(activeKey)}
            >
              <Tab title={t("preferences")}>
                <Preferences />
              </Tab>
              <Tab title={t("updateEmail")}>
                <UpdateEmail />
              </Tab>
              <Tab title={t("updatePhone")}>
                <UpdatePhone />
              </Tab>
            </Tabs>
          </Card>
        </Scale>
      </Cell>
    </Grid>
  );
};

export default Profile;
