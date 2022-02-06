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
      image: "./images/room.jpg",
      description: "ארון, מיטה, שידה",
      price: 20,
      isSelected: false,
    },
    {
      ID: 2,
      name: "פאה",
      image: "./images/68.jpg",
      description: "פאת קסטם",
      price: 20,
      isSelected: false,
    },
    {
      ID: 3,
      name: "מזגן  ",
      image: "./images/air.jpg",
      description: "מזגן של חברת אלקטרה",
      price: 20,
      isSelected: false,
    },
    {
      ID: 4,
      name: "עגלת תינוק",
      image: "./images/bogabo.jpg",
      description: "עגלת שכיבה לתינוק",
      price: 20,
      isSelected: false,
    },
    {
      ID: 5,
      name: "מצלמה איכותית",
      image: "./images/camara.jpg",
      description: "מצלמת קנון איכותית",
      price: 10,
      isSelected: false,
    },
    {
      ID: 6,
      name: "1000₪ באושר עד",
      image: "./images/osherAd.jpg",
      description: "שובר כספי לרשת אושר עד",
      price: 10,
      isSelected: false,
    },
    {
      ID: 7,
      name: "1000₪ בחנות  בגדי ילדים ",
      image: "./images/shoping.jpg",
      description: "שובר כספי בחנות בגדי ילדים לפי בחירה",
      price: 10,
      isSelected: false,
    },
    {
      ID: 8,
      name: "1000₪ בבת של מלך",
      image: "./images/batMelech.png",
      description: "שובר כספי לרשת בת מלך",
      price: 10,
      isSelected: false,
    },
    {
      ID: 9,
      name: "ערכת פליימוביל",
      image: "./images/play.png",
      description: "בית בובות ענק",
      price: 5,
      isSelected: false,
    },
    {
      ID: 10,
      name: "סט מצעים",
      image: "./images/sleep.jpg",
      description: "זוג מצעים מפואר",
      price: 5,
      isSelected: false,
    },
    {
      ID: 11,
      name: "אופניים חשמליות",
      image: "./images/bycle.jpg",
      description: "אופניים חשמליות ממרכז האופניים",
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
