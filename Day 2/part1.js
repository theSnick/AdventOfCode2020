let pass = 0;
firstInput = input.split('\n');

for (i=0; i<firstInput.length; i++) {
  const line = firstInput[i].split(" ");
  const least = line[0].split("-")[0];
  const most = line[0].split("-")[1];
  const char = line[1].replace(":", "");

  const occur = line[2].match(new RegExp(char, 'g'));
  
  if (occur && occur.length >= least && occur.length <= most) {
    pass++;
  }
}

document.getElementById('Results').innerHTML += "The answer to part 1 is: " + pass;
