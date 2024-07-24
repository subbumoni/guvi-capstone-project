import { ListItem,ListItemText,styled } from "@mui/material";


const Detail = styled(ListItem)`
  margin-top: 10px;
`;


const Transaction = ({ transaction, index }) => {
  const color = transaction.amount > 0 ? "Green" : "Red";
  return (
    <Detail style={{ background: `${color}`, color: "#fff" }} key={index}>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
  );
};

export default Transaction;
