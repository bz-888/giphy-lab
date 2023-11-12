export default function GifDisplay({gif}) {
    console.log(gif.images.downsized.url, "<-- gif");
    return (
        <img src={gif.images.downsized.url} alt=""/>
    )
}