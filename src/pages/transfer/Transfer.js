import React from "react";
import Card from "../../components/container/Card";
import { TransferType } from "../../components/transfer/TransferType";
const Transfer = () => {
  return (
    <div className="transfer">
      <div className="top">
        <h3>Transfers</h3>
      </div>

      <Card>
        <TransferType
          title="F-F transfer"
          desc="Transfer money from your Fortewaves 
        account to another fortewaves account"
        />
        <TransferType
          title="F-Other Transfer"
          desc="Transfer money from your Fortewaves 
          account to a local bank account"
        />
      </Card>
    </div>
  );
};

export default Transfer;
