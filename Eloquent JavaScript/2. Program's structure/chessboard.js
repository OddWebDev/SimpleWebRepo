const chessboard = function (size) {
  let chessboardString = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 != 0) chessboardString += " ";

    for (let l = 0; l < 8; l++) {
      if (l % 2 == 0) chessboardString += " ";
      else chessboardString += "#";
    }
    console.log(chessboardString);
    chessboardString = "";
  }
};

chessboard(333333);
