let valid = 0;
secondInput = input.split('\n');

for (i=0; i<secondInput.length; i++) {
  const line = secondInput[i].split(" ");
  const firstIndex = line[0].split("-")[0] - 1;
  const secondIndex = line[0].split("-")[1] - 1;
  const char = line[1].replace(":", "");

  const first = line[2].charAt(firstIndex);
  const second = line[2].charAt(secondIndex);

  if (first !== "" && second !== "") {
    if ((first === char || second === char) && !(first === char && second === char)){
      valid ++;
    }
  }
}

document.getElementById('Results').innerHTML += "<br>The answer to part 2 is: " + valid;