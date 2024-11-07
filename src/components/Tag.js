import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2   bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 my-[15px] ">
      <h1 className="text-2xl mt-[15px]   underline uppercase font-extrabold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}
      <input
        value={tag}
        type="text"
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center "
        onChange={(event) => setTag(event.target.value)}
      />

      <button
        className="w-10/12  bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] "
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
