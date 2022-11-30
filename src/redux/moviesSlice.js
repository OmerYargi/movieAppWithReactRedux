import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getMoviesAsync = createAsyncThunk('movies/getMoviesAsync', async () => {
    const res = await fetch("http://localhost:3000/contents");
    return await res.json();
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        allMovies: [],
        activeFilter: "",
        detailsShow: "",
        gosterilen: [],
        secizle: {
            vizyondakiler: [],
            oneCikanlar: [],
            allmov: [],
            horror: [],
            thriller: [],
            actionTur: [],
            adventure: [],
            scifi: [],
            drama: [],
            mystery: [],
            biography: [],
            music: [],
            crime: [],
            comedy: [],
            animation: [],
            family: [],
            fantasy: [],
            history: [],
            war: [],
            romance: [],
        },

    },
    reducers: {
        changeActiveFilter: (state, action) => {
            const filmTuru = action.payload;
            if (filmTuru === "Horror") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.horror;
            }
            else if (filmTuru === "Thriller") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.thriller;
            }
            else if (filmTuru === "Action") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.actionTur;
            }
            else if (filmTuru === "Adventure") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.adventure;
            }
            else if (filmTuru === "Sci-Fi") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.scifi;
            }
            else if (filmTuru === "Drama") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.drama;
            }
            else if (filmTuru === "Mystery") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.mystery;
            }
            else if (filmTuru === "Biography") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.biography;
            }
            else if (filmTuru === "Home") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.allMovie;
            }
            else if (filmTuru === "Music") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.music;
            }
            else if (filmTuru === "Crime") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.crime;
            }
            else if (filmTuru === "Comedy") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.comedy;
            }
            else if (filmTuru === "Animation") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.animation;
            }
            else if (filmTuru === "Family") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.family;
            }
            else if (filmTuru === "Fantasy") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.fantasy;
            }
            else if (filmTuru === "War") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.war;
            }
            else if (filmTuru === "History") {
                state.activeFilter = filmTuru;
                state.gosterilen = state.secizle.history;
            }
        },
        changeDetailsShow: (state, action) =>  {
            state.detailsShow = action.payload;
        }
    },
    extraReducers: {
        [getMoviesAsync.fulfilled]: (state, action) => {
            // All Movies State
            state.gosterilen = action.payload;
            state.secizle.allMovie = action.payload;

            const vizyondakiler = action.payload.filter((item) => item.Category.some(i => i === "/Secizle/Vizyondakiler"));
            state.secizle.vizyondakiler = vizyondakiler;

            const oneCikanlar = action.payload.filter((item) => item.Category.some(i => i === "/Secizle/OneCikanlar"));
            state.secizle.oneCikanlar = oneCikanlar;

            const vitrin = action.payload.filter((item) => item.Category.some(i => i.match(/vitrin/i)));
            state.vitrin = vitrin[0].Poster;

            const actionTur = action.payload.filter(item => item.Genre.match(/action/i))
            state.secizle.actionTur = actionTur;

            const horror = action.payload.filter(item => item.Genre.match(/horror/i))
            state.secizle.horror = horror;

            const thriller = action.payload.filter(item => item.Genre.match(/thriller/i))
            state.secizle.thriller = thriller;

            const adventure = action.payload.filter(item => item.Genre.match(/adventure/i))
            state.secizle.adventure = adventure;

            const scifi = action.payload.filter(item => item.Genre.match(/sci-fi/i))
            state.secizle.scifi = scifi;

            const drama = action.payload.filter(item => item.Genre.match(/drama/i))
            state.secizle.drama = drama;

            const mystery = action.payload.filter(item => item.Genre.match(/mystery/i))
            state.secizle.mystery = mystery;

            const biography = action.payload.filter(item => item.Genre.match(/biography/i))
            state.secizle.biography = biography;

            const music = action.payload.filter(item => item.Genre.match(/music/i))
            state.secizle.music = music;

            const crime = action.payload.filter(item => item.Genre.match(/crime/i))
            state.secizle.crime = crime;

            const comedy = action.payload.filter(item => item.Genre.match(/comedy/i))
            state.secizle.comedy = comedy;

            const animation = action.payload.filter(item => item.Genre.match(/animation/i))
            state.secizle.animation = animation;

            const family = action.payload.filter(item => item.Genre.match(/family/i))
            state.secizle.family = family;

            const fantasy = action.payload.filter(item => item.Genre.match(/fantasy/i))
            state.secizle.fantasy = fantasy;

            const war = action.payload.filter(item => item.Genre.match(/war/i))
            state.secizle.war = war;

            const romance = action.payload.filter(item => item.Genre.match(/romance/i))
            state.secizle.romance = romance;

            const history = action.payload.filter(item => item.Genre.match(/history/i))
            state.secizle.history = history;
        }
    }
})
export const { changeActiveFilter, changeDetailsShow } = moviesSlice.actions;
export default moviesSlice.reducer