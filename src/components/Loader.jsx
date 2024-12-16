import 'ldrs/ring2'

export default function Loader() {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 56px - 264px" }}>
                <l-ring-2
                    size="40"
                    stroke="5"
                    stroke-length="0.25"
                    bg-opacity="0.1"
                    speed="0.8"
                    color="black"
                ></l-ring-2>
            </div >
        </>
    )
}