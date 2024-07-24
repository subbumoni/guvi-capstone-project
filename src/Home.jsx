

import { useState } from 'react';
import { Typography, styled, Box } from "@mui/material";

//components
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransaction from "./components/NewTransaction";
import Transactions from "./components/Transactions";





const Header = styled(Typography)`
margin:10px 0;
font-size:36px;
display:flex;
align-item:center;
justify-content:center;
color:blue;
text-transform:uppercase;
`
const Component = styled(Box)`
display:flex;
background:#fff;
width:800px;
padding:10px;
border-radius:20px;
margin:auto;
& > div{
height:70vh;
width:50%;
padding:10px
}
`
function Home() {
 const [transactions, setTransactions] = useState([
   { id: 1, text: "subbu", amount: -20 },
   { id: 2, text: "salary", amount: 3000 },
   { id: 3, text: "Book", amount: -100 },
   { id: 4, text: "Bonus", amount: 150 },
 ]);
 


    return (
    <>
     <Box className="App">
        <Header>Expense Tracker</Header>
        <Component>
          <Box>
            <Balance transactions={transactions} />
            <ExpenseCard transactions={transactions} />
            <NewTransaction setTransactions={setTransactions} />
          </Box>
          <Box>
            <Transactions transactions={transactions} />
          </Box>
        </Component>
     
      </Box>
    </>
    );
}

export default Home;