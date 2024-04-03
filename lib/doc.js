import fs from "fs";
import path from "path";

const postDirectory = path.join(process.cwd(), "docs");

// cwd == current working directory

export function getDocuments() {
  console.log(postDirectory);
  const fileNames = fs.readdirSync(postDirectory);
  console.log(fileNames);
}
