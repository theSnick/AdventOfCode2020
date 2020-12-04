const firstInput = input.split('\n');

let pos = 1;
let trees = 0;

for (i=0; i<firstInput.length - 1; i++) {
  pos += 3;

  if (pos > firstInput[i].length) {
    pos = pos - firstInput[i].length;
  }

  if (firstInput[i+1].charAt(pos - 1) === "#") {
    trees ++;
  }
}

document.getElementById('Results').innerHTML += "The answer to part 1 is: " + trees;
