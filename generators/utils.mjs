import * as fs from "node:fs";

export const writeToFolder = async (folder, profilesObj) => {
  for (const profiles of Object.values(profilesObj)) {
    for (const profile of Object.values(profiles)) {
      const obj = {
        from: "User",
        is_custom_defined: "0",
        version: "2.3.1.10",
        ...profile,
      };

      const fileStr = JSON.stringify(obj, Object.keys(obj).sort(), 4) + "\n";

      fs.writeFileSync(`${folder}/${profile.name}.json`, fileStr, {
        encoding: "utf8",
      });
    }
  }
};

export const ensureClean = (outputFolder, subDir) => {
  if (!subDir) {
    fs.rmSync(outputFolder, { force: true, recursive: true });
    fs.mkdirSync(outputFolder);
    return outputFolder;
  }

  const folder = `${outputFolder}/${subDir}`;

  if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);
  if (fs.existsSync(folder)) {
    fs.rmSync(folder, { force: true, recursive: true });
  }

  fs.mkdirSync(folder);

  return folder;
};

export const numHalf = (num) => {
  const asNumber = Number(num);
  if (isNaN(asNumber)) throw new Error("Not a number");

  const half = Math.floor(asNumber / 2);

  // Half, floored to a multiple of 5, because speeds that aren't
  // multiples of 5 are evil and hurt my brain when I see them
  return `${half - (half % 5)}`;
};
