const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);

  delay += 100; // Increase the delay for each character
}

// Add an extra setTimeout for a newline after the sentence is printed
 setTimeout(() => {
   process.stdout.write("\n");
 }, delay);