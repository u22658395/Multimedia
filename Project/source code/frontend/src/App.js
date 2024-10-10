import React from "react";
import { Navbar } from "./components/Navbar";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { Profile } from "./pages/Profile";
import { WithPlaylistProps } from "./pages/Playlist";

// songs = [
//     {
//         title: "Fula",
//         artist: "Chronical Deep",
//         album: "Fula-Single",
//         duration: "07:58",
//         link: "https://music.apple.com/za/album/fula/1707836582?i=1707836587"
//     },
//     {
//         title: "Bala",
//         artist: "Kelvin Momo",
//         album: "Bala-Single",
//         duration: "06:44",
//         link: "https://music.apple.com/za/album/bala-feat-sykes/1760196900?i=1760196902"
//     },
//     {
//         title: "No Big Deal",
//         artist: "Nasty C",
//         album: "No Big Deal-Single",
//         duration: "04:20",
//         link: "https://music.apple.com/za/album/no-big-deal/1657364135?i=1657364136"
//     },
//     {
//         title: "Hymn Medley",
//         artist: "Spirit of Praise",
//         album: "Spirit of Praise 10 (Live)",
//         duration: "12:37",
//         link: "https://music.apple.com/za/album/hymn-medley-live-feat-teboho-moloi/1762644780?i=1762645283"
//     },
//     {
//         title: "Life",
//         artist: "Lute",
//         album: "Life-Single",
//         duration: "03:15",
//         link: "https://music.apple.com/za/album/life/1521718500?i=1521718575"
//     },
// ]

// playlists = [
//     {
//         id: 1,
//         image: "Designer (10).jpeg",
//         name: "Jazz",
//         duration: 56,
//         author: "John Doe",
//         rating: "* * * * *",
//         description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and",
//         comments: [
//             {
//                 username: "MarryD",
//                 body: "I am in love with this playlist, best playlist ever. Highly recommend",
//                 image: "playlist2.png"
//             }
//         ],
//         songs: [
//             {
//                 title: "Fula",
//                 artist: "Chronical Deep",
//                 album: "Fula-Single",
//                 duration: "07:58",
//                 link: "https://music.apple.com/za/album/fula/1707836582?i=1707836587"
//             },
//             {
//                 title: "Bala",
//                 artist: "Kelvin Momo",
//                 album: "Bala-Single",
//                 duration: "06:44",
//                 link: "https://music.apple.com/za/album/bala-feat-sykes/1760196900?i=1760196902"
//             },

//         ]
//     },
//     { id: 2, image: "Designer (11).jpeg", name: "Pop", duration: 35, author: "Marry Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },
//     { id: 3, image: "Designer (9).jpeg", name: "House", duration: 10, author: "Jane Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },
//     { id: 4, image: "Designer (8).jpeg", name: "Reggae", duration: 26, author: "James Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },

// ]



function searchFeed(searchTerm, feed) {
    searchTerm = searchTerm.toLowerCase()


    if (feed == "songs") {
        if (searchTerm.trim() === '') {
            this.setState({ songs: this.songs });
        }
        else {
            this.setState({
                songs: this.songs.filter(song => {
                    return song.title.toLowerCase().includes(searchTerm) || song.album.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm)
                }),
            });
        }
    }
    else {
        if (searchTerm.trim() === '') {
            this.setState({ playlists: this.playlists });
        }
        else {
            this.setState({
                playlists: this.playlists.filter(playlist => {
                    return playlist.name.toLowerCase().includes(searchTerm) || playlist.author.toLowerCase().includes(searchTerm)
                })
            });
        }
    }
}


function addSong(song, playlistId){
    if (playlistId) {
        const playlist = this.playlists.find(p => p.id === playlistId);

        if (playlist) {
            playlist.songs.push(song);
            console.log(`Song added to playlist: ${playlist.name}`);
        } else {
            console.log(`Playlist with id ${playlistId} not found.`);
        }
        // this.playlists[playlistId].songs.push(song);
    }
    else {
        this.songs.push(song);
    }
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<Splash/>
    },
    {
        path:"/Home",
        element:<Home handleSearch={searchFeed} /> 
    },
    {
        path:"/playlist/:playlistId",
        element:<WithPlaylistProps />,
        loader: async () => {
            return fakeDb.from("teams").select("*");
        }
    }, 
    {
        path:"/profile/:profileId",
        element:<Profile  />
    }
])


export class App extends React.Component {
    
    // constructor(props) {
    //     super(props)
        
    //     // this.searchFeed = this.searchFeed.bind(this);
    //     // this.addSong = this.addSong.bind(this);
    // }

    

    

    render() {
        return (
            // <BrowserRouter>
                <RouterProvider router={router}>
                    <Navbar/> 

                </RouterProvider>
            // </BrowserRouter>
        );
    }
}