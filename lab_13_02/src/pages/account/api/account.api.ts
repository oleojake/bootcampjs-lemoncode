import Axios from "axios";
import { AccountAPI, NewAccountAPI } from "./account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountAPI[]> =>
    Axios.get<AccountAPI[]>(urlAccount).then(({ data }) => data);

export const saveAccount = (account: NewAccountAPI): Promise<NewAccountAPI> =>
    Axios.post<NewAccountAPI>(urlAccount, account).then(({ data }) => data);