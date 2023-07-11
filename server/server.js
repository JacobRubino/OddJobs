const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors'); // Add this line
const path = require('path');
const { authMiddleware } = require('./utils/auth');
//Sudar- profile data from models
const { Profile } = require('./models');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3007;
const app = express();

const stripe = require('stripe')('')
app.use(cors()); // Enable CORS

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const contractorNames = await Profile.find().distinct('name');
    return { contractorNames };
  },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//set a checkout post route for stripe payments
app.post('/checkout-route', async (req, res) => {
  const { priceId } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: 'yourpaymenthasbeensuccessful.com',
      cancel_url: 'transaction canceled.com',
    });

    res.json({ sessionId: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Apply the Apollo Server middleware
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
}

  // Call the async function to start the server
  startApolloServer();

// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
