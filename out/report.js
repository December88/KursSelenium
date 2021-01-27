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
formatter.examples({
  "line": 19,
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
      "line": 20,
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
      "line": 21,
      "id": "adding-new-address;user-can-create-new-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
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
formatter.match({
  "location": "MyStoreAddNewAddress.openMyStorePage()"
});
formatter.result({
  "duration": 7878319500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.openLoginPage()"
});
formatter.result({
  "duration": 27800,
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
  "duration": 939927400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.goToAddress()"
});
formatter.result({
  "duration": 362008000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.clickAddAddressButton()"
});
formatter.result({
  "duration": 400250800,
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
  "duration": 5467623100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.checkInputsValue()"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddNewAddress.submit()"
});
formatter.result({
  "duration": 445945100,
  "status": "passed"
});
});