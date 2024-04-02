import React from "react";
import { AccountVm } from "../movement-list.vm";
import classes from "./movement-list-account-info.component.module.css"

interface Props {
    accountInfo: AccountVm;
}

export const MovementListAccountInfo: React.FC<Props> = (props) => {
    const {accountInfo} = props;
    return (
        <>
            <div className={classes.headerContainer}>
                <h1>Saldos y Últimos movimientos</h1>
                <div className={classes.saldoDisponibleContainer}>
                    <p> SALDO DISPONIBLE:</p> 
                    <h2>{accountInfo.balance} €</h2>
                </div>
            </div>
            <div className={classes.headerInfoCuenta}>
                <h2> Alias:  {accountInfo.name}</h2>
                <h2> IBAN: {accountInfo.iban}</h2>
            </div>
        </>
    )
}