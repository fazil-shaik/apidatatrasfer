// Inside the try block of /api/blog-stats route
const totalBlogs = blogData.length;
const longestTitleBlog = _.maxBy(blogData, 'title');
const privacyBlogs = blogData.filter(blog => blog.title.toLowerCase().includes('privacy'));
const uniqueTitles = _.uniqBy(blogData, 'title');

// Prepare the response object
const responseData = {
  totalBlogs,
  longestBlogTitle: longestTitleBlog ? longestTitleBlog.title : null,
  privacyBlogCount: privacyBlogs.length,
  uniqueBlogTitles: uniqueTitles.map(blog => blog.title),
};

res.json(responseData);
