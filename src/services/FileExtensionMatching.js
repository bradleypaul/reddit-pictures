export default {
    isGifv: filename => {
        return /\.gifv$/.test(filename);
    },
    isGiphyVideo: filename => {
        return /giphy/.test(filename);
    },
    isVideo: filename => {
        if(/\.gifv$/.test(filename)){
            console.log("Is a gifv");
            //change .gifv to mp4 extensiton
        }
        if(/giphy/.test(filename)) console.log("is giphy")
        return /\.(mp4|webm)/.test(filename);
    },
    isImage: filename => {
        return /\.(jpe?g|pi?ng|gif)$/.test(filename);
    }   
}