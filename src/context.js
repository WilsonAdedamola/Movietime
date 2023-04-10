import { createContext } from "react";
import { useContext } from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import popular1 from './images/popular1.png'
import popular2 from './images/popular2.png'
import popular3 from './images/popular3.png'
import popular4 from './images/popular4.png'
import continue1 from './images/continue1.png'
import continue2 from './images/continue2.png'
import continue3 from './images/continue3.png'
import continue4 from './images/continue4.png'
import MovieCard from "./components/MovieCard/MovieCard";

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [result, setResult] = useState(null)

// const options = {
//   method: 'GET',
//   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
//   headers: {
//     'X-RapidAPI-Key': 'ba70985e08mshe4561ea49192398p1534b8jsn7871f9c11a8b',
//     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
//     // setResult(response.data)
//     // console.log(result)
// }).catch(function (error) {
// 	console.error(error);
// });

const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre',
    params: {genre: 'adventure', limit: '100'},
    headers: {
      'X-RapidAPI-Key': 'ba70985e08mshe4561ea49192398p1534b8jsn7871f9c11a8b',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

useEffect(()=>{
    
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
},[])

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ba70985e08mshe4561ea49192398p1534b8jsn7871f9c11a8b',
// 		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
// 	}
// };

// fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



//   useEffect(()=>{
//     const api = async () =>{
//       const {data} = await axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_b0lho61o')
//       console.log(data.items)
      
//     //   console.log('result')
//       setResult(data)
//     }
//     api()
// },[])
//     console.log('result')
//   console.log(result)

//   const movv = result.items.map((mov)=>{
//     return <MovieCard movie={mov}/>
//   })

    const [tablet, setTablet] = useState(false)
    const [openRight, setOpenRight] = useState(false)
    const [openLeft, setOpenLeft] = useState(false)

    const popularMovieCard = [
        {
            img: popular4,
            title: 'John Wick 3',
            alt: 'John Wick 3',
            year: '2023',
            time: '125 min'
        },
        {
            img: continue2,
            title: 'Stranger Things',
            alt: 'Mysterious Benedict',
            year: '2023',
            time: '110 min'
        },
        {
            img: popular1,
            title: 'After Ever Happy',
            alt: 'After',
            year: '2021',
            time: '125 min'
        },
        {
            img: popular2,
            title: 'We have a Ghost',
            alt: 'We have a Ghost',
            year: '2023',
            time: '110 min'
        },
        {
            img: popular3,
            title: 'Blood & Water',
            alt: 'Blood & Water',
            year: '2022',
            time: '160 min'
        },
        {
            img: popular4,
            title: 'John Wick 3',
            alt: 'John Wick 3',
            year: '2023',
            time: '125 min'
        },
        {
            img: continue2,
            title: 'Stranger Things',
            alt: 'Mysterious Benedict',
            year: '2023',
            time: '110 min'
        },
        {
            img: popular1,
            title: 'After Ever Happy',
            alt: 'After',
            year: '2021',
            time: '125 min'
        },
        {
            img: popular2,
            title: 'We have a Ghost',
            alt: 'We have a Ghost',
            year: '2023',
            time: '110 min'
        },
        {
            img: popular3,
            title: 'Blood & Water',
            alt: 'Blood & Water',
            year: '2022',
            time: '160 min'
        },
        {
            img: popular4,
            title: 'John Wick 3',
            alt: 'John Wick 3',
            year: '2023',
            time: '125 min'
        },
        {
            img: continue2,
            title: 'Stranger Things',
            alt: 'Mysterious Benedict',
            year: '2023',
            time: '110 min'
        },
        {
            img: popular1,
            title: 'After Ever Happy',
            alt: 'After',
            year: '2021',
            time: '125 min'
        },
        {
            img: popular2,
            title: 'We have a Ghost',
            alt: 'We have a Ghost',
            year: '2023',
            time: '110 min'
        },
        {
            img: popular3,
            title: 'Blood & Water',
            alt: 'Blood & Water',
            year: '2022',
            time: '160 min'
        },
        {
            img: popular4,
            title: 'John Wick 3',
            alt: 'John Wick 3',
            year: '2023',
            time: '125 min'
        },
        {
            img: continue2,
            title: 'Stranger Things',
            alt: 'Mysterious Benedict',
            year: '2023',
            time: '110 min'
        }
    ]

    const continueMovieCard = [
        {
            img: continue1,
            title: 'Mysterious Benedict',
            alt: 'Mysterious Benedict',
            year: '2021',
            time: '125 min'
        },
        {
            img: continue2,
            title: 'Stranger Things',
            alt: 'Stranger Things',
            year: '2023',
            time: '110 min'
        },
        {
            img: continue3,
            title: 'Locke & Key',
            alt: 'Locke & Key',
            year: '2022',
            time: '160 min'
        },
        {
            img: continue4,
            title: 'Minions',
            alt: 'Minions',
            year: '2023',
            time: '125 min'
        },
        {
            img: continue2,
            title: 'Stranger Things',
            alt: 'Stranger Things',
            year: '2023',
            time: '110 min'
        },
        {
            img: continue1,
            title: 'Mysterious Benedict',
            alt: 'Mysterious Benedict',
            year: '2021',
            time: '125 min'
        },
        {
            img: continue2,
            title: 'Stranger Things',
            alt: 'Stranger Things',
            year: '2023',
            time: '110 min'
        },
        {
            img: continue3,
            title: 'Locke & Key',
            alt: 'Locke & Key',
            year: '2022',
            time: '160 min'
        },
        {
            img: continue4,
            title: 'Minions',
            alt: 'Minions',
            year: '2023',
            time: '125 min'
        },
        {
            img: continue2,
            title: 'Stranger Things',
            alt: 'Stranger Things',
            year: '2023',
            time: '110 min'
        }
    ]

    return (
        <AppContext.Provider value={{ result, tablet, setTablet, popularMovieCard, continueMovieCard, openRight, setOpenRight, setOpenLeft, openLeft }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }