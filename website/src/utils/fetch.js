// startLoadSystem()

import jsYaml from "js-yaml";

export const baseUrl = "/website-case/system/";

export function fetchYml(path) {
  return new Promise((resolve, reject) => {
    fetch(baseUrl +path)
      .then((response) => {
        return response.text();
      })
      .then((res) => {
        resolve(jsYaml.load(res));
      })
      .catch((err) => reject(err));
  });
}



function mergeFoldersToOne(data = []) {
  return data;
}

