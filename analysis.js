const _ = require('lodash');

// Inside the request callback
const blogData = JSON.parse(body);

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
