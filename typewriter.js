const sentence = "hello there from lighthouse labs \n";
let x = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, x)
  x += 50;
}
console.log("hi ");