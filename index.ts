import { exec } from "child_process";
import { readdirSync } from "fs";
import { join } from "path";

const sourceDirectory = "src";

const fullPath = join(__dirname, sourceDirectory);
executeFiles(fullPath);

function executeFiles(directoryPath: string) {
  try {
    readdirSync(directoryPath, { withFileTypes: true }).forEach((file) => {
      const filePath = join(directoryPath, file.name);
      if (file.isDirectory()) {
        executeFiles(filePath);
      } else {
        /**
         * Execute only ts files
         */
        if (file.name.split(".")[1] === "ts") {
          const command = `ts-node ${filePath}`;
          exec(command, (error, stdout, stderr) => {
            if (error) {
              console.error(error);
            }
            if (stderr) {
              console.error(stderr);
            }
            console.log(`File ${filePath}`);
            console.log(stdout);
          });
        }
      }
    });
  } catch (error) {
    console.error("Error in executeFiles", { error });
  }
}
