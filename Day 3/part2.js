input = input.split('\n');

let pos1 = 1;
let pos2 = 1;
let pos3 = 1;
let pos4 = 1;
let pos5 = 1;

let trees1 = 0;
let trees2 = 0;
let trees3 = 0;
let trees4 = 0;
let trees5 = 0;

for (i=0; i<input.length - 1; i++) {
  pos1 += 1;
  pos2 += 3;
  pos3 += 5;
  pos4 += 7;

  if(i%2 == 0){
    pos5 += 1;
  }

  if (pos1 > input[i].length) {pos1 = pos1 - input[i].length;}
  if (pos2 > input[i].length) {pos2 = pos2 - input[i].length;}
  if (pos3 > input[i].length) {pos3 = pos3 - input[i].length;}
  if (pos4 > input[i].length) {pos4 = pos4 - input[i].length;}
  if (pos5 > input[i].length) {pos5 = pos5 - input[i].length;}

  if (input[i+1].charAt(pos1 - 1) === "#") {trees1 ++;}
  if (input[i+1].charAt(pos2 - 1) === "#") {trees2 ++;}
  if (input[i+1].charAt(pos3 - 1) === "#") {trees3 ++;}
  if (input[i+1].charAt(pos4 - 1) === "#") {trees4 ++;}
  
  if (input[i+2] !== undefined && i%2 == 0 && input[i+2].charAt(pos5 - 1) === "#") {
    trees5 ++;
  }
}

document.getElementById('Results').innerHTML += "<br>The answer to part 2 is: " + (trees1 * trees2 * trees3 * trees4 * trees5);
