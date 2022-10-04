const pluginTailwindCSS = require('eleventy-plugin-tailwindcss');
const eleventyPluginFeathericons = require('eleventy-plugin-feathericons');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginFeathericons);
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
  });
  eleventyConfig.addWatchTarget('./public/css/');
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: 'src/css/style.css',
    dest: 'public',
    keepFolderStructure: false,
    minify: false,
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
