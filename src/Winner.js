import { Grid, TextField, Typography } from "@mui/material";

export default function Winner(props) {
  return (
    <Grid
      xs={5}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>:והזוכה בהגרלת {props.currentPrize} הוא</Typography>
      <TextField
        variant="outlined"
        value={props.firstName + " " + props.lastName}
        multiline
        rows={5}
      />
    </Grid>
  );
}
