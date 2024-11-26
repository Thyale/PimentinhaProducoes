import { useState } from "react";

export default function QuinzeAnos() {
  const [video, setVideo] = useState("video1");

  return (
    <section id="quinzeanos" className="bg-Cinza p-6">
      <div className="w-11/12 m-auto Mobile:w-full">
        <div className="border-l-2 border-black p-2 mb-3 font-aboreto">
        <h1 className="text-2xl">15 ANOS</h1>
        <div className="text-sm flex flex-row gap-3 text-pink-500 cursor-pointer">
          <p onClick={() => setVideo("video1")}>Vídeo 1</p>
          <p onClick={() => setVideo("video2")}>Vídeo 2</p>
        </div>
        </div>
        <a className="font-aboreto text-sm text-white bg-pink-300 px-2" href="#">
        acesse o portfólio
        </a>
        <div className="flex flex-col items-center space-y-4">
        <div className="w-full mt-6">
          {video === "video1" && (
            <iframe
              height="515"
              src="https://www.youtube.com/embed/wY0I0UIW4-I?si=3Ac6UchyMslzmXYG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full max-w-6xl Mobile:h-72 shadow-lg m-auto"
            ></iframe>
          )}
          {video === "video2" && (
            <iframe
              height="515"
              src="https://www.youtube.com/embed/YU-T6iRA41I?si=MffMm3mTpxd2zGTn"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full max-w-6xl Mobile:h-72 shadow-lg m-auto"
            ></iframe>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
