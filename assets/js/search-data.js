// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-tutorials",
          title: "Tutorials",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tutorials/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-github",
          title: "GitHub",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-our-paper-titled-taidl-tensor-accelerator-isa-definition-language-with-auto-generation-of-scalable-test-oracles-has-been-accepted-at-micro-2025-tada",
          title: 'Our paper titled TAIDL: Tensor Accelerator ISA Definition Language with Auto-generation of Scalable...',
          description: "",
          section: "News",},{id: "news-today-tutorial-6-at-icfp-splash-2025-see-you-there-we-are-conducting-a-hands-on-tutorial-on-the-act-ecosystem-at-icfp-splash-2025-in-singapore",
          title: '[Today!] Tutorial 6 at ICFP/SPLASH 2025 - see you there! We are conducting...',
          description: "",
          section: "News",},{id: "news-upcoming-we-are-conducting-a-hands-on-tutorial-on-the-act-ecosystem-at-micro-2025-in-seoul-south-korea",
          title: '[Upcoming] We are conducting a hands-on tutorial on the ACT Ecosystem at MICRO...',
          description: "",
          section: "News",},{id: "tutorials-micro-2025",
          title: 'MICRO 2025',
          description: "In Seoul, South Korea on Oct 19, 2025",
          section: "Tutorials",handler: () => {
              window.location.href = "/tutorials/micro2025/";
            },},{id: "tutorials-splash-2025",
          title: 'SPLASH 2025',
          description: "In Singapore on Oct 12, 2025",
          section: "Tutorials",handler: () => {
              window.location.href = "/tutorials/splash2025/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
