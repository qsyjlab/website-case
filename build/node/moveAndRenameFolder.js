import fs from "fs-extra";

export async function moveAndRenameFolder(
  sourcePath,
  destinationPath,
  newFolderName
) {
  try {
    // 检查源文件夹是否存在
    if (!fs.existsSync(sourcePath)) {
      throw new Error("Source folder does not exist.");
    }

    // 检查目标位置是否存在
    if (fs.existsSync(destinationPath)) {
      // 如果目标位置已经存在，则先删除目标位置的文件夹
      await fs.remove(destinationPath);
    }

    // 创建目标文件夹（如果不存在）
    await fs.ensureDir(destinationPath);

    // 生成新的目标文件夹路径
    const newDestinationPath = `${destinationPath}`;

    // 复制源文件夹到目标位置并重命名
    await fs.copy(sourcePath, newDestinationPath);

    console.log("Folder copied and renamed successfully!");
  } catch (err) {
    console.error("Error:", err.message);
  }
}
