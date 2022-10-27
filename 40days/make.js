const { exec } = require("child_process");

const sh = "C:\\Program Files\\git\\bin\\bash.exe";
exec(
  "cd ../frontend && npm run build && cp -r build/* ../40days/html/ && cd ../40days && npm run make",
  { shell: sh },
  (e, st, se) => {
    if (e) {
      console.log(e);
    }
    if (se) {
      console.log(se);
      return;
    }
    console.log(st);
  }
);
