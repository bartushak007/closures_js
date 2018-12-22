function counter() {
  var x = 1;

  return function() {
    return x++;
  };
}

var myCounter = counter();
var mySecondCounter = counter();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(mySecondCounter());

function comparePassword(password) {
  var numberAttempts = 0;
  return function(check) {
    if (check === password) {
      return true;
    } else {
      numberAttempts++;
      if (numberAttempts === 5) {
        return "сообщение с предупреждением";
      }

      return false;
    }
  };
}

var compare = comparePassword("password");
console.log(compare("wrong-password"));
console.log(compare("password"));
console.log(compare("wrong-password"));
console.log(compare("wrong-password"));
console.log(compare("password"));
console.log(compare("wrong-password"));
console.log(compare("wrong-password"));

function multi(a) {
  return function(b) {
    return a * b;
  };
}

var multiA = multi(3);
var multiB = multi(4);
var multiC = multi(5);

console.log(multiA(5));
console.log(multiA(3));
console.log(multiB(10));
console.log(multiB(1));
console.log(multiA(10));
console.log(multiA(1));

function objectCounter() {
  var x = 1;

  return {
    next: function() {
      return x++;
    }
  };
}
var objectCount = objectCounter();
console.log(objectCount.next());
console.log(objectCount.next());
console.log(objectCount.next());
console.log(objectCount.next());

var checkFood = function(food) {
  if (food === "cookies") {
    console.log("More please :)");
  } else {
    console.log("Some food please :)");
  }
};

checkFood("cookies");

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
};

function validation(form) {
  return {
    validationName: function(formName) {
      var formNameValue = formName.value;
      var min = formName.validationRules.minLength;
      var max = formName.validationRules.maxLength;
      var require = formName.validationRules.required;
      var res = true;
      if (require && formNameValue.length === 0) {
        formName.errorMessage = "This field required";
        res = false;
      } else if (require && formNameValue.length < min) {
        formName.errorMessage =
          "This field must be at least " + min + " letters";
        res = false;
      } else if (formNameValue.length > max) {
        formName.errorMessage =
          "This field must be no more " + max + " letters";
        res = false;
      }
      return res;
    },
    validationEmail: function(formEmail) {
      var formEmailValue = formEmail.value;
      var require = formEmail.validationRules.required;
      var res = 0;
      if (require) {
        for (var i = 0; i < formEmailValue.length; i++) {
          if ("@" === formEmailValue[i] && i > 0 < formEmailValue.length - 5) {
            res++;
          }
          if ("." === formEmailValue[i] && i > formEmailValue.length - 7) {
            res++;
          }
        }
        if (!(res === 2)) {
          formEmail.errorMessage =
            "The email address is not correct email address!"; formEmail.email = false;

          return false;
        }
      }
      return true;
    }
  };
}
var valid = validation(form);

console.log(valid.validationEmail(form.email));
console.log(valid.validationName(form.name));



  
