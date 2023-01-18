function min(n, m) {
  if (n < m) return n;
  return m;
}

const rekurencja = function (n) {
  if (n < 0) return null;
  if (n == 0) return true;
  if (n == 1) return false;
  return rekurencja(n - 2);
};

function countChars(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) if (string[i] == char) count++;
  return count;
}

console.log(countChars("ale o co ci chodzi gosciu?", " "));
