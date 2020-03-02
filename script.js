const toplevel = document.getElementById("toplevel")
alert()
console.log(toplevel)
if (toplevel === undefined || toplevel === null) {
  console.log(`Getting toplevel returned ${toplevel}`)
  document.write(`<div style='width:99%;height:99%;background-color: white;padding:8px'><span class="text-warning">Unable to locate element "toplevel". Some functions may not work properly</span><br><span class="highlight-info">Expected Type: div<br>Got: ${toplevel}</span></div>`)
}

function r(url) {
  if (url === undefined) {
    var url = "index.html"
  }
  window.location.href = url
}

function fetch(url) {
  if (url === undefined) {
    var url = "https://ptb.discordapp.com/api/guilds/504504527093891074/widget.json"
  }

}
