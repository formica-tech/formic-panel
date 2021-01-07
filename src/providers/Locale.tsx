import { LocaleProvider } from "baseui";

import React, { FunctionComponent, useEffect } from "react";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";

const FORMICA_LANG_KEY = "FORMICA_LANG_KEY";
export const saveLangPreference = (lang: string) =>
  localStorage.setItem(FORMICA_LANG_KEY, lang);
export const getLangPreference = () => localStorage.getItem(FORMICA_LANG_KEY);

export const LANG_PREF = {
  EN: "en",
  TR: "tr",
};

const resources = {
  en: {
    translation: {
      uiOverrides: {},
      appTitle: "Formica",
      preferences: "Preferences",
      theme: "Theme",
      language: "Language",
      copyRightText: "All rights reserved © formica 2021",
      lang: {
        en: "English",
        tr: "Turkish",
      },
      themeType: {
        dark: "Dark",
        light: "Light",
      },
      message: {
        enterValidationCode:
          "Enter your 6 digit code we sent to your email address.",
      },
      button: {
        submit: "Submit",
        back: "Back",
        login: "Login",
        signup: "Sign Up",
        verify: "Verify",
        resendCode: "Resend Code",
      },
      form: {
        password: "Password",
        rePassword: "Re Password",
        newPassword: "New Password",
        email: "Email",
        code: "Code",
        username: "Username",
        fullName: "Full Name",
        firstName: "First Name",
        lastName: "Last Name",
        phone: "Phone",
      },
      link: {
        forgotPassword: "forgot password?",
      },
      nav: {
        profile: "Profile",
        logout: "Logout",
      },
      notifications: {
        passwordUpdated: "Password Updated",
      },
      errors: {
        UnexpectedError: "Something went wrong contact the admin!",
        AlreadySignedUp:
          "There is an account already signed up with this email.",
        UserNotFound: "There is no user with this email.",
        InvalidCredentials: "Email or password is wrong! Try Again Chief.",
        UpdatePasswordFailed:
          "Failed to update password please check your verification code.",
      },
    },
  },
  tr: {
    translation: {
      uiOverrides: {},
      copyRightText: "Tüm hakları saklıdır © formica 2021",
      button: {
        submit: "Gönder",
        back: "Geri",
        login: "Giriş Yap",
        signup: "Kayıt Ol",
        verify: "Verify",
        resendCode: "Tekrar Gönder",
      },
      form: {
        password: "Şifre",
        rePassword: "Tekrar Şifre",
        newPassword: "Yeni Şifre",
        email: "E-posta",
        code: "Kod",
      },
      link: {
        forgotPassword: "şifremi unuttum?",
      },
      nav: {
        profile: "Profil",
        logout: "Çıkış",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(console.error);

const Locale: FunctionComponent = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = getLangPreference();
    if (savedLang) {
      i18n.changeLanguage(savedLang).catch(console.error);
    }
  }, [i18n]);

  const overrides =
    i18n.getDataByLanguage(i18n.language)?.translation.uiOverrides || {};
  return <LocaleProvider locale={overrides}>{children}</LocaleProvider>;
};

export default Locale;
