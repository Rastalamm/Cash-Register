window.cashMoney = (function() {
  'use strict';

    var accessor = {
      output : document.getElementById('output'),
      clear : document.getElementById('clear'),
      getBalance : document.getElementById('getBalance'),
      depositCash : document.getElementById('depositCash'),
      withdrawCash : document.getElementById('withdrawCash')
    };

accessor.clear.addEventListener("click", function(){
    accessor.output.innerHTML = '';
    calculatorModule.clearMemory;
  });

accessor.getBalance.addEventListener("click", function(){
    accessor.output.innerHTML = calculatorModule.getTotal();
  });

accessor.depositCash.addEventListener("click", function(){
    calculatorModule.load(Number(accessor.output.innerHTML));
  });

accessor.withdrawCash.addEventListener("click", function(){
    console.log(calculatorModule.getTotal());
    calculatorModule.subtract(Number(accessor.output.innerHTML));
  });




var calculatorModule = (function(){
      var memory = 0;
      var total = 0;

      return {
        load : _validate(_load),
        getTotal : _getTotal,
        recallMemory : _recallMemory,
        saveMemory : _saveMemory,
        clearMemory : _clearMemory,
        subtract : _subtract
      };


    /**
     * sets the `total` to the number passed in
     * @param  { Number } x
     * @return { Number }    current total
     */
     function _load(memory){
      total += memory;
      return total;
    }

    /**
     * Return the value of `total`
     * @return { Number }
     */
     function _getTotal(){
      return total;
     }

    /**
     * Return the value stored at `memory`
     * @return { Number }
     */
     function _recallMemory(){
      return memory;
     }

    /**
     * Stores the value of `total` to `memory`
     */
     function _saveMemory(){
      memory = total;
     }

    /**
     * Clear the value stored at `memory`
     */
     function _clearMemory(){
      memory = 0;
      //memory =undefined;
     }

    /**
     * Subtracts the value passed in from `total`
     * @param  { Number } x
     */
     function _subtract(memory){
      total -= memory;
     }

    /**
     * Validation
     */
     function _validate(calculatorModule){
      return function(memory){
        if (typeof memory != 'number'){
          return "Error! I need to be a number";
        }else{
          return calculatorModule(memory);
        }
      };
     }


  })();

/*

  var display = function(){

    return {
      clear : _clear,
      append : _append
    };

    function _clear(){
      input = [];
    }

    function _append(){

    }

  };

  var clear = function(){

    return{
      removeAll : _removeAll
    };

    function _removeAll(){

    }

  };

  var getBalance = function(){

    return {

    };

    function (){

    };
  };

  var depositCash = function(){

    return {

    };

    function (){

    };
  };

  var withdrawCash = function(){

    return {

    };

    function (){

    };
  };
*/

})();