export const BLANK_NUMBER = 9;

/**
 * only works when arr.length is divisble by chunkSize
 * @param {Array} arr the array you want to divide into array of subarrays of size chunkSize
 * @param {Number} chunkSize the size of subarray
 */
function chunk(arr, chunkSize) {
  for (let i = 0; i < chunkSize; i++) arr.push(arr.splice(0, chunkSize));
  return arr;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function swapPoints(board, a, b) {
  [board[a.x][a.y], board[b.x][b.y]] = [board[b.x][b.y], board[a.x][a.y]];
}

// https://math.stackexchange.com/questions/293527/how-to-check-if-a-8-puzzle-is-solvable
function isSolvable(board) {
  let inversions = 0;
  for (let i = 0; i < board.length; i++)
    for (let j = i + 1; j < board.length; j++)
      if (
        board[i] !== BLANK_NUMBER &&
        board[j] !== BLANK_NUMBER &&
        board[i] > board[j]
      )
        inversions++;

  return inversions % 2 == 0;
}

export function getBoard(shuffled = false) {
  const board = Array.from({ length: 9 }, (_, i) => i + 1);
  if (shuffled) {
    shuffleArray(board);
    while (!isSolvable(board)) shuffleArray(board);
  }
  return chunk(board, 3);
}

export function isSamePoint(a, b) {
  return a.x == b.x && a.y == b.y;
}

export function addPoints(a, b) {
  return { x: a.x + b.x, y: a.y + b.y };
}

export function findBlank(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == BLANK_NUMBER) return { x: i, y: j };
    }
  }
}
