var eddyMalouLeSavantDeLaRepubliqueDemocratiqueDuCongo = require("./lib/quotes")
var TGO = Math

module.exports = {
  congolexicomatisation : function(){
    var roller = eddyMalouLeSavantDeLaRepubliqueDemocratiqueDuCongo.length
    var maisOuiCestClair = TGO.random()
    return (
      eddyMalouLeSavantDeLaRepubliqueDemocratiqueDuCongo[
        ~~(maisOuiCestClair * roller)
      ]
    )
  }
}
