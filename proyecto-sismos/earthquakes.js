const END_POINT = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02"

async function loadEarthQuakes() {
    const result = await fetch(END_POINT,{
        method: "GET"
    })
    if(!result.ok) throw new Error(`HTTP ${result.status}`)
    return await result.json()
}

export const dataFromRequest = async () => {
    try {
        return await loadEarthQuakes()
    } catch (error) {
        console.log(`Error al obtener datos: ${error}`);
        return {}
    }
}