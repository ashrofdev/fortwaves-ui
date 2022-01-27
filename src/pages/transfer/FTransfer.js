import React from "react";
import Card from "../../components/container/Card";
import { BtnBlack, BtnGrey } from "../../components/buttons/Btns";
export const FTransfer = () => {
  return (
    <div>
      <div className="top">
        <h3>F-F Transfer</h3>
      </div>

      <Card>
        <form className="content-body">
          <div>
            <label>Recipient’s email*</label>
            <input type="text" name="email" className="form-control" />
          </div>

          <div>
            <label>Amount to transfer*</label>
            <input type="text" name="amount" className="form-control" />
          </div>

          <div>
            <label>Narration</label>
            <input type="text" name="narration" className="form-control" />
          </div>
        </form>
        <div className="buttons">
          <BtnGrey title={"Back"} />
          <BtnBlack title={"Next"} />
        </div>
      </Card>
    </div>
  );
};
