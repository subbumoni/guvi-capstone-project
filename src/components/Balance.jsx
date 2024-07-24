import { Box,Typography,styled } from "@mui/material";





const BalanceText = styled(Typography)`
  margin: 10px 0;
  font-size: 25px;
  display: flex;
  align-item: center;
  justify-content: center;
  color: green;
  text-transform: uppercase;
`;

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance:₹ {total}</BalanceText>
    </Box>
  );
};

export default Balance;
