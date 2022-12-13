/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  const tagMap = {
    _carrots: ["vegetable", "carrot"],
    _tomatoes: ["tomato"],
    _vegetables: ["carrot", "tomato"],
  };

  for (const [name, tags] of Object.entries(tagMap)) {
    eleventyConfig.addCollection(name, collectionApi => collectionApi.getFilteredByTags(...tags));
  }

  eleventyConfig.addCollection("dynamic", collectionApi => collectionApi);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
