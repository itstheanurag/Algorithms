function check(boardrow: string[]): boolean {
  let mp = new Map<string, boolean>();

  for (let i = 0; i < boardrow.length; i++) {
    if (mp.has(boardrow[i])) {
      console.log(i, boardrow[i]);
      return false;
    }
    if (boardrow[i] != ".") mp.set(boardrow[i], true);
  }

  return true;
}

function checkcol(board: string[][], col: number) {
  let mp = new Map<string, boolean>();
  for (let i = 0; i < 9; i++) {
    if (mp.has(board[i][col])) {
      console.log(mp, col);
      return false;
    }
    if (col == 5 && i == 6) console.log(board[i][col]);
    if (board[i][col] != ".") {
      mp.set(board[i][col], true);
    }
  }

  return true;
}

function checkgrid(board: string[][], i: number, j: number): boolean {
  let mp = new Map<string, boolean>();
  for (let k = i; k < i + 3; k++) {
    for (let l = j; l < j + 3; l++) {
      if (mp.has(board[k][l])) {
        console.log(mp, i, j, board[k][l]);
        return false;
      }
      if (board[k][l] != ".") mp.set(board[k][l], true);
    }
  }
  return true;
}

function isValidSudoku(board: string[][]): boolean {
  let isrowchecked = new Map<number, boolean>(),
    iscolchecked = new Map<number, boolean>(),
    isgridcheck = new Map<string, boolean>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!isrowchecked.has(i)) {
        if (!check(board[i])) {
          return false;
        }
        isrowchecked.set(i, true);
      }
      if (!iscolchecked.has(j)) {
        if (!checkcol(board, j)) {
          return false;
        }
        iscolchecked.set(j, true);
      }
      if (!isgridcheck.has([Math.floor(i / 3), Math.floor(j / 3)].join(","))) {
        if (!checkgrid(board, i, j)) {
          console.log(i, j);
          return false;
        }
        isgridcheck.set([Math.floor(i / 3), Math.floor(j / 3)].join(","), true);
      }
    }
  }
  return true;
}
