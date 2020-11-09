import React from "react";
//Style
import { SelectInput, MainContainer, NewsContainer } from "../Style";
// ComponentCardNew
import CardNew from "../CardNew";

export default function News() {
  return (
    <MainContainer>
      <SelectInput
        id="contry"
        name="contry"
        // value={props.valuesSignUp.gender}
        // onChange={props.handleChangeCreateUser}
      >
        <option defaultValue value="choose">
          Contry
        </option>
        <option value="male">Mexico</option>
        <option value="female">Colombia</option>
        <option value="other">USA</option>
      </SelectInput>

      <SelectInput
        id="category"
        name="category"
        // value={props.valuesSignUp.gender}
        // onChange={props.handleChangeCreateUser}
      >
        <option defaultValue value="choose">
          Category
        </option>
        <option value="male">Tec</option>
        <option value="female">Bitcoin</option>
      </SelectInput>
      <NewsContainer>
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
      </NewsContainer>
    </MainContainer>
  );
}
