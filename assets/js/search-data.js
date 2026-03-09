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
  },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
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
            window.location.href = "/https:/github.com/act-compiler/act";
          },
        },{id: "tutorials-act-end-to-end-compiler-infrastructure-for-emerging-ai-accelerators",
          title: 'ACT: End-to-End Compiler Infrastructure for Emerging AI Accelerators',
          description: "",
          section: "Tutorials",handler: () => {
              window.location.href = "/tutorials/asplos2026/";
            },},{id: "tutorials-end-to-end-compiler-infrastructure-for-emerging-tensor-accelerators",
          title: 'End-to-End Compiler Infrastructure for Emerging Tensor Accelerators',
          description: "",
          section: "Tutorials",handler: () => {
              window.location.href = "/tutorials/micro2025/";
            },},{id: "tutorials-end-to-end-compiler-infrastructure-for-emerging-tensor-accelerators",
          title: 'End-to-End Compiler Infrastructure for Emerging Tensor Accelerators',
          description: "",
          section: "Tutorials",handler: () => {
              window.location.href = "/tutorials/splash2025/";
            },},];
