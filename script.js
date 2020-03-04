// Get ERROR system
 const toplevel = document.getElementById("toplevel")
if (toplevel === undefined || toplevel === null) {
  console.log(`Getting toplevel returned ${toplevel}`)
  document.write(`<div style='width:99%;height:99%;background-color: white;padding:8px'><span class="text-warning">Unable to locate element "toplevel". Some functions may not work properly</span><br><span class="highlight-info">Expected Type: div<br>Got: ${toplevel}</span></div>`)
}

// check if consent
const data = window.localStorage.getItem("passed")
console.log(data)
if (data != 200) {
  const OK = confirm("This website contains medical information and some content some viewers may want to keep descreet. Please ensure you are in a private" +
                    " area where nobody else can see your screen (unless they are aware of the medical conditions) before accessing this site. If you" +
                    " do not know what \"Incontinence\" is, or \"Nocternal Enuresis\", this is not the page for you.\n\nTo continue loading, " +
                  "press \"OK\". otherwise, press \"cancel\" to go back.")
  if (OK === true) {
    localStorage.setItem("passed", 200)
  }
  else {
    window.history.back()
  }
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

function delete_element(name) {
  const element = document.getElementById(name)
  if(element===null) {
    throw new ValueError(`Element with name ${name} not found (script.js)`)
  }
  else{
    element.remove()
    return true
  }
}

function verify() {
  var storage = window.localStorage
  const passed = storage.getItem("passed")
  if (passed === 200) {
    return true
  }
  else if (passed === null) {

  }

}
