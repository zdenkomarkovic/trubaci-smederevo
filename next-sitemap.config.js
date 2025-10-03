/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://trubaci-smederevo.rs",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
