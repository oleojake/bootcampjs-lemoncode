import React from "react";
import { Account, AccountFormErrors, AccountVm, buildEmptyAccount, createEmptyAccountFormErrors } from "../account.model";
import { validateForm } from "../validations";
import classes from "./account-form.component.module.css"
import { getAccountList } from "../api";
import { mapAccountFromApiToVm } from "../account.mapper";

interface Props {
    onCreateAccount: (transferInfo: Account) => void;
}

export const NewAccountComponent: React.FC<Props> = (props) => {
    const {onCreateAccount} = props
    const [account, setAccount] = React.useState<Account>(buildEmptyAccount())
    const [errors, setErrors] = React.useState<AccountFormErrors>(createEmptyAccountFormErrors())
    const [accountList, setAccountList] = React.useState<AccountVm[]>([]);


    React.useEffect(() => {
        setAccount(buildEmptyAccount());
        getAccountList().then((result) => {
            const accountListVm = result.map(mapAccountFromApiToVm);
            setAccountList(accountListVm); // A VECES LLEGA VACÍO? // HABRÍA QUE MOVERLO A ACCOUNT PAGE?
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValidationResult = validateForm(account, accountList);
        setErrors(formValidationResult.errors);
        if(formValidationResult.succeeded){
            onCreateAccount(account);
        }
    };

    const handleFieldChange = (e:| React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={classes.formContainer}>
                    <div>
                        <label>Tipo de Cuenta</label>
                        <select name="type" onChange={handleFieldChange} className={classes.medium}>
                            <option value="">Seleccionar</option>
                            <option value="1">Cuenta Corriente</option>
                            <option value="2">Ahorro</option>
                        </select>
                        <p className={classes.error} >{errors.type}</p>
                    </div>
                    <div>
                        <label>Alias</label>
                        <input name="name" onChange={handleFieldChange} className={classes.medium}/>
                        <p className={classes.error} >{errors.name}</p>
                    </div>
                </div>
                <button type="submit" className={classes.button} >CREAR NUEVA CUENTA</button>
            </form>
        </div>
    )
}