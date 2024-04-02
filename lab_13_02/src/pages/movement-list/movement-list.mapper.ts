import * as apiModel from "./api/movement-list.api-model"
import * as viewModel from "./movement-list.vm"

export const mapAccountInfoFromApiToVm = (accountList: apiModel.AccountApi): viewModel.AccountVm => {
    const AccountVm : viewModel.AccountVm = {
        id: accountList.id,
        iban: accountList.iban,
        name: accountList.name,
        balance: accountList.balance.toString(),
    }
    return AccountVm;
}

export const mapMovementListFromApiToVm = (movementList: apiModel.MovementApi[]) : viewModel.MovementVm[] =>
    movementList.map((movement) => ({
        id: movement.id,
        description: movement.description,
        amount: movement.amount.toString(),
        balance: movement.balance.toString(),
        accountId: movement.accountId,
        transaction: new Date(movement.transaction),
        realTransaction: new Date(movement.realTransaction),
    }));

