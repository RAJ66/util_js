const child_process = require("child_process");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function writeFile(file1, file2) {
  const { stdout, stderr } = await exec(`cat ${file1} >> ${file2}`);
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
}
writeFile("1.xml", "agora.xml");

async function writeText(text, file) {
  const { stdout, stderr } = await exec(`echo ${text} >> ${file}`);
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
}
writeText("aiiiiiiiiiiiiiiiiii", "agora.xml");
