const toplevel = document.getElementById("toplevel")
if (toplevel === undefined || toplevel === null) {
  console.log(`Getting toplevel returned ${toplevel}`)
  var elem = document.createElement("DIV")
  elem.style = "width: 99%;padding: 10px;height: 25%;font-family: monospace"
  elem.innerHTML = `<span class="text-warning">Unable to locate element "toplevel". Some functions may not work properly</span><br><span class="highlight-info">Expected Type: div<br>Got: ${elem}</span>`
}

function r(url) {
  if (url === undefined) {
    var url = "index.html"
  }
  window.location.href = url
}

function fetch(url) {}
  if (url === undefined) {
    var url = "https://ptb.discordapp.com/api/guilds/504504527093891074/widget.json"
  }

}
