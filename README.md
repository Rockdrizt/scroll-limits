# scroll-limits

### Detect when a scroll  element reaches its limit
Note: Jquery needed

# Install
`npm install scroll-limits`

# Use
```javascript
  // import module
  import scrollLimits from 'scroll-limits';
  
  //OPTIONS
  let options = {
    /*
      Element to detect scroll behavior. 
      It could be id, class, tag or any Jquery selector. 
      It takes the first element if there is more than one
    */
    element: String,
    /*
      Fuction invoqued when the scroll reach the top or bottom limit.
      Returns the limit as a string 'top', 'bottom' or 'v_center
    */
    vertical: Function,
    /*
      Fuction invoqued when the scroll reach the left or right limit.
      Returns the limit as a string 'left', 'right' or 'h_center'
    */
    horizontal: Function
  }
  
  //execute detecLimit function passing the options parameter
  scrollLimits.detectLimit(options)
```

# Example
```javascript
  import scrollLimits from 'scroll-limits';
  
  scrollLimits.detectLimit({
    element: '#element-to-scroll',
    vertical: function (limit) {
      console.log(limit) // 'top', 'bottom' or 'v_center'
    },
    horizontal: function (limit) {
      console.log(limit) // 'left', 'right' or 'h_center'
    },
  })
  
  scrollLimits.detectLimit({
    element: '.elements', // detect the behavior of the first element found
    vertical: (limit) => { console.log(limit) }, // 'top', 'bottom' or 'v_center'
    horizontal: (limit) => { console.log(limit) }, // 'left', 'right' or 'h_center'
  })
```
