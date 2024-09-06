// 22658395 Katlego Mositi
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home"
import {Posts} from "./pages/Posts"

export class App extends React.Component{
    render(){
        return(
            <BrowserRouter>

                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </BrowserRouter>
        )
    }
}