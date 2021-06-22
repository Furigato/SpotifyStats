const readJSON = async() => {
    let objStats
    try {
        objStats = await fetch('/JSON/StreamingHistory0.json')
        .then(response => {
            return response.json()
            .then(detail => { return detail})
          })
    } catch (e) {
        console.error(e)
    }

    return objStats

}

console.log(readJSON())

// function timesListened(songName) {
//     const history = readJSON()
    
//     history.forEach(song => {
//         let playValue = 0
//         if (songName == trackName) {
//             playValue++
//             return playValue
//         }
//         console.log(playValue)
//     });
// }

// timesListened()