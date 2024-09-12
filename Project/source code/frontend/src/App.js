import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { Profile } from "./pages/Profile";


export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Splash/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    {/* // <Route path="/playlists" element={<Playlists/>}/>
                    //<Route path="/playlist" element={<Playlist/>}/> */}
                    <Route path="/profile" element={<Profile user={{
                        username:"unknown_k",
                        name:"JohnDoe",
                        phone:"074 654 7890",
                        email:"johndoe@gmail.com",
                        playlists:[],
                        playlistCount:18,
                        followersCount:18,
                        followingCount:18,}
                        }
                    />}/>
                    
                </Routes>
            </BrowserRouter>
        );
    }
}