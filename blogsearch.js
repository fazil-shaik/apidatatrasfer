app.get('/api/blog-search', (req, res) => {
    const query = req.query.query.toLowerCase();
  
    // Perform a case-insensitive search on the fetched blog data
    const searchResults = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(query)
    );
  
    res.json(searchResults);
  });
  