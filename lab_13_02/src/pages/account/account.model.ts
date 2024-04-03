export interface Account {
    type: string;
    name: string;
}

export const buildEmptyAccount = () : Account => {
    return ({
        type: "",
        name: "",
    })
}

export interface AccountFormErrors {
    type: string;
    name: string;
}

export const createEmptyAccountFormErrors = (): AccountFormErrors => ({
    type: "",
    name: "",
});

export interface AccountVm {
    id: string;
    alias: string;
}