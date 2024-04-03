export interface NewAccountVm {
    type: string;
    name: string;
}

export const buildEmptyAccount = () : NewAccountVm => {
    return ({
        type: "",
        name: "",
    })
}

export interface NewAccountFormErrors {
    type: string;
    name: string;
}

export const createEmptyAccountFormErrors = (): NewAccountFormErrors => ({
    type: "",
    name: "",
});

export interface ExistingAccountVm {
    id: string;
    alias: string;
}