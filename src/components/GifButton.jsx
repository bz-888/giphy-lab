export default function GifButton({setRefresh}) {
    return (
        <button onClick={() => setRefresh((prev) => !prev)}>
            Random Gif
        </button>
    )
}