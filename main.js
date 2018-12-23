var myCounter = counter();
var mySecondCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(mySecondCounter());
var compare = comparePassword('password');
console.log(compare('wrong-password'));
console.log(compare('password'));
console.log(compare('wrong-password'));
console.log(compare('wrong-password'));
console.log(compare('password'));
console.log(compare('wrong-password'));
console.log(compare('wrong-password'));
var multiA = multi(3);
var multiB = multi(4);
var multiC = multi(5);
console.log(multiA(5));
console.log(multiA(3));
console.log(multiB(10));
console.log(multiB(1));
console.log(multiA(10));
console.log(multiA(1));
var objectCount = objectCounter();
console.log(objectCount.next());
console.log(objectCount.next());
console.log(objectCount.next());
console.log(objectCount.next());

var form = {
  name: {
    value: 'Masha',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  },
  secondName: {
    value: 'Coleman',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
  dogName: {
    value: 'Ronny',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
};
var secondForm = {
  name: {
    value: 'Masha',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
  email: {
    value: '',
    validationRules: {
      email: false, /* set false*/
      required: false, /* set false*/
    },
    errorMessage: '',
  },
  dogName: {
    value: 'Ronny',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
};
var thirdForm = {
  name: {
    value: 'Masha',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  },
  secondName: {
    value: 'Li',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
  dogName: {
    value: 'Ronny',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
};
var valid = validation(form);
var valid1 = validation(secondForm);
var valid2 = validation(thirdForm);
console.log(valid);
console.log(valid1);
console.log(valid2);
console.log(form);
console.log(secondForm);
console.log(thirdForm);

function counter() {
  var x = 1;

  return function() {
    return x++;
  };
}

function comparePassword(password) {
  var numberAttempts = 0;

  return function(check) {
    if (check === password) {
      return true;
    } else {
      numberAttempts++;
      if (numberAttempts === 5) {
        return 'сообщение с предупреждением';
      }

      return false;
    }
  };
}

function multi(a) {
  return function(b) {
    return a * b;
  };
}

function objectCounter() {
  var x = 1;

  return {
    next: function() {
      return x++;
    }
  };
}

var checkFood = function(food) {
  if (food === 'cookies') {
    console.log('More please :)');
  } else {
    console.log('Some food please :)');
  }
};

checkFood('cookies'); /*expression */

function validation(form) {  
  var result = [];
  var validationObj = {
    min: function(inputName) {
      var res = true;
      if (inputName.value.length <= inputName.validationRules.minLength) {
        inputName.errorMessage = 'This field must be at least ' + inputName.validationRules.minLength + ' letters';
        res = false;        
      }

      return res;
    },
    max: function(inputName) {
      var res = true;
      if (inputName.value.length >= inputName.validationRules.maxLength) {
        inputName.errorMessage = 'This field must be no more ' + inputName.validationRules.maxLength + ' letters';
        res = false;
      }

      return res;
    },
    require: function(inputName) {
      var res = true;
      if (inputName.validationRules.required && (inputName.value.length === 0 || inputName.value === ' ')) {
        inputName.errorMessage = 'This field required';
        res = false;
      }

      return res;
    },
    validationEmail: function(inputName) {
      var inputNameValue = inputName.value;      
      var res = 0;
      if (inputName.validationRules.email && inputNameValue !== ' ' && inputNameValue !== '') {        
        for (var i = 0; i < inputNameValue.length; i++) {
          if ('@' === inputNameValue[i] && (i > 1 < inputNameValue.length - 5)) {
            res++;
          }
          if ('.' === inputNameValue[i] && (i > inputNameValue.length - 7)) {
            res++;
          }
        }
        if (!(res === 2)) {
          inputName.errorMessage = 'The email address is not correct email address!';

          return false;
        }
      }
      return true;
    },
    isPositive: function(item) {
    return item === true;
    },
  };

  var i = 0;

  for(var key in form) {
    result[i++] = true;
    if(form[key].validationRules.minLength) {
      if(!(validationObj.min(form[key]))) {
        result[result.length - 1] = false;
      }
    }    
    if(form[key].validationRules.maxLength) {
      if(!(validationObj.max(form[key]))) {
        result[result.length - 1] = false;
      }
    }
    if(form[key].validationRules.required) {
      if(!(validationObj.require(form[key]))) {
        result[result.length - 1] = false;
      }
    }
    if(form[key].validationRules.email) {      
      if(!(validationObj.validationEmail(form[key]))) {
        result[result.length - 1] = false;
      }
    }
  }

  return result.every(validationObj.isPositive);
}



  
