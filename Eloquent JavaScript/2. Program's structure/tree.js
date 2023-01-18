const treelog = function (char) {
  let tree = "";

  for (let i = 0; i < 7; i++) {
    tree += char;
    console.log(tree);
  }
};

treelog("AAA");
