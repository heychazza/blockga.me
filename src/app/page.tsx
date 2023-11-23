import Cookies from '@/img/cookies.jpeg';
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="relative overflow-hidden h-screen flex flex-col items-center justify-center">
                <Image className="w-40 mx-auto mb-5" alt="Logo" src={Cookies}/>

                <h1 className="font-bold mb-2 text-center text-3xl">Broke Boy Cookies</h1>
                <p className="italic w-1/3 text-center mx-auto mb-5">I mean, if you're a broke boy.. just say so? 100% not Costco stolen ingredients.</p>

                <div className="pointer-events-none w-2/3">
                    <iframe className="w-full aspect-video"
                            src="https://www.youtube.com/embed/OW7o1jsfYVo?si=FsydQSWONfGPSd2D&playlist=OW7o1jsfYVo&autoplay=1&mute=0&controls=0&loop=1"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                            allowFullScreen></iframe>
                </div>


            </div>
        </main>
    )
}
