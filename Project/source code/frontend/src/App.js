import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { Profile } from "./pages/Profile";
import { Playlist } from "./pages/Playlist";


export class App extends React.Component {
    playlists = [
        { id: 1, image: "Designer (10).jpeg", name: "Rap", duration: 56, author: "John Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },
        { id: 2, image: "Designer (11).jpeg", name: "Rap", duration: 35, author: "Marry Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },
        { id: 3, image: "Designer (9).jpeg", name: "Rap", duration: 36, author: "Jane Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },
        { id: 4, image: "Designer (8).jpeg", name: "Rap", duration: 36, author: "James Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },

    ]
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Splash/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/playlist" element={<Playlist playlist={this.playlists[0]} />} />
                    {/* // 
                    //<Route path="/playlist" element={<Playlist/>}/> */}
                    <Route path="/profile" element={<Profile user={
                        {
                            image:"Designer (7).jpeg",
                            username:"unknown_k",
                            name:"JohnDoe",
                            phone:"074 654 7890",
                            email:"johndoe@gmail.com",
                            playlists:this.playlists,
                            playlistCount:18,
                            followersCount:18,
                            followingCount:18,
                        }
                        }
                    />}/>
                    
                </Routes>
            </BrowserRouter>
        );
    }
}