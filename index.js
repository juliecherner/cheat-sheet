const someMysticMethod = (param) => {
  if (!param) {
    console.log("Error: param is empty string/type defined as a string");
    return "";
  }

  if (!param.includes(" ")) {
    return param.charAt(0).toUpperCase();
  }

  let rgx = new RegExp(/(\p{L}{2,})/, "gu");
  const filteredParamItems = param.match(rgx) || [];
  console.log("match case", filteredParamItems);
  switch (filteredParamItems.length) {
    case 0:
      return "";
    case 1:
      return filteredParamItems[0].charAt(0).toUpperCase();
    default:
      return (
        filteredParamItems[0].charAt(0) +
        filteredParamItems[filteredParamItems.length - 1].charAt(0)
      ).toUpperCase();
  }
};

const someMysticMethod2 = (param) => {
  let resultVal;

  if (!param) {
    console.log("Error: some error text...");
    return "";
  }
  const splattedParam = param.split(" ");
  const amount = splattedParam.length;

  if (amount > 1) {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    resultVal = [...param.matchAll(rgx)] || [];
    console.log(
      "result from original func",
      resultVal.map((val) => val[0])
    );

    resultVal = (resultVal.shift()?.[1] || "") + (resultVal.pop()?.[1] || "");
  } else {
    if (param.length > 0) {
      resultVal = param.charAt(0);
    } else {
      resultVal = "";
    }
  }

  return resultVal.toUpperCase();
};

console.log(
  "test1",
  someMysticMethod("u 1uuui yoi777i7u t8e7re uoy7o8p81") ===
    someMysticMethod2("u 1uuui yoi777i7u t8e7re uoy7o8p81")
);

console.log(
  "test2",
  someMysticMethod("aa aa55aaa 7a7aa 000a") ===
    someMysticMethod2("aa aa55aaa 7a7aa 000a")
);

console.log("test3", someMysticMethod("") === someMysticMethod2(""));
console.log("test4", someMysticMethod(" ") === someMysticMethod2(" "));
console.log(
  "test5",
  someMysticMethod(" /ipokg66rgbrrje6666rbgo6uer rgurjr 8rghkberg6erggg") ===
    someMysticMethod2(" /ipokg66rgbrrje6666rbgo6uer rgurjr 8rghkberg6erggg")
);
console.log(
  "test6",
  someMysticMethod(" /6uer yu r6 8rg 90jj op0 po99 5un m8") ===
    someMysticMethod2(" /6uer yu r6 8rg 90jj op0 po99 5un m8")
);
console.log(
  "test7",
  someMysticMethod("a aa55 777 7a7aa 000a") ===
    someMysticMethod2("a aa55 777 7a7aa 000a")
);

console.log("test8", someMysticMethod("777") === someMysticMethod2("777"));
console.log("test9", someMysticMethod("") === someMysticMethod2(""));
console.log("test10", someMysticMethod("a") === someMysticMethod2("a"));
console.log(
  "test11",
  someMysticMethod("88 8 888") === someMysticMethod2("88 8 888")
);
console.log(
  "test12",
  someMysticMethod("aa 888") === someMysticMethod2("aa 888")
);
console.log("test13", someMysticMethod("a 888") === someMysticMethod2("a 888"));
console.log("test14", someMysticMethod("abc") === someMysticMethod2("abc"));
console.log("test15", someMysticMethod("a a") === someMysticMethod2("a a"));
console.log("test16", someMysticMethod("a abc") === someMysticMethod2("a abc"));

//console.log("printed result 2", someMysticMethod("hi you there uouo"));
////console.log("printed result 3", someMysticMethod("you there uouo o"));
//console.log("printed result 4", someMysticMethod("you there uouo oo"));
