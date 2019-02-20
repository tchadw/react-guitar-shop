import React from "react";

export default function EmptyCart() {
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>Your Cart Is Currently Empty</h1>
        </div>
      </div>
    </div>
  );
}
