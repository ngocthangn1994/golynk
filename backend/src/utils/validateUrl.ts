export const isValidUrl = (url: string):boolean => {
    try{
        const parseUrl = new URL(url);
        return parseUrl.protocol === "http:" || parseUrl.protocol === "https:"
    }
    catch(err){
        return false;
    }
}