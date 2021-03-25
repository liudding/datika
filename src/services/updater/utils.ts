// import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
// const { Filesystem } = Plugins;

import { File } from "@ionic-native/file";

// 在 ios 中，
// capacitor filesystem 的 data directory 是在 documents 目录下的，而不是 Library/NoCloud 里的
// 而 capacitor 只会去加载 Library/ionic_built_snapshots 下的包


// export async function dirExists(directory: FilesystemDirectory, path: string) {
//     try {
//         const statResult = await Filesystem.stat({ directory, path });
//         // directory for Android, NSFileTypeDirectory for iOS
//         return statResult.type === "directory" || statResult.type === "NSFileTypeDirectory";
//     } catch (error) {
//         return false;
//     }
// }

// export async function fileExists(directory: FilesystemDirectory, path: string): Promise<boolean> {
//     try {
//         const statResult = await Filesystem.stat({ directory, path });
//         // file for Android, NSFileTypeRegular for iOS
//         return statResult.type === "file" || statResult.type === "NSFileTypeRegular";
//     } catch (error) {
//         return false;
//     }
// }


// export async function dataDirectoryExists(path: string): Promise<boolean> {
//     return dirExists(FilesystemDirectory.Data, path);
// }

// export async function deleteDataDirectory(path: string): Promise<void> {
//     await Filesystem.rmdir({directory: FilesystemDirectory.Data, path, recursive: true})
// }


export async function getReleasesDirectory(): Promise<string> {
    let exists = false;
    try {
        exists = await File.checkDir(File.dataDirectory, 'ionic_built_snapshots');
    } catch (error) {
        exists = false;
    }

    if (!exists) {
        return await cleanDataDirectory('ionic_built_snapshots');
    } else {
        return File.dataDirectory + 'ionic_built_snapshots/'
    }
}

/**
 * Makes sure the given directory exists and is empty.
 */
export async function cleanDataDirectory(path: string): Promise<string> {
    await File.createDir(File.dataDirectory, path, true);

    return File.dataDirectory + path + '/';

    // if (await dataDirectoryExists(path)) {
    //     await deleteDataDirectory(path);
    // }

    // await Filesystem.mkdir({ directory: FilesystemDirectory.Data, path, recursive: true });
    // const appDir = await Filesystem.getUri({ directory: FilesystemDirectory.Data, path });
    // return appDir.uri;
}

// export async function getUri(fsDir: FilesystemDirectory, path: string): Promise<string> {
//     const result = await Filesystem.getUri({ directory: fsDir, path });
//     return result.uri;
// }

// export async function getDataUri(path: string): Promise<string> {
//     return getUri(FilesystemDirectory.Data, path);
// }

