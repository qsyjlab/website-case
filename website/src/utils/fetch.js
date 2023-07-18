// startLoadSystem()

import jsYaml from "js-yaml";

const baseUrl = "http://localhost:8002/";

export function fetchYml(path) {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + path)
      .then((response) => {
        return response.text();
      })
      .then((res) => {
        resolve(jsYaml.load(res));
      })
      .catch((err) => reject(err));
  });
}

function startLoadSystem() {
  fetchYmlToData(systemRoot).then(async (res) => {
    const foldersData = await loadFolderData(res);

    // console.log('foldersData', foldersData);
    let data = mergeFoldersToOne(foldersData);

    console.log("data", data);
    displayParsedData(data);
  });
}

function mergeFoldersToOne(data = []) {
  return data;
}

async function loadFolderData(folders = []) {
  const loadQueue = [];

  folders.forEach((folder) => {
    loadQueue.push(fetchYmlToData(folderRoot + folder.folder));
  });

  return await Promise.all(loadQueue).then((res) => res);
}

function displayParsedData(data) {
  const preElement = document.getElementById("fileContent");
  preElement.textContent = JSON.stringify(data, null, 2);
}
