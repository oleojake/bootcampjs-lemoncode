import { AppLayout } from "@/layouts";
import React from "react";
import { Account } from "./account.model";
import classes from "./account.page.module.css"
import { NewAccountComponent } from "./component/account-form.component";
import { saveAccount } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNewAccount = (newAccountInfo: Account) => {
    saveAccount(newAccountInfo).then((result) => {
      if (result) {
        alert("Nueva cuenta creada con éxito");
        navigate(appRoutes.accountList);
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
    <div className={classes.container}>
      <h1 className={classes.title}>Crear Nueva Cuenta Bancaria</h1>
      <NewAccountComponent onCreateAccount={handleNewAccount}></NewAccountComponent>
    </div>
    </AppLayout>
  )
};
