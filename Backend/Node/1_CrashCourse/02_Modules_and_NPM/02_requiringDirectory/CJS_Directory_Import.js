// ESM does NOT support direct directory imports.
// Try: node --input-type=module -e "import x from './ES_Module_Demo';"
// It will throw ERR_UNSUPPORTED_DIR_IMPORT

const allPeople = require("./CJS_Directory_Demo");
console.log(allPeople);

// CommonJS directory import works:
// const allPeople = require('./CJS_Directory_Demo');
// console.log(allPeople);
