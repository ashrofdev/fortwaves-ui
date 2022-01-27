import React from "react";
import InvestSuccess from "../../components/investment/InvestSuccess";
import Card from "../../components/container/Card";
import { BtnBlack } from "../../components/buttons/Btns";
export const InvestDone = () => {
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
            <InvestSuccess />
          </div>
          <div className="buttons">
            <BtnBlack title={"Okay"} />
          </div>
        </Card>
      </div>
    </div>
  );
};
