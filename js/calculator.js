window.Calculator = (function() {
  'use strict';
    var accessor = {
      output : document.getElementById('output'),
      zero : document.getElementById('zero'),
      doubleZero : document.getElementById('doubleZero'),
      one : document.getElementById('one'),
      two : document.getElementById('two'),
      three : document.getElementById('three'),
      four : document.getElementById('four'),
      five : document.getElementById('five'),
      six : document.getElementById('six'),
      seven : document.getElementById('seven'),
      eight : document.getElementById('eight'),
      nine : document.getElementById('nine'),
      point : document.getElementById('point'),
      add : document.getElementById('add'),
      subtract : document.getElementById('subtract'),
      multiply : document.getElementById('multiply'),
      divide : document.getElementById('divide'),
      display : document.getElementById('display'),
      clear : document.getElementById('clear'),
      getBalance : document.getElementById('getBalance'),
      depositCash : document.getElementById('depositCash'),
      withdrawCash : document.getElementById('withdrawCash'),
      calculate : document.getElementById('calculate')
    };


  var input = [];
  var operationSelected;
  var dubs = "00";

  accessor.point.addEventListener("click", function(){
    accessor.output.innerHTML += '.';
    input.push('.');
  });

  accessor.zero.addEventListener("click", function(){
    accessor.output.innerHTML += 0;
    input.push(0);
  });

  accessor.doubleZero.addEventListener("click", function(){
    accessor.output.innerHTML += dubs;
    input.push(dubs);
  });

  accessor.one.addEventListener("click", function(){
    accessor.output.innerHTML += 1;
    input.push(1);
  });

  accessor.two.addEventListener("click", function(){
    accessor.output.innerHTML += 2;
    input.push(2);
  });

  accessor.three.addEventListener("click", function(){
    accessor.output.innerHTML += 3;
    input.push(3);
  });

  accessor.four.addEventListener("click", function(){
    accessor.output.innerHTML += 4;
    input.push(4);
  });

  accessor.five.addEventListener("click", function(){
    accessor.output.innerHTML += 5;
    input.push(5);
  });

  accessor.six.addEventListener("click", function(){
    accessor.output.innerHTML += 6;
    input.push(6);
  });

  accessor.seven.addEventListener("click", function(){
    accessor.output.innerHTML += 7;
    input.push(7);
  });

  accessor.eight.addEventListener("click", function(){
    accessor.output.innerHTML += 8;
    input.push(8);
  });

  accessor.nine.addEventListener("click", function(){
    accessor.output.innerHTML += 9;
    input.push(9);
  });

  accessor.add.addEventListener("click", function(){
    accessor.output.innerHTML += ' + ';
    calculatorModule.load(Number(input.join("")));
    input = [];
    operationSelected = '+';
  });

  accessor.subtract.addEventListener("click", function(){
    accessor.output.innerHTML += ' - ';
    calculatorModule.load(Number(input.join("")));
    input = [];
    operationSelected = '-';
  });

  accessor.multiply.addEventListener("click", function(){
    accessor.output.innerHTML += ' * ';
    calculatorModule.load(Number(input.join("")));
    input = [];
    operationSelected = '*';
  });

  accessor.divide.addEventListener("click", function(){
    accessor.output.innerHTML += ' / ';
    calculatorModule.load(Number(input.join("")));
    input = [];
    operationSelected = '/';
  });

  accessor.calculate.addEventListener('click', function(){
    if(operationSelected){
    switch(operationSelected){
      case '+' :
        calculatorModule.add(Number(input.join("")));
        input = [];
        input.push(calculatorModule.getTotal());
        break;
      case '-' :
        calculatorModule.subtract(Number(input.join("")));
        input = [];
        input.push(calculatorModule.getTotal());
        break;
      case '*' :
        calculatorModule.multiply(Number(input.join("")));
        input = [];
        input.push(calculatorModule.getTotal());
        break;
      case '/' :
        calculatorModule.divide(Number(input.join("")));
        input = [];
        input.push(calculatorModule.getTotal());
        break;
    }

  }

  var finaltotal = calculatorModule.getTotal();
  accessor.output.innerHTML = finaltotal;

});

    var calculatorModule = (function(){
      var memory = 0;
      var total = 0;

      return {
        load : _validate(_load),
        getTotal : _getTotal,
        add : _validate(_add),
        subtract : _validate(_subtract),
        multiply : _validate(_multiply),
        divide : _validate(_divide),
        recallMemory : _recallMemory,
        saveMemory : _saveMemory,
        clearMemory : _clearMemory
      };


    /**
     * sets the `total` to the number passed in
     * @param  { Number } x
     * @return { Number }    current total
     */
     function _load(memory){
      total = memory;
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
     * Sums the value passed in with `total`
     * @param { Number } x
     */
     function _add(memory){
      total += memory;
     }

    /**
     * Subtracts the value passed in from `total`
     * @param  { Number } x
     */
     function _subtract(memory){
      total -= memory;
     }

    /**
     * Multiplies the value by `total`
     * @param  { Number } x
     */
     function _multiply(memory){
      total *= memory;
     }

    /**
     * Divides the value passing in by `total`
     * @param  { Number } x
     */
     function _divide(memory){
      total /= memory;
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


})();