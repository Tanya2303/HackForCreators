import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WalletContextProvider from '../components/WalletContextProvider'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import MyNFTs from '../pages/MyNFTs';
import Upload from '../pages/Upload';
import Chatrooms from '../pages/Chatrooms';
import Generate from '../pages/Generate';

function Index() {
    return (
        <BrowserRouter>
            <WalletContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/mynfts" element={<MyNFTs />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/chatrooms" element={<Chatrooms />} />
                    <Route path="/generate" element={<Generate />} />
                </Routes>
            </WalletContextProvider>
        </BrowserRouter>
    );
}

export default Index;
