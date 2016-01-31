// http://stackoverflow.com/questions/8111094/cross-browser-javascript-function-to-find-actual-position-of-an-element-in-page
module.exports = function(obj) {
  var curleft = 0
  var curtop = 0

  if (obj && obj.offsetParent) {
    do {
      curleft += obj.offsetLeft
      curtop += obj.offsetTop

      obj = obj.offsetParent
    } while (obj)
  }

  return {
    left: curleft,
    top: curtop,
  }
}
