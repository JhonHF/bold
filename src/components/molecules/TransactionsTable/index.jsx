import React from "react";

export const TransactionsTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Transaccion</th>
          <th scope="col">Fecha y hora</th>
          <th scope="col">Metodo de pago</th>
          <th scope="col">Monto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <th>Cobro Exitoso</th>
          <th>04/06/2020 17:14</th>
          <th>Visa</th>
          <th>$23000</th>
        </tr>
        <tr>
          <th scope="row">1</th>
          <th>Cobro Exitoso</th>
          <th>04/06/2020 17:14</th>
          <th>Visa</th>
          <th>$23000</th>
        </tr>
        <tr>
          <th scope="row">1</th>
          <th>Cobro Exitoso</th>
          <th>04/06/2020 17:14</th>
          <th>Visa</th>
          <th>$23000</th>
        </tr>
      </tbody>
    </table>
  );
};
