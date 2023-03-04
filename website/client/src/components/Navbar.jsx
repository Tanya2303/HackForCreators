import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { PublicKey, Transaction } from "@solana/web3.js";

export default function Navbar() {

    const [provider, setProvider] = useState(undefined);
    const [walletKey, setWalletKey] = useState(undefined);

    const getProvider = () => {
        if ("solana" in window) {
            const provider = window.solana;
            if (provider.isPhantom) return provider;
        }
    };

    const connectWallet = async () => {
        const { solana } = window;

        if (solana) {
            try {
                const response = await solana.connect();
                console.log("wallet account ", response.publicKey.toString());
                setWalletKey(response.publicKey.toString());
            } catch (err) {

            }
        }
    };
    const disconnectWallet = async () => {
        const { solana } = window;

        if (walletKey && solana) {
            await (solana).disconnect();
            setWalletKey(undefined);
        }
    };

    useEffect(() => {
        const provider = getProvider();

        if (provider) setProvider(provider);
        else setProvider(undefined);
    }, []);

    return (
        <div>
            {/* {provider && !walletKey && (
                <button
                    style={{
                        fontSize: "16px",
                        padding: "15px",
                        fontWeight: "bold",
                        borderRadius: "5px",
                    }}
                    onClick={connectWallet}
                >
                    Connect to Phantom Wallet
                </button>
            )}

            {provider && walletKey && (
                <div>

                    <button
                        style={{
                            fontSize: "16px",
                            padding: "15px",
                            fontWeight: "bold",
                            borderRadius: "5px",
                            margin: "15px auto",
                        }}
                        onClick={disconnectWallet}
                    >
                        Disconnect
                    </button>
                </div>
            )}

            {!provider && (
                <p>
                    No provider found. Install{" "}
                    <a href="https://phantom.app/">Phantom Browser extension</a>
                </p>
            )} */}
            <div
                className="flex justify-between md:justify-around py-4 w-full top-0 left-0 right-0 z-10 px-8 md:px-3">

                <div className="flex items-center">

                    <a className="cursor-pointer">
                        <h3 className="text-4xl w-72 font-medium text-white">
                            React App
                        </h3>
                    </a>
                </div>

                <div
                    className="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0 text-xl">

                    <Link to="/">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Home</span>
                    </Link>

                    <Link to="/explore">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Explore</span>
                    </Link>

                    <Link to="/mynfts">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">My NFTs</span>
                    </Link>

                    <Link to="/upload">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Upload NFTs</span>
                    </Link>

                    <Link to="/chatrooms">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Chatroom</span>
                    </Link>

                    <Link to="/generate">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Generate Art</span>
                    </Link>
                </div>

                {provider && !walletKey && (
                    <button className="bg-secondary p-1 rounded-md w-56" onClick={connectWallet}>
                        Connect Wallet
                    </button>
                )}

                {provider && walletKey && (
                    <div>

                        <button className="bg-secondary p-1 rounded-md w-56" onClick={disconnectWallet}>
                            {/* Connected account {walletKey} */}
                            Disconnect
                        </button>
                    </div>
                )}

                {!provider && (
                    <p>
                        No provider found. Install{" "}
                        <a href="https://phantom.app/">Phantom Browser extension</a>
                    </p>
                )}


            </div>
        </div>
    )
}
