const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const createPoolRoute = require('./routes/createPool');
const getPoolsRoute = require('./routes/getPools');
const addLiquidityRoute = require('./routes/addLiquidity');
const removeLiquidityRoute = require('./routes/removeLiquidity');
const swapTokensRoute = require('./routes/swapTokens');
require('dotenv').config();
app.use(express.json());

app.use(cors());
app.use('/api/createPool', createPoolRoute);
app.use('/api/getPools', getPoolsRoute);
app.use('/api/addLiquidity', addLiquidityRoute);
app.use('/api/removeLiquidity', removeLiquidityRoute);
app.use('/api/swapTokens', swapTokensRoute);
app.listen(PORT, () => {
  console.log('server is up and running on port :', PORT);
});
