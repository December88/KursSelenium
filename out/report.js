$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/cucumber/features/mystore_adding_new_address");
formatter.feature({
  "line": 1,
  "name": "adding new address",
  "description": "",
  "id": "adding-new-address",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user can create new address",
  "description": "",
  "id": "adding-new-address;user-can-create-new-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser to MyStore page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user completes \u003calias\u003e, \u003caddress\u003e, \u003ccity\u003e, \u003cpostal_code\u003e and \u003cphone\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "submits new address",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "adding-new-address;user-can-create-new-address;",
  "rows": [
    {
      "cells": [
        "alias",
        "address",
        "city",
        "postal_code",
        "phone"
      ],
      "line": 25,
      "id": "adding-new-address;user-can-create-new-address;;1"
    },
    {
      "cells": [
        "Art1",
        "Biala",
        "Gdansk",
        "80-288",
        "0505050505"
      ],
      "line": 26,
      "id": "adding-new-address;user-can-create-new-address;;2"
    },
    {
      "cells": [
        "Art2",
        "Czarna",
        "Krakow",
        "66-666",
        "5555555"
      ],
      "line": 27,
      "id": "adding-new-address;user-can-create-new-address;;3"
    },
    {
      "cells": [
        "Art3",
        "Ciasna",
        "Warsaw",
        "55-555",
        "444444"
      ],
      "line": 28,
      "id": "adding-new-address;user-can-create-new-address;;4"
    },
    {
      "cells": [
        "Art4",
        "Zgnila",
        "Gdynia",
        "44-444",
        "454578812"
      ],
      "line": 29,
      "id": "adding-new-address;user-can-create-new-address;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "user can create new address",
  "description": "",
  "id": "adding-new-address;user-can-create-new-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser to MyStore page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user completes Art1, Biala, Gdansk, 80-288 and 0505050505",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "submits new address",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreAddNewAddress.openMyStorePage()"
});
formatter.result({
  "duration": 8000165599,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 38001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "grudzien.artur@gmail.com",
      "offset": 45
    },
    {
      "val": "123456",
      "offset": 74
    }
  ],
  "location": "MyStoreAddNewAddress.userLogin(String,String)"
});
formatter.result({
  "duration": 1043680500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 401825800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 422975901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Art1",
      "offset": 15
    },
    {
      "val": "Biala",
      "offset": 21
    },
    {
      "val": "Gdansk",
      "offset": 28
    },
    {
      "val": "80-288",
      "offset": 36
    },
    {
      "val": "0505050505",
      "offset": 47
    }
  ],
  "location": "MyStoreAddNewAddress.completeFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 466959700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 472013001,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.closeBrowser()"
});
formatter.result({
  "duration": 765573200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "user can create new address",
  "description": "",
  "id": "adding-new-address;user-can-create-new-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser to MyStore page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user completes Art2, Czarna, Krakow, 66-666 and 5555555",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "submits new address",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreAddNewAddress.openMyStorePage()"
});
formatter.result({
  "duration": 6534669600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 33799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "grudzien.artur@gmail.com",
      "offset": 45
    },
    {
      "val": "123456",
      "offset": 74
    }
  ],
  "location": "MyStoreAddNewAddress.userLogin(String,String)"
});
formatter.result({
  "duration": 973411501,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 344970400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 397543800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Art2",
      "offset": 15
    },
    {
      "val": "Czarna",
      "offset": 21
    },
    {
      "val": "Krakow",
      "offset": 29
    },
    {
      "val": "66-666",
      "offset": 37
    },
    {
      "val": "5555555",
      "offset": 48
    }
  ],
  "location": "MyStoreAddNewAddress.completeFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 447605199,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 28801,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 552808900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 22800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.closeBrowser()"
});
formatter.result({
  "duration": 674379499,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "user can create new address",
  "description": "",
  "id": "adding-new-address;user-can-create-new-address;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser to MyStore page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user completes Art3, Ciasna, Warsaw, 55-555 and 444444",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "submits new address",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreAddNewAddress.openMyStorePage()"
});
formatter.result({
  "duration": 6652673700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "grudzien.artur@gmail.com",
      "offset": 45
    },
    {
      "val": "123456",
      "offset": 74
    }
  ],
  "location": "MyStoreAddNewAddress.userLogin(String,String)"
});
formatter.result({
  "duration": 1065682300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 365556100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 359153100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Art3",
      "offset": 15
    },
    {
      "val": "Ciasna",
      "offset": 21
    },
    {
      "val": "Warsaw",
      "offset": 29
    },
    {
      "val": "55-555",
      "offset": 37
    },
    {
      "val": "444444",
      "offset": 48
    }
  ],
  "location": "MyStoreAddNewAddress.completeFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 459629099,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 21999,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 513090200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.closeBrowser()"
});
formatter.result({
  "duration": 646333699,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "user can create new address",
  "description": "",
  "id": "adding-new-address;user-can-create-new-address;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser to MyStore page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user completes Art4, Zgnila, Gdynia, 44-444 and 454578812",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "submits new address",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user checks for correct information",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreAddNewAddress.openMyStorePage()"
});
formatter.result({
  "duration": 6879499799,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "grudzien.artur@gmail.com",
      "offset": 45
    },
    {
      "val": "123456",
      "offset": 74
    }
  ],
  "location": "MyStoreAddNewAddress.userLogin(String,String)"
});
formatter.result({
  "duration": 929120500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 346480800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 353492300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Art4",
      "offset": 15
    },
    {
      "val": "Zgnila",
      "offset": 21
    },
    {
      "val": "Gdynia",
      "offset": 29
    },
    {
      "val": "44-444",
      "offset": 37
    },
    {
      "val": "454578812",
      "offset": 48
    }
  ],
  "location": "MyStoreAddNewAddress.completeFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 465548800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 493392801,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.closeBrowser()"
});
formatter.result({
  "duration": 1134441100,
  "status": "passed"
});
});