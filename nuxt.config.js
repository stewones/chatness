import theme from "@nuxt/content-theme-docs";

const createSitemapRoutes = async () => {
  const { $content } = require("@nuxt/content");
  let files = await $content({ deep: true }).only(["path"]).fetch();
  files.map((file) => (file.path = file.path.split("/en").join("")));
  files = files.filter((it) => !["/settings", "/releases"].includes(it.path));
  return files.map((file) => (file.path === "/index" ? "" : file.path));
};

export default theme({
  docs: {
    primaryColor: "#f5b01d",
  },
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://chatness.app",
    gzip: true,
    routes: createSitemapRoutes,
    exclude: ["/releases", "/settings"],
  },
});
//
