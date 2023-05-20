import fs from "fs";
const FILE_COUNT = 3;
const IPFS_BASE =
  "ipfs://bafybeig5kprgplwxmnro6ccgr5rscuprvg2obsl2a6hrrjdxrivclfitgu";

for (let i = 1; i <= FILE_COUNT; i++) {
  const fileName = `../build/json/${i}.json`;
  fs.readFile(fileName, "utf8", (err, data) => {
    const file = JSON.parse(data);
    file.image = `${IPFS_BASE}/${i}.png`;
    fs.writeFile(
      fileName,
      JSON.stringify(file, null, 2),
      function writeJSON(err) {
        if (err) return console.log(err);
      }
    );
  });
}
