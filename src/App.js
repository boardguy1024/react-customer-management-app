import React from "react";
import "./App.css";

import Customer from "./components/customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    id: "박경석",
    birthday: "243424",
    gender: "남자",
    job: "엔지니어"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    id: "パクパク",
    birthday: "13332434",
    gender: "남자",
    job: "블로거"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    id: "paku fpv",
    birthday: "33525235",
    gender: "남자",
    job: "파일럿"
  }
];

function App() {
  return (
    <div>
      {customers.map(customer => {
        return (
          <Customer
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            job={customer.job}
          />
        );
      })}
    </div>
  );
}

export default App;
