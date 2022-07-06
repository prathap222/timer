let beep = 1000;
let args = process.argv;

const alaram = () => {
  for (let i = 2; i < args.length; i++) {
    if (args[i] >= 0 && args[i] !== NaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beep * args[i]);
    }
  }
};

alaram(args);