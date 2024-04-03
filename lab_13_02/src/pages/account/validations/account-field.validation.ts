import { isStringValueInformed, buildRequiredFieldValidationFailedResponse, buildValidationSucceededResult, buildValidationFailedResult } from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";
import { ExistingAccountVm } from "../account.model";
import { NAME_ACCOUNT_ALREADY_EXISTS } from "@/common/validations/validation.const";

const thisAccountAlreadyExists = (value: string, accountList: ExistingAccountVm[]): boolean => {
    const accountNameExists : boolean = accountList.some(
        (account : ExistingAccountVm) : boolean => account.alias.toLocaleLowerCase() === value.toLocaleLowerCase()
    );
    return accountNameExists
}

export const validateAccountType = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
        return buildValidationSucceededResult();
};

export const validateNameField = (value: string, accountList: ExistingAccountVm[]): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    if(thisAccountAlreadyExists(value, accountList)){
        return buildValidationFailedResult(NAME_ACCOUNT_ALREADY_EXISTS);
    }
        return buildValidationSucceededResult();
};