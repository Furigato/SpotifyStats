const jsonFile = '/JSON/StreamingHistory0.json';
import axios from 'axios';
import { get } from 'axios';

// const readJSON = (JSON) => {
//         return fetch(JSON)
//         .then(response => {
//           const objStats = response.data
//           return objStats
//         }) .catch(error => {
//           console.error('Algo deu errado')
//           console.error(error)
//         })
// }

// console.log(readJSON(jsonFile))

get(jsonFile).then(response => {
  const objStats = response.data
  console.log(objStats)
})

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