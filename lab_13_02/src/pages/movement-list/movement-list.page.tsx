import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, MovementVm, createEmptyAccount, createEmptyMovement } from "./movement-list.vm";
import { MovementListAccountInfo } from "./components/movement-list-account-info.component";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import classes from "./movement-list.page.module.css"
import { getAccountInfo, getMovementsList } from "./api/movement-list.api";
import { mapAccountInfoFromApiToVm, mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const {id} = useParams();
  const [accountInfo, setAccountInfo] = React.useState<AccountVm>(createEmptyAccount());
  const [movementlist, setMovementList] = React.useState<MovementVm[]>([createEmptyMovement()]);

  React.useEffect(() => {
    if (id) {
      getAccountInfo(id).then((result) =>
        setAccountInfo(mapAccountInfoFromApiToVm(result))
      );
      getMovementsList(id).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
      );
    }
  }, []);
  
  return(
    <AppLayout>
      <div className={classes.root}>
        <MovementListAccountInfo accountInfo={accountInfo}/>
        <MovementListTableComponent movementList={movementlist}/>
      </div>
    </AppLayout>
    );
};
