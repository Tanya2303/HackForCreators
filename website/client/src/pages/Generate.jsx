import axios from "axios";
import { useState } from "react";

const Generate = () => {
    const [image, updateImage] = useState();
    const [prompt, updatePrompt] = useState();
    const [loading, updateLoading] = useState();

    const generate = async (prompt) => {
        updateLoading(true);
        const result = await axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`);
        updateImage(result.data);
        updateLoading(false);
    };
    return (
        <div>
            <div className='text-center text-6xl font-base text-white py-6'>Generate Image</div>

            <div>
                <div className="flex flex-1 space-x-3 items-center justify-center my-4">
                    <input className="w-[36rem] h-10 rounded-xl px-3" value={prompt}
                        onChange={(e) => updatePrompt(e.target.value)} />
                    <button onClick={(e) => generate(prompt)} className="m-2 bg-tertiary text-white py-2 px-6 rounded-md">
                        Generate
                    </button>
                </div>

            </div>

            <div>
                {loading ? (
                    <div>
                        Loading...
                    </div>
                ) : image ? (
                    <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8 space-x-2">
                        <img src={`data:image/png;base64,${image}`} className="h-72 m-8 w-96 rounded-2xl" />
                    </div>
                ) : null}
            </div>

        </div>
    )
}

export default Generate;