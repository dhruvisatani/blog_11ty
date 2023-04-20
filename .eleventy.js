const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.addFilter("postDate", (dateObj) => {
    console.log(DateTime)
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      oninput: "public"
    }
  };
}