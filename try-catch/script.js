// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error: ' + error);
// }

// remember, "error" on line 3 is a placeholder term, for whatever data being passed through
// "'Error'" on line 4 is a string, concatenated with our "error" placeholder term

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }

  return number * 2;
}

try {
  const y = double('3');
  console.log(y);
} catch (error) {
  console.log(error);
}
