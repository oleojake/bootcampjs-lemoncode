import { isStringValueInformed, buildRequiredFieldValidationFailedResponse, buildValidationSucceededResult, buildValidationFailedResult } from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";
import { AccountVm } from "../account.model";
import { NAME_ACCOUNT_ALREADY_EXISTS } from "@/common/validations/validation.const";

// DEBERÍA MOVERLO A PLAIN VALIDATION? o HELPER EN ACCOUNT?
const thisNameAlreadyExists = (value: string, accountList: AccountVm[]): boolean => {
    const accountNameExists : boolean = accountList.some(
        (account : AccountVm) : boolean => account.alias.toLocaleLowerCase() === value.toLocaleLowerCase()
    );
    return accountNameExists
}

export const validateAccountType = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
        return buildValidationSucceededResult();
};

export const validateNameField = (value: string, accountList: AccountVm[]): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    if(thisNameAlreadyExists(value, accountList)){
        return buildValidationFailedResult(NAME_ACCOUNT_ALREADY_EXISTS);
    }
        return buildValidationSucceededResult();
};