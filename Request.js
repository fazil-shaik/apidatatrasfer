const responseObj = {
    totalBlogs,
    longestBlogTitle: longestTitleBlog.title,
    privacyBlogsCount: privacyBlogs.length,
    uniqueBlogTitles: uniqueBlogTitles.map((blog) => blog.title),
  };
  
  res.json(responseObj);
  