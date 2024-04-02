import Axios from "axios";
import { AccountApi, MovementApi } from "./movement-list.api-model";




export const getAccountInfo = (accountId: string): Promise<AccountApi> => {
    const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list/${accountId}`;
    return Axios.get<AccountApi>(urlAccount)
    .then(({ data }) => data);
}


const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementsList = (accountId: string): Promise<MovementApi[]> =>
    Axios.get<MovementApi[]>(urlMovements, { params: { accountId } })
    .then(({ data }) => data);