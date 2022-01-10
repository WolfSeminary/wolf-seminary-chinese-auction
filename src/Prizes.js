import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Prizes = () => {
   const [prizes, setPrizes] = useState(
      [
         {
            ID: 1,
            name: "חדר ילדים",
            image:"public/images/Proom.jpg",
            description: "ארון, מיטה, שידה",
            price: 20
         },
         {
            ID: 1,
            name: "פאה",
            // image:<Image URL here></Image>,
            description: "פאת קסטם",
            price: 20
         },
         {
            ID: 3,
            name: "מייבש כביסה",
            // image:<Image URL here></Image>,
            description: "מייבש כביסה של חברת ZANUSSI",
            price: 20
         },
         {
            ID: 4,
            name: "עגלת תינוק",
            // image:<Image URL here></Image>,
            description: "עגלת שכיבה לתינוק",
            price: 20
         }
         , {
            ID: 5,
            name: "נעליים לכל המשפחה",
            // image:<Image URL here></Image>,
            description: "10 זוגות נעליים לכל המשפחה",
            price: 10
         }
         , {
            ID: 6,
            name: "1000₪ ביש",
            // image:<Image URL here></Image>,
            description: "שובר כספי לרשת יש",
            price: 10
         }
         , {
            ID: 7,
            name: "1000₪ בקידהישיק",
            // image:<Image URL here></Image>,
            description: "שובר כספי לרשת קידישיק",
            price: 10
         }
         , {
            ID: 8,
            name: "1000₪ בבת של מלך",
            // image:<Image URL here></Image>,
            description: "שובר כספי לרשת בת מלך",
            price: 10
         }
         , {
            ID: 9,
            name: "ערכת פליימוביל",
            // image:<Image URL here></Image>,
            description: "בית בובות ענק",
            price: 5
         }
         , {
            ID: 10,
            name: "סט מצעים",
            // image:<Image URL here></Image>,
            description: "זוג מצעים מפואר",
            price: 5
         }
         , {
            ID: 11,
            name: "אורגית",
            // image:<Image URL here></Image>,
            description: "אורגנית איכותית",
            price: 5
         }
         , {
            ID: 12,
            name: "מחשב נייד",
            // image:<Image URL here></Image>,
            description: "מחשב נייד קומפקטי",
            price: 5
         }



      ]
   )

   return (<>

      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8 }}>
            {prizes.map((item, index) => (
               <Grid item xs={2} sm={4} md={4} key={index}>
                  <div   >
                     <p> Add Prize  component here</p>
                     <img src={item.image}/>
                     <p>{item.ID}{item.name}</p>
                     <p> {item.description}</p>
                  </div>
               </Grid>
            ))}
         </Grid>
      </Box>
   </>);


}

export default Prizes;