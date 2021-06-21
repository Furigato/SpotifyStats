const readJSON = async() => {
    let objStats
    try {
        objStats = await fetch('/JSON/StreamingHistory0.json')
        .then(response => {
            return response.json()
          })
        .then(r => {
            return r
          })
    } catch (e) {
        console.error(e)
    }

    return Object.values(objStats)

}

console.log(readJSON())