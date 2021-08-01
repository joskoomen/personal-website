export default class ImageUtils {
    static getGiphy(name: string, type: string = 'gif'): string {
        return `https://media.giphy.com/media/${name}/giphy.${type}`;
    }
}
