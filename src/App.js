import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PaymentPage from "./PaymentPage";
import PrizesPage from "./PrizesPage";
import RafflesPage from "./RafflesPage";

export default function App() {
  const prizesArray = [
    {
      ID: 1,
      name: "חדר ילדים",
      image: "./images/Proom.jpg",
      description: "ארון, מיטה, שידה",
      price: 20,
      isSelected: false,
    },
    {
      ID: 2,
      name: "פאה",
      image: "./images/pcomputer.jpg",
      description: "פאת קסטם",
      price: 20,
      isSelected: false,
    },
    {
      ID: 3,
      name: "מייבש כביסה",
      image: "./images/pcomputer.jpg",
      description: "מייבש כביסה של חברת ZANUSSI",
      price: 20,
      isSelected: false,
    },
    {
      ID: 4,
      name: "עגלת תינוק",
      image: "./images/pcomputer.jpg",
      description: "עגלת שכיבה לתינוק",
      price: 20,
      isSelected: false,
    },
    {
      ID: 5,
      name: "נעליים לכל המשפחה",
      image: "./images/pcomputer.jpg",
      description: "10 זוגות נעליים לכל המשפחה",
      price: 10,
      isSelected: false,
    },
    {
      ID: 6,
      name: "1000₪ ביש",
      image: "./images/pcomputer.jpg",
      description: "שובר כספי לרשת יש",
      price: 10,
      isSelected: false,
    },
    {
      ID: 7,
      name: "1000₪ בקידהישיק",
      image: "./images/pcomputer.jpg",
      description: "שובר כספי לרשת קידישיק",
      price: 10,
      isSelected: false,
    },
    {
      ID: 8,
      name: "1000₪ בבת של מלך",
      image: "./images/pcomputer.jpg",
      description: "שובר כספי לרשת בת מלך",
      price: 10,
      isSelected: false,
    },
    {
      ID: 9,
      name: "ערכת פליימוביל",
      image: "./images/pcomputer.jpg",
      description: "בית בובות ענק",
      price: 5,
      isSelected: false,
    },
    {
      ID: 10,
      name: "סט מצעים",
      image: "./images/pcomputer.jpg",
      description: "זוג מצעים מפואר",
      price: 5,
      isSelected: false,
    },
    {
      ID: 11,
      name: "אורגית",
      image: "./images/pcomputer.jpg",
      description: "אורגנית איכותית",
      price: 5,
      isSelected: false,
    },
    {
      ID: 12,
      name: "מחשב נייד",
      image: "./images/pcomputer.jpg",
      description: "מחשב נייד קומפקטי",
      price: 5,
      isSelected: false,
    },
  ];

  return (
    <Routes>
      <Route path="Prizes" element={<PrizesPage prizesArray={prizesArray} />} />
      <Route
        path="PaymentPage"
        element={<PaymentPage prizesArray={prizesArray} />}
      />
      <Route
        path="RafflesPage"
        element={<RafflesPage prizesArray={prizesArray} />}
      />
      <Route path="" element={<PrizesPage prizesArray={prizesArray} />} />
    </Routes>
  );
}
