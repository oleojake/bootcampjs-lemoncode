import * as apiModel from "./api/movement-list.api-model"
import { mapAccountInfoFromApiToVm, mapMovementListFromApiToVm } from "./movement-list.mapper"

describe("mapAccountInfoFromApiToVm", () => {

    it("should return data as modelVM when reads from API ", () => {
                // Arrange
                const accountInfoApi : apiModel.AccountApi = {
                    id: "1",
                    iban: "ES6621000418401234567891",
                    name: "Ahorros", 
                    balance: 3000
                }
                // Act
                const resultVM = mapAccountInfoFromApiToVm(accountInfoApi);

                // Assert
                expect(resultVM).toEqual({
                    id: "1",
                    iban: "ES6621000418401234567891",
                    name: "Ahorros", 
                    balance: "3000"
                })
    });

});


describe("mapMovementListFromApiToVm", () => {

    it("should return empty array when it feeds empty array", () => {
        // Arrange
        const movementListApi : apiModel.MovementApi[] = []

        // Act
        const resultVM = mapMovementListFromApiToVm(movementListApi);

        // Assert
        expect(resultVM).toEqual([])
    });

    it("should return data as modelVM when reads from API ", () => {
        // Arrange
        const movementListApi : apiModel.MovementApi[] = [
            {
                id: "124",
                description: "Cena Gloovo",
                amount: -30,
                balance: 970,
                transaction: "2019-12-09T21:30:00",
                realTransaction: "2019-12-09T21:30:00",
                accountId: "1"
            },
            {
                id: "125",
                description: "Bizum",
                amount: 15,
                balance: 985,
                transaction: "2019-12-07T11:30:00",
                realTransaction: "2019-12-08T20:00:10",
                accountId: "1"
            }
        ]
        
        // Act
        const resultVM = mapMovementListFromApiToVm(movementListApi);

        // Assert
        expect(resultVM).toEqual([
            {
                id: "124",
                description: "Cena Gloovo",
                amount: "-30",
                balance: "970",
                transaction: new Date("2019-12-09T21:30:00"),
                realTransaction: new Date("2019-12-09T21:30:00"),
                accountId: "1"
            },
            {
                id: "125",
                description: "Bizum",
                amount: "15",
                balance: "985",
                transaction: new Date("2019-12-07T11:30:00"),
                realTransaction: new Date("2019-12-08T20:00:10"),
                accountId: "1"
            }
        ])
    });
});