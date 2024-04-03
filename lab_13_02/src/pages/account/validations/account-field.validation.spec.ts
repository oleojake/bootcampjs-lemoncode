import { NAME_ACCOUNT_ALREADY_EXISTS, REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
import {validateAccountType, validateNameField } from "./account-field.validation";
import { ExistingAccountVm } from "../account.model";

describe("account-field.validation specs", () => {
    describe("validateAccountType", () => {
        it("should return false when account id is empty", () => {
            // Arrange
            const value = "";
            
            // Act
            const result = validateAccountType(value);
            
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        });
        
        it("should return true when account id is informed", () => {
            // Arrange
            const value = "1";
            
            // Act
            const result = validateAccountType(value);
            
            // Assert
            expect(result.succeeded).toBeTruthy();
        });
    });

    describe("validateNameField", () => {
        it("should return false when account name is empty", () => {
            // Arrange
            const value = "";
            const accountList: ExistingAccountVm[] = [{id:"1", alias:"ahorros"}];
            // Act
            const result = validateNameField(value, accountList);
            
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        });
        
        it("should return true when account name is informed", () => {
            // Arrange
            const value = "Nómina";
            const accountList: ExistingAccountVm[] = [{id:"1", alias:"ahorros"}];

            // Act
            const result = validateNameField(value, accountList);
            
            // Assert
            expect(result.succeeded).toBeTruthy();
        });

        it("should return false when the account name already exists", () => {
            // Arrange
            const value = "ahorros";
            const accountList: ExistingAccountVm[] = [{id:"1", alias:"ahorros"}];
            
            // Act
            const result = validateNameField(value, accountList);
            
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(NAME_ACCOUNT_ALREADY_EXISTS);
        });

        it("should return true when the account name does not exists", () => {
            // Arrange
            const value = "ahorros2";
            const accountList: ExistingAccountVm[] = [{id:"1", alias:"ahorros"}];
            
            // Act
            const result = validateNameField(value, accountList);
            
            // Assert
            expect(result.succeeded).toBeTruthy();
        });
    });
});