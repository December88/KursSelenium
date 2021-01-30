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
  "line": 7,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user completes \u003calias\u003e, \u003caddress\u003e, \u003ccity\u003e, \u003cpostal_code\u003e and \u003cphone\u003e",
  "keyword": "When "
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
  "line": 7,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
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
  "duration": 8932704900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 40100,
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
  "duration": 1026923100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 403807700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 423963700,
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
  "duration": 664365100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 653751900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 117937300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.closeBrowser()"
});
formatter.result({
  "duration": 858209600,
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
  "line": 7,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
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
  "duration": 6817827400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 37000,
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
  "duration": 1036920100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 410355100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 358501700,
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
  "duration": 501862100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 531489200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 51474300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.closeBrowser()"
});
formatter.result({
  "duration": 667681300,
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
  "line": 7,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
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
  "duration": 6643953000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 38900,
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
  "duration": 1002473700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 369394800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 369494800,
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
  "duration": 453012100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 500212000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 42470800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.closeBrowser()"
});
formatter.result({
  "duration": 657217600,
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
  "line": 7,
  "name": "user goes to login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user completes email and password boxes with grudzien.artur@gmail.com and 123456 and signs in",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user goes to Addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
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
  "duration": 6671825800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 43300,
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
  "duration": 988480400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 375206100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 540393100,
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
  "duration": 495907100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 537575700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 51147300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.closeBrowser()"
});
formatter.result({
  "duration": 664414000,
  "status": "passed"
});
});