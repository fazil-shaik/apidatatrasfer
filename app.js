const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const app = express();

// Define data analysis and search functions
const calculateAnalytics = (blogData) => {
  // Your data analysis logic
};

const performSearch = (blogData, query) => {
  // Your search logic
};

// Middleware to fetch blog data
app.use('/api/blog-stats', async (req, res, next) => {
  try {
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
      headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
      },
    });

    // Store the blog data in res.locals to make it accessible to other route handlers
    res.locals.blogData = response.data;
    next(); // Proceed to the next middleware or route
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for /api/blog-stats
app.get('/api/blog-stats', (req, res) => {
  const blogData = res.locals.blogData; // Access the fetched blog data

  // Calculate analytics using memoized function
  const analytics = calculateAnalytics(blogData);

  res.json(analytics);
});

// Route for /api/blog-search
app.get('/api/blog-search', (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "query" is required' });
  }

  const blogData = res.locals.blogData; // Access the fetched blog data

  // Perform search using memoized function
  const searchResults = performSearch(blogData, query);

  res.json(searchResults);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
