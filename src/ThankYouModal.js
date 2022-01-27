import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { prizesArray } from "./Prizes";

export default function ThankYouModal(props) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const updateLastName = (event) => {
    setLastName(event.target.value);
  };
  const onCloseModal = () => {
    if (localStorage.getItem("users") == null)
      localStorage.setItem(
        "users",
        JSON.stringify([
          JSON.parse(localStorage.getItem("users")),
          {
            firstName: firstName,
            lastName: lastName,
            prizesList: prizesArray
              .filter((p) => {
                return p.isSelected == true;
              })
              .map((p) => {
                return p.name;
              }),
          },
        ])
      );
    else
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("users")),
          {
            firstName: firstName,
            lastName: lastName,
            prizesList: prizesArray
              .filter((p) => {
                return p.isSelected == true;
              })
              .map((p) => {
                return p.name;
              }),
          },
        ])
      );
    props.setShouldShowThankYouModal(false);
  };
  
  return (
    <Modal
      open
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        p: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: (theme) => theme.shadows[5],
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          תזכו למצוות!
        </Typography>
        <Typography id="server-modal-description" sx={{ pt: 2 }}>
          יישר כוח על השתתפותכם בהחזקת מפעל הבית של סמינר וולף
        </Typography>
        <Typography>
          על מנת לשמור את נתוניך לצורך עריכת ההגרלות, נא הזן את הפרטים הבאים
        </Typography>
        <TextField label="שם פרטי" onChange={updateFirstName}></TextField>
        <TextField label="שם משפחה" onChange={updateLastName}></TextField>
      </Box>
    </Modal>
  );
}
