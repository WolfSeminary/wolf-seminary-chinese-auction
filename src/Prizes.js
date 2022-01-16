import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Prize from './Prize'
const Prizes = () => {
   const [prizes, setPrizes] = useState(
      [
         {
            ID: 1,
            name: "חדר ילדים",
            image: "./images/Proom.jpg",
            description: "ארון, מיטה, שידה",
            price: 20
         },
         {
            ID: 1,
            name: "פאה",
            image: "./images/Pcomputer.jpg",
            description: "פאת קסטם",
            price: 20
         },
         {
            ID: 3,
            name: "מייבש כביסה",
            image: "./images/Pcomputer.jpg",
            description: "מייבש כביסה של חברת ZANUSSI",
            price: 20
         },
         {
            ID: 4,
            name: "עגלת תינוק",
            image: "./images/Pcomputer.jpg",
            description: "עגלת שכיבה לתינוק",
            price: 20
         }
         , {
            ID: 5,
            name: "נעליים לכל המשפחה",
            image: "./images/Pcomputer.jpg",
            description: "10 זוגות נעליים לכל המשפחה",
            price: 10
         }
         , {
            ID: 6,
            name: "1000₪ ביש",
            image: "./images/Pcomputer.jpg",
            description: "שובר כספי לרשת יש",
            price: 10
         }
         , {
            ID: 7,
            name: "1000₪ בקידהישיק",
            image: "./images/Pcomputer.jpg",
            description: "שובר כספי לרשת קידישיק",
            price: 10
         }
         , {
            ID: 8,
            name: "1000₪ בבת של מלך",
            image: "./images/Pcomputer.jpg",
            description: "שובר כספי לרשת בת מלך",
            price: 10
         }
         , {
            ID: 9,
            name: "ערכת פליימוביל",
            image: "./images/Pcomputer.jpg",
            description: "בית בובות ענק",
            price: 5
         }
         , {
            ID: 10,
            name: "סט מצעים",
            image: "./images/Pcomputer.jpg",
            description: "זוג מצעים מפואר",
            price: 5
         }
         , {
            ID: 11,
            name: "אורגית",
            image: "./images/Pcomputer.jpg",
            description: "אורגנית איכותית",
            price: 5
         }
         , {
            ID: 12,
            name: "מחשב נייד",
            image: "./images/Pcomputer.jpg",
            description: "מחשב נייד קומפקטי",
            price: 5
         }
      ]
   )
  const[numOfSelectedPrizes,setNumOfSelectedPrizes ]  = useState(0);

   return (<>
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8 }}>
            {prizes.map((item, index) => (
               <Grid item xs={2} sm={4} md={4} key={index}>
                  <Prize 
                  image={item.image}
                  Id={item.ID}
                  name={item.name}
                  description={item.description}
                  numOfSelectedPrizes={numOfSelectedPrizes}
                  setNumOfSelectedPrizes={setNumOfSelectedPrizes} />
               </Grid>
            ))}
         </Grid>
      </Box>
   </>);
}

export default Prizes;