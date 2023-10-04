app.get('https://intent-kit-16.hasura.app/api/rest/blogs', (req, res) => {
    const query = req.query.query.toLowerCase();
  
    const searchResults = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(query)
    );
  
    res.json(searchResults);
  });
  