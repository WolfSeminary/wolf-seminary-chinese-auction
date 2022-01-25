import { TextField, Typography } from '@mui/material';

const Winner = (props) => {
    return (
        <div>
            <Typography >:והזוכה בהגרלת {props.currentPrize} הוא</Typography>
            <TextField variant="outlined" value={props.firstName + " " + props.lastName} ></TextField>
        </div>
    )
}
export default Winner