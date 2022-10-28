const { exec } = require("child_process");

// Run this only when you make changes to frontend too
// This is for packaging only
const sh = "C:\\Program Files\\git\\bin\\bash.exe";
exec(
  "cd ../frontend && npm run build && cp -r build/* ../40days/html/ && cd ../40days && npm run package",
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
