module.exports = {
  siteMetadata: {
    title: `Chaardivari`,
    fullTitle: `Chaardivari`,
    description: `Listen better | Plan better | Build better.`,
    about: `We started in this industry with a very small project but with big enthusiasm and great willpower. We have been delivering one project at a time and adding one happy client after another.
    We are now one of the fastest-growing construction company in Rajasthan. We aim to be one of the most loved and trusted construction company and we are well on our way. We believe that luck favours the does and by gods grace we have been very lucky thus far`,
    email: `info.chaardivari@gmail.com`,
    social: {
      facebook: `https://www.facebook.com/infochaardivari`,
      twitter: `https://twitter.com/tanpelconstruction`,
      instagram: `https://www.instagram.com/chaardivari.in`,
    },
    contact: {
      mobile: `(+91) 9461040282`,
      telephone: ``,
    },
    address: `357, Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur, Rajasthan 302020, India`,
    map: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28474.192359069755!2d75.723648!3d26.863033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2275753fc988d813!2sChaardivari!5e0!3m2!1sen!2sus!4v1624192717047!5m2!1sen!2sus`,
    opening: {
      day: `All Days`,
      hour: `8:00am - 5:00pm`,
    },
    careers: {
      title: `Benefits and rewards`,
      about: `Our diverse capabilities provide employees with the ability to
      work on projects of all sizes and types and receive amazing
      benefits in return. They include but are in no way limited to:`,
      benefits: [
        `Healthcare and wellness benefits`,
        `Retirement and financial protection`,
        `Employee development programs`,
      ],
    },

    author: {
      name: `Mark Dino Pelonia`,
      position: `Web Developer`,
      email: `markdinopelonia447@gmail.com`,
      contact: `(+63) 946 290 9678`,
      website: `https://markdino.github.io/portfolio`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/chaardivari_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
