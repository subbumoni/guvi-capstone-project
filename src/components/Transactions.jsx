import { Box,Typography,Divider,List } from "@mui/material";
import Transaction from "./Transaction";





const Transactions = ({ transactions }) => {
  return (
    <Box>
      <Typography variant="h5">Transaction History</Typography>
      <Divider />
      <List>
        {transactions.map((transaction, index) => (
          <Transaction transaction={transaction} key={index} />
        ))}
      </List>
    </Box>
  );
};
export default Transactions;