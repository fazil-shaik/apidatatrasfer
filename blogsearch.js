app.get('/api/blog-search', (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter "query" is required' });
  }

  const searchResults = blogData.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()));
  res.json(searchResults);
});
