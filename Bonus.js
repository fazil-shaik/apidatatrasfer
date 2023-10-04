const _ = require('lodash');

const calculateAnalytics = (blogData) => {
  const totalBlogs = blogData.length;
  const longestTitleBlog = _.maxBy(blogData, 'title');
  const privacyBlogs = blogData.filter(blog => blog.title.toLowerCase().includes('privacy'));
  const uniqueTitles = _.uniqBy(blogData, 'title');

  return {
    totalBlogs,
    longestBlogTitle: longestTitleBlog ? longestTitleBlog.title : null,
    privacyBlogCount: privacyBlogs.length,
    uniqueBlogTitles: uniqueTitles.map(blog => blog.title),
  };
};

const performSearch = (blogData, query) => {
  return blogData.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()));
};

const memoizedAnalytics = _.memoize(() => calculateAnalytics(blogData), () => 'analytics');
const memoizedSearch = _.memoize((query) => performSearch(blogData, query), (query) => `search-${query}`);
