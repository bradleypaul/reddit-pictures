export default {
    isVideo: (filename) => {
        if(/\.gifv$/.test(filename)){
            console.log("Is a gifv");
        }
        return /\.(mp4|webm|gifv)$/.test(filename);
    },
    isImage: (filename) => {
        return /\.(jpe?g|pi?ng|gif)$/.test(filename);
    }   
}