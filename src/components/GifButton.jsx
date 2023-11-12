export default function GifButton({setRefresh}) {
    return (
        <button onClick={() => setRefresh((prev) => !prev)}>
            New Gif
        </button>
    )
}