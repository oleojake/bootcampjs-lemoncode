import * as apiModel from "./api"
import * as viewModel from "./account.model"

export const mapAccountFromApiToVm = ( account: apiModel.ExistingAccountAPI): viewModel.ExistingAccountVm => ({
    id: account.id,
    alias: account.name,
});

export const mapNewAccountFromVmToApi = ( account: apiModel.NewAccountAPI): viewModel.NewAccountVm => ({
    type: account.type,
    name: account.name,
});