import React from "react";
import { BtnBlack, BtnGrey } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";
import Amount from "../../components/investment/Amount";

const NewInvest = () => {
  return (
    <div>
      <div className="new">
        <p className="title">Create new Investment</p>
        <div className="steps">
          <p>steps</p>
          <p>steps</p>
          <p>steps</p>
        </div>

        <Card>
          <div className="content-body">
            <Amount />
          </div>
          <div className="buttons">
            <BtnGrey title={"Back"} />
            <BtnBlack title={"Calculate Return"} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewInvest;
