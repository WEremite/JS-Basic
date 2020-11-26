/*
You will be provided with an initial array (the first argument in the destroyer function),
 followed by one or more arguments. Remove all elements from the initial array that are of
  the same value as these arguments.

Note
You have to use the arguments object.

 */
function destroyer(arr) {
    const args = [...arguments];
    let args1 = args[0];
    let args2 = args.slice(1);
    let result = [];
    for (let i = 0; i < args1.length; i++) {
        if (args2.includes(args1[i]) === false) {
            result.push(args1[i]);
        }
    }

    console.log(result)
    return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
destroyer([3, 5, 1, 2, 2], 2, 3, 5)
destroyer([2, 3, 2, 3], 2, 3)
destroyer(["tree", "hamburger", 53], "tree", 53)
destroyer(["possum", "trollo", 12, "safari", "hotdog",
    92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht",
    "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")

/*
//freecodecamp variant
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
 */