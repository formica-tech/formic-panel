import client, { clearToken, setToken } from "gql/apollo";
import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { MeDocument, MeQuery } from "gql/api";

export interface User {
  id: string;
  email: string;
  username: string;
  verified: boolean;
}

export const me = () => client.query<MeQuery>({ query: MeDocument });

interface AuthCtxValue {
  user: User | null;
  err: Error | null;
  loading: boolean;
  checkAuth: (token?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthCtx = createContext<AuthCtxValue>({
  user: null,
  err: null,
  loading: false,
  checkAuth: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthCtx);

const Auth: FunctionComponent = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [err, setErr] = useState<Error | null>(null);
  const history = useHistory();

  const checkAuth = useCallback(async (token?: string) => {
    await client.resetStore();
    if (token) setToken(token);
    return me()
      .then((response) => {
        setUser(response.data.me);
      })
      .catch((err) => {
        setErr(err);
        setUser(null);
        clearToken();
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    checkAuth().finally(() => {
      setLoading(false);
    });
  }, [checkAuth]);

  const logout = useCallback(() => {
    setLoading(true);
    history.push("/");
    clearToken();
    return client
      .resetStore()
      .then(() => checkAuth())
      .catch(setErr)
      .finally(() => setLoading(false));
  }, [checkAuth, history]);

  return (
    <AuthCtx.Provider value={{ user, loading, err, checkAuth, logout }}>
      {children}
    </AuthCtx.Provider>
  );
};

export default Auth;
