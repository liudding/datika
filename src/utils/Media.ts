import { Plugins, FilesystemDirectory } from '@capacitor/core';
import { Media as BaseMedia, MediaAlbum } from "@capacitor-community/media";
import { isIos, isAndroid } from '@/utils/env';

const MediaLibrary = new BaseMedia();
const { Filesystem } = Plugins


export default class Media {

    public static async savePhoto(props: any) {

        const filename = props.filename || '答题卡.png'

        props.filename = filename;

        if (!isIos() && !isAndroid()) {
            return Media.downloadWeb(props);
        }

        const albumName = props.albumName

        const result = await Filesystem.writeFile({
            path: filename,
            data: props.src,
            directory: FilesystemDirectory.Cache,
        })

        if (isAndroid()) {
            // Android 上，getAlbums 会崩溃

            return MediaLibrary.savePhoto({
                path: result.uri,
                album: albumName
            });
        }

        let album = await Media.findAlbum(albumName);

        if (!album) {
            await MediaLibrary.createAlbum({ name: albumName });

            album = await Media.findAlbum(albumName);
        }

        album = album as MediaAlbum;

        console.log(result.uri)

        return MediaLibrary.savePhoto({
            path: result.uri,
            album: album.identifier
        });


    }

    public static async downloadWeb(props: any) {
        const a = document.createElement("a");
        a.setAttribute("download", props.filename);
        a.setAttribute("href", props.src);
        a.click();

        setTimeout(() => {
            a.remove();
        }, 500)
    }

    public static async findAlbum(name: string) {
        const res = await MediaLibrary.getAlbums()

        const album = res.albums.find((i: any) => i.name === name);

        return album;
    }
}


