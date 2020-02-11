const arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|\n"];
for (let i in arr) {
  setTimeout(() => {
    process.stdout.write("\r" + arr[i]);
  }, 100 + 200 * i);
}
