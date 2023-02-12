let result = document.getElementById("result");
let player = "p1";
let winner = false;
let m = [];
let t = document.getElementsByClassName("game-place");


for (let i = 0; i < t.length; i++) {
  t[i].value = "empty";
}

for (let i = 0; i < 3; i++) {
  m[i] = [];
  for (let j = 0; j < 3; j++) {
    m[i][j] = "";
  }
}

function resetBoard(t) {
  for (let i = 0; i < t.length; i++) {
    t[i].textContent = "";
    t[i].value = "empty";
  }
  result.textContent = "";
}

function win(m) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (m[i][0] === m[i][1] && m[i][1] === m[i][2] && m[i][0] !== "") {
      return m[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (m[0][i] === m[1][i] && m[1][i] === m[2][i] && m[0][i] !== "") {
      return m[0][i];
    }
  }

  // Check diagonals
  if (m[0][0] === m[1][1] && m[1][1] === m[2][2] && m[0][0] !== "") {
    return m[0][0];
  }
  if (m[0][2] === m[1][1] && m[1][1] === m[2][0] && m[0][2] !== "") {
    return m[0][2];
  }

  // Check draw
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (m[i][j] !== "") {
        count++;
      }
    }
  }
  if (count === 9) {
    return "draw";
  }

  return false;
}




for (let i = 0; i < t.length; i++) {
  t[i].addEventListener("click", function () {
    document.body.style.cursor = "none";
    if (this.value === "empty") {
      if (player === "p1") {
        this.innerHTML = "<img src=letter-o.png alt=letter-o>";
        this.value = "o";
        m[Math.floor(i / 3)][i % 3] = "o";
        player = "p2";
      } else {
        this.innerHTML = "<img src=cross.png alt=cross>";
        this.value = "x";
        m[Math.floor(i / 3)][i % 3] = "x";
        player = "p1";
      }

      winner = win(m);
      if (winner === "o" || winner === "x") {
        resetBoard(t);
        result.textContent = "Player " + winner + " wins the game!";
        setTimeout(function () {
          location.reload();
        }, 1000);

      } else if (winner === "draw") {
        resetBoard(t);
        result.textContent = "It's a draw!";
        setTimeout(function () {
          location.reload();
        }, 1000);

      }
    }
  });
}




