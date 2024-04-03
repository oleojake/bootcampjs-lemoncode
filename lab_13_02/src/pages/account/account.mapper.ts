import * as apiModel from "./api"
import * as viewModel from "./account.model"

export const mapAccountFromApiToVm = ( account: apiModel.AccountAPI): viewModel.AccountVm => ({
    id: account.id,
    alias: account.name,
});