import { useState } from "react";
import { Button } from "react-bootstrap";

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    cellphone: "",
  });

  function onImput(e){
    let inputName = e.target.name;
    let value = e.target.value;
    let newData = { ...data };
    newData[inputName] = value;
    setData(newData);
  }

  function onSubmit(e){
    e.preventDefault();
    props.onSubmit(e, data);
  }

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: "flex", marginBottom: 8, color: "white" }}>
        <label htmlFor="name" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input required value={data.name} name="name" type="text" onChange={onImput}/>
      </div>

      <div style={{ display: "flex", marginBottom: 8, color: "white" }}>
        <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>
          Email
        </label>
        <input required value={data.email} name="email" type="email" onChange={onImput}/>
      </div>

      <div style={{ display: "flex", marginBottom: 8, color: "white" }}>
        <label htmlFor="cellphone" style={{ width: "100px", marginRight: 4 }}>
          Teléfono
        </label>
        <input required value={data.cellphone} name="cellphone" type="cellphone" onChange={onImput}/>
      </div>

      <Button type="submit" disabled={data.name === "" && data.email === "" && data.cellphone === ""} size="sm" variant="success" onClick={(e) => props.onSubmit(e, data)}>
        Finalizar Compra
      </Button>
    </form>
  );
}