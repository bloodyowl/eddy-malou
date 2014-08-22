var tape = require("tape")
var eddyMalou = require("..")

tape("congolexicomatisation", function(test){
  var length = 50
  while(--length > 0) {
    test.equal(typeof eddyMalou.congolexicomatisation(), "string")
  }
  test.end()
})
