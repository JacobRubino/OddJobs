const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors'); // Add this line
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { Profile } = require('./models');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3007;
const app = express();

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

// Apply the Apollo Server middleware
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
