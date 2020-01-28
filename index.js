
function detectLimit ({element, vertical, horizontal}) {
  let el = $(element)[0];
  if (!el) {
    console.error("Element not found", element);
    return
  }
  if(horizontal && typeof horizontal !== 'function') {
    console.error('horizontal is not a funcion')
    return;
  }
  if(vertical && typeof vertical !== 'function') {
    console.error('vertical is not a funcion')
    return;
  }

  el.addEventListener('scroll', function (e) {
    if(horizontal) horizontalScroll(el, horizontal)
    if(vertical) verticalScroll(el, vertical)
  })
}

function verticalScroll (el, callback) {
  el.scrollTop === 0 ? callback ('top') : callback ('v_center');
  el.scrollHeight <= el.scrollTop + el.clientHeight ? callback ('bottom') : callback ('v_center');
}

function horizontalScroll (el, callback) {
  el.scrollLeft === 0 ? callback ('left') : callback ('h_center');
  el.scrollWidth <= el.scrollLeft + el.clientWidth ? callback ('right') : callback ('h_center');
}

exports.detectLimit = detectLimit;