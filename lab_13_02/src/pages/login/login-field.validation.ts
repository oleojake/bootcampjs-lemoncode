import { buildRequiredFieldValidationFailedResponse, buildValidationSucceededResult, isStringValueInformed } from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateUserField = (value: string) : FieldValidationResult => {
    if(!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }

    return buildValidationSucceededResult();
}

export const validatePasswordField = (value: string) : FieldValidationResult => {
    if(!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }

    return buildValidationSucceededResult();
}