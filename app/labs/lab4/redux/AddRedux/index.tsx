"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { add } from "./addReducer";
import { RootState } from "../../store";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);

  const { sum } = useSelector((state: RootState) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-25" id="wd-add-redux">
      <h1>Add Redux</h1>
      <h2>
        {a} + {b} = {sum}
      </h2>

      <FormControl
        type="number"
        value={a}
        className="mb-2"
        onChange={(e) => setA(parseInt(e.target.value) || 0)}
      />

      <FormControl
        type="number"
        value={b}
        className="mb-2"
        onChange={(e) => setB(parseInt(e.target.value) || 0)}
      />

      <Button id="wd-add-redux-click" onClick={() => dispatch(add({ a, b }))}>
        Add Redux
      </Button>

      <hr />
    </div>
  );
}