import { TextField, Typography } from '@mui/material';

const Winner = (props) => {
    return (
        <>
            <Typography >:הוא {props.currentPrize}  והזוכה בהגרלת  </Typography>
            <TextField variant="outlined" value={props.firstName + " " + props.lastName} />
        </>
    )
}
export default Winner