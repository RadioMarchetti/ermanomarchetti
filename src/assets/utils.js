// var testDomains = [
//   "ermanomarchetti.web.app",
//   "localhost",
//   "192.168.0.16"
// ]

export function check() {
  if (window.location.port !== "3000") {
    if (window.location.hostname !== 'ermanomarchetti.web.app') {
      redirect('ermanomarchetti.web.app', true)
    }
  } else {
    localStorage.setItem('test', true)
  }
}

export function redirect(url, passPath) {
  if (url !== null) {
    if (passPath) {
      let info = {
        "pathname": window.location.pathname,
        "search": window.location.search,
        "hash": window.location.hash,
      }
      window.location.replace(`http://${url}${info.pathname}${info.search}${info.hash}`)
    } else {
      window.location.replace(`http://${url}`)
    }
  }
}

export function info() {
  return {
    "href": window.location.href,
    "host": window.location.host,
    "hostname": window.location.hostname,
    "port": window.location.port,
    "pathname": window.location.pathname,
    "search": window.location.search,
    "hash": window.location.hash,
  }
}

export function test() {
  return localStorage.getItem('test')
}