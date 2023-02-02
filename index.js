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

// console.log(
//   "test1",
//   someMysticMethod("u 1uuui yoi777i7u t8e7re uoy7o8p81") ===
//     someMysticMethod2("u 1uuui yoi777i7u t8e7re uoy7o8p81")
// );

// console.log(
//   "test2",
//   someMysticMethod("aa aa55aaa 7a7aa 000a") ===
//     someMysticMethod2("aa aa55aaa 7a7aa 000a")
// );

// console.log("test3", someMysticMethod("") === someMysticMethod2(""));
// console.log("test4", someMysticMethod(" ") === someMysticMethod2(" "));
// console.log(
//   "test5",
//   someMysticMethod(" /ipokg66rgbrrje6666rbgo6uer rgurjr 8rghkberg6erggg") ===
//     someMysticMethod2(" /ipokg66rgbrrje6666rbgo6uer rgurjr 8rghkberg6erggg")
// );
// console.log(
//   "test6",
//   someMysticMethod(" /6uer yu r6 8rg 90jj op0 po99 5un m8") ===
//     someMysticMethod2(" /6uer yu r6 8rg 90jj op0 po99 5un m8")
// );
// console.log(
//   "test7",
//   someMysticMethod("a aa55 777 7a7aa 000a") ===
//     someMysticMethod2("a aa55 777 7a7aa 000a")
// );

// console.log("test8", someMysticMethod("777") === someMysticMethod2("777"));
// console.log("test9", someMysticMethod("") === someMysticMethod2(""));
// console.log("test10", someMysticMethod("a") === someMysticMethod2("a"));
// console.log(
//   "test11",
//   someMysticMethod("88 8 888") === someMysticMethod2("88 8 888")
// );
// console.log(
//   "test12",
//   someMysticMethod("aa 888") === someMysticMethod2("aa 888")
// );
// console.log("test13", someMysticMethod("a 888") === someMysticMethod2("a 888"));
// console.log("test14", someMysticMethod("abc") === someMysticMethod2("abc"));
// console.log("test15", someMysticMethod("a a") === someMysticMethod2("a a"));
// console.log("test16", someMysticMethod("a abc") === someMysticMethod2("a abc"));

function validAnagram(param1, param2) {
  // add whatever parameters you deem necessary - good luck!
  //
  if (param1.length !== param2.length) return false;

  const hashMap1 = getHashmap(param1);
  const hashMap2 = getHashmap(param2);

  for (const keyLetter in hashMap1) {
    if (!hashMap2[keyLetter] || hashMap2[keyLetter] !== hashMap1[keyLetter])
      return false;
  }

  return true;
}

const getHashmap = (string) => {
  const hashMap = {};
  for (const letter of string) {
    hashMap[letter] = ++hashMap[letter] || 1;
  }

  return hashMap;
};

function countUniqueValues(array) {
  if (array.length === 0) return 0;

  let startPointer = 0;

  for (let endPointer = 1; endPointer < array.length; endPointer++) {
    if (array[startPointer] !== array[endPointer]) {
      startPointer++;
      array[startPointer] = array[endPointer];
    }
  }

  return startPointer + 1;
}
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    console.log("min-max", min, max);
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    console.log("middle", middle);

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

//console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 67], 3));

function averagePair(array, value) {
  if (array.length < 2) return false;

  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const average = (array[start] + array[end]) / 2;
    //console.log("average", average);
    if (average == value) {
      console.log("here it is true");
      return true;
    } else if (average < value) {
      start++;
    } else {
      end--;
    }
  }

  return false;
  // add whatever parameters you deem necessary - good luck!
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

function isSubsequence(substring, seacrhString) {
  let coincidenceAmount = 0;

  // while (indexPointer < seacrhString.length) {
  //   if (substring[coincidenceAmount] === seacrhString[indexPointer])
  //     coincidenceAmount++;
  //   if (coincidenceAmount === substring.length) return true;
  //   indexPointer++;
  // }
  for (
    let indexPointer = 0;
    indexPointer < seacrhString.length;
    indexPointer++
  ) {
    if (substring[coincidenceAmount] === seacrhString[indexPointer])
      coincidenceAmount++;
    if (coincidenceAmount === substring.length) return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"), "// true");
console.log(isSubsequence("sing", "sting"), "// true");
console.log(isSubsequence("abc", "abracadabra"), "// true");
console.log(isSubsequence("abc", "acb"), "// false (order matters)");
