import { FormValidationResult } from "@/common/validations/validation.model";
import { NewAccountVm, NewAccountFormErrors, ExistingAccountVm } from "../account.model";
import { validateAccountType, validateNameField } from "./account-field.validation";


export const validateForm = (account: NewAccountVm, accountList: ExistingAccountVm[]): FormValidationResult<NewAccountFormErrors> => {
    const fieldValidationResults = [
        validateAccountType(account.type),
        validateNameField(account.name, accountList),
    ];

    const formValidationResult = {
        succeeded: fieldValidationResults.every((f) => f.succeeded),
        errors: {
            type: fieldValidationResults[0].errorMessage ?? "",
            name: fieldValidationResults[1].errorMessage ?? "",
        },
    };
    
    return formValidationResult;
};