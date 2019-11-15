let x_pos, y_pos = 0;

function detectLimit ({element, vertical, horizontal}) {
  let el = $(element)[0];
  if (!el) {
    console.error("Element not found", element);
    return
  }

  el.addEventListener('scroll', function (e) {
    if (horizontal) {
      typeof horizontal === 'function' ? horizontalScroll(el, horizontal) : console.error('horizontal is not a funcion')
    }
    if (vertical) {
      typeof vertical === 'function' ? verticalScroll(el, vertical) : console.error('vertical is not a funcion')
    }
  })
}

function verticalScroll (el, callback) {
  if(y_pos !== el.scrollTop){
    y_pos = el.scrollTop;
    if(el.scrollTop === 0) callback ('top');
    else if(el.scrollTop + el.clientHeight >= el.scrollHeight) callback ('bottom')
  }
}

function horizontalScroll (el, callback) {
  if(x_pos !== el.scrollLeft){
    x_pos = el.scrollLeft;
    if(el.scrollLeft === 0) callback ('left');
    else if(el.scrollLeft + el.clientWidth >= el.scrollWidth) callback ('right')
  }
}

exports.detectLimit = detectLimit;