export function theme(thm) {
  var theme = localStorage.getItem('theme')

  if (theme === "dark") {
    themeDark();
  } else if (theme === "bright") {
    themeBright();
  } else if (theme === "rm") {
    themeRM();
  } else {
    localStorage.setItem('theme', 'dark');
  }

  function themeBright() {
    // document.documentElement.style.setProperty("--main-color", "#FFCF00");
    // document.documentElement.style.setProperty("--background-color", "#f0f0f0");
    // document.documentElement.style.setProperty("--text-gray", "#737380");
    // document.documentElement.style.setProperty("--white", "#ffffff");
    // document.documentElement.style.setProperty("--red", "#ff033e");
    // document.documentElement.style.setProperty("--black", "#000000");
    // document.documentElement.style.setProperty("--border-gray", "#dcdce6");
    // document.documentElement.style.setProperty("--jean-grey", "#dcdce6");
    return;
  }

  function themeDark() {
    // document.documentElement.style.setProperty("--main-color", "#447cce");
    // document.documentElement.style.setProperty("--background-color", "#3b444b");
    // document.documentElement.style.setProperty("--bg-accent", "#484a4d");
    // document.documentElement.style.setProperty("--text-color", "#dadce1");
    // document.documentElement.style.setProperty("--bg-secondary", "#000000");
    // document.documentElement.style.setProperty("--warning-background", "#447fff");
    // document.documentElement.style.setProperty("--error", "#e32636");
    // document.documentElement.style.setProperty("--success", "#03c03c");
    // document.documentElement.style.setProperty("--important", "#2a52be");
    // document.documentElement.style.setProperty("--nav-item", "#2196f3");
    return;
  }

  function themeRM() {
    // document.documentElement.style.setProperty("--main-color", "#FFCF00");
    // document.documentElement.style.setProperty("--background-color", "#3b444b");
    // document.documentElement.style.setProperty("--text-gray", "#c0c0c0");
    // document.documentElement.style.setProperty("--white", "#000000");
    // document.documentElement.style.setProperty("--red", "#ff033e");
    // document.documentElement.style.setProperty("--black", "#ffffff");
    // document.documentElement.style.setProperty("--border-gray", "#dcdce6");
    // document.documentElement.style.setProperty("--jean-grey", "#808080");
    return;
  }

  if (thm === "dark") {
    localStorage.setItem('theme', 'dark');
    themeDark();
  } else if (thm === "bright") {
    localStorage.setItem('theme', 'bright');
    themeBright();
  }
  return;
}