const express = require('express');
const request = require('request'); // You can use 'request' library for making HTTP requests
const app = express();
const _ = require('lodash'); // Import Lodash

app.get('/api/blog-stats', (req, res) => {
  // Make a GET request to fetch the blog data from a third-party API
  request('https://api.example.com/blog-data', (error, response, body) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching blog data' });
    }

    const blogData = JSON.parse(body);

    // Data Analysis
    const totalBlogs = blogData.length;
    const longestTitleBlog = _.maxBy(blogData, (blog) => blog.title.length);
    const privacyBlogs = _.filter(blogData, (blog) => blog.title.toLowerCase().includes('privacy'));
    const uniqueBlogTitles = _.uniqBy(blogData, 'title');

    // Response
    const responseObj = {
      totalBlogs,
      longestBlogTitle: longestTitleBlog.title,
      privacyBlogsCount: privacyBlogs.length,
      uniqueBlogTitles: uniqueBlogTitles.map((blog) => blog.title),
    };

    res.json(responseObj);
  });
});

// Blog Search Endpoint
app.get('/api/blog-search', (req, res) => {
  const query = req.query.query.toLowerCase();

  const searchResults = _.filter(blogData, (blog) => blog.title.toLowerCase().includes(query));

  res.json(searchResults);
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start your Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
