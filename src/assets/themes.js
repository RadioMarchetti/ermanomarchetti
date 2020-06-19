export function theme(thm) {
  if (thm === "dark") {
    localStorage.setItem('theme', 'dark');
    themeDark();
  } else if (thm === "bright") {
    localStorage.setItem('theme', 'bright');
    themeBright();
  } else if (thm === "red") {
    localStorage.setItem('theme', 'red');
    themeRed();
  } else if (thm === "default") {
    localStorage.setItem('theme', 'default');
    themeDefault();
  }

  var theme = localStorage.getItem('theme')

  if (theme === "dark") {
    themeDark();
  } else if (theme === "bright") {
    themeBright();
  } else if (theme === "red") {
    themeRed();
  } else {
    localStorage.setItem('theme', 'default');
  }

  function themeDark() {
    document.documentElement.style.setProperty("--main-color", "#292f34");
    document.documentElement.style.setProperty("--bg-color", "#3b444b");
    document.documentElement.style.setProperty("--bg-accent", "#3b444b");
    document.documentElement.style.setProperty("--text-color", "#dadce1");
    document.documentElement.style.setProperty("--bg-secondary", "#292f34");
    document.documentElement.style.setProperty("--warning-background", "#000000");
    document.documentElement.style.setProperty("--error", "#e32636");
    document.documentElement.style.setProperty("--success", "#03c03c");
    document.documentElement.style.setProperty("--important", "#2a52be");
    document.documentElement.style.setProperty("--nav-item", "#62696f");
    document.documentElement.style.setProperty("--btn-border", "0");
    document.documentElement.style.setProperty("--color-transition", "0");
    return;
  }

  function themeBright() {
    document.documentElement.style.setProperty("--main-color", "#ffffff");
    document.documentElement.style.setProperty("--bg-color", "#e5e5e5");
    document.documentElement.style.setProperty("--bg-accent", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--bg-secondary", "#ffffff");
    document.documentElement.style.setProperty("--warning-background", "#000000");
    document.documentElement.style.setProperty("--error", "#e32636");
    document.documentElement.style.setProperty("--success", "#03c03c");
    document.documentElement.style.setProperty("--important", "#2a52be");
    document.documentElement.style.setProperty("--nav-item", "#ebebeb");
    document.documentElement.style.setProperty("--btn-border", "0");
    document.documentElement.style.setProperty("--color-transition", "0");
    return;
  }

  function themeRed() {
    document.documentElement.style.setProperty("--main-color", "#dd2c47");
    document.documentElement.style.setProperty("--bg-color", "#ff304f");
    document.documentElement.style.setProperty("--bg-accent", "#DD2C47");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--bg-secondary", "#DD2C47");
    document.documentElement.style.setProperty("--warning-background", "#000000");
    document.documentElement.style.setProperty("--error", "#e32636");
    document.documentElement.style.setProperty("--success", "#03c03c");
    document.documentElement.style.setProperty("--important", "#2a52be");
    document.documentElement.style.setProperty("--nav-item", "#c92a3d");
    document.documentElement.style.setProperty("--btn-border", "1px solid ");
    document.documentElement.style.setProperty("--color-transition", "0");
    return;
  }

  function themeDefault() {
    document.documentElement.style.setProperty("--main-color", "#447cce");
    document.documentElement.style.setProperty("--bg-color", "#3b444b");
    document.documentElement.style.setProperty("--bg-accent", "#62696f");
    document.documentElement.style.setProperty("--text-color", "#eceff1");
    document.documentElement.style.setProperty("--bg-secondary", "#292f34");
    document.documentElement.style.setProperty("--warning-background", "#447fff");
    document.documentElement.style.setProperty("--error", "#e32636");
    document.documentElement.style.setProperty("--success", "#03c03c");
    document.documentElement.style.setProperty("--important", "#2a52be");
    document.documentElement.style.setProperty("--nav-item", "#637bfe");
    document.documentElement.style.setProperty("--btn-border", "0");
    document.documentElement.style.setProperty("--color-transition", "0");
    return;
  }

  return;
}

export function selectedTheme() {
  let theme = localStorage.getItem('theme')

  return theme;
}

/* FEIO 

position: relative;
width: 360px;
height: 640px;

background: #447CCE;


ALTO CONTRASTE 

position: relative;
width: 360px;
height: 640px;

background: #FFFFFF;
text: #000000;
title: #000000;
nav: #ffffff;


PADRÃO 

position: relative;
width: 360px;
height: 640px;

background: #40514E;
color: #000000;


VERMELHO INFERNO 

position: relative;
width: 360px;
height: 640px;

background: #FF304F;
color: #000000;


AZUL HORRÍVEL 

position: relative;
width: 360px;
height: 640px;

background: #447CCE;
color: #000000;


VERMELHO INFERNO 2 - O CAPETA VOLTOU 

position: relative;
width: 360px;
height: 640px;

background: #FF304F;
color: #000000;


ESCURO 

position: relative;
width: 360px;
height: 640px;

background: #3B444B;
color: #000000;


CLARO 

position: relative;
width: 360px;
height: 640px;

background: #E5E5E5;
color: #000000;

mix-blend-mode: normal;


CLARO - TEXTO CLARO 

position: relative;
width: 360px;
height: 640px;

background: #E5E5E5;
color: #000000;

mix-blend-mode: normal;

function themeDark() {
    document.documentElement.style.setProperty("--main-color", "#447cce");
    document.documentElement.style.setProperty("--bg-color", "#3b444b");
    document.documentElement.style.setProperty("--bg-accent", "#484a4d");
    document.documentElement.style.setProperty("--text-color", "#dadce1");
    document.documentElement.style.setProperty("--bg-secondary", "#000000");
    document.documentElement.style.setProperty("--warning-background", "#447fff");
    document.documentElement.style.setProperty("--error", "#e32636");
    document.documentElement.style.setProperty("--success", "#03c03c");
    document.documentElement.style.setProperty("--important", "#2a52be");
    document.documentElement.style.setProperty("--nav-item", "#2196f3");
    return;
  }

*/