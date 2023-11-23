'use client';

export default function Home() {
    return (
        <main>
            <div className="relative isolate overflow-hidden h-screen">
                <img className="w-52 mx-auto" src="https://pbs.twimg.com/media/F_jBCNLXoAAR7OK?format=jpg&name=medium" />
                
                <div className="px-6 lg:px-8">
                    <div className="flex items-center flex-col justify-center h-screen">
                        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-4xl">
                            
                            <h1 className="my-3 lg:my-5 text-2xl lg:text-4xl font-bold font-mono tracking-tight text-center text-white capitalize leading-normal sm:leading-tight">BlockGame Labs</h1>
                            <div className="lg:text-lg space-y-3 leading-7 sm:leading-8 text-center w-8/12 mx-auto lg:leading-normal text-gray-900">
                                <p className="font-medium capitalize">Broke Boy Cookies</p>
                                <p>After 2 years in the making, we are finally releasing them! Use code Poki for 50% off ;)</p>
                            </div>
                            <div className="flex items-center justify-center mt-6 gap-x-6">
                                <a href="https://x.com/kavosyt/status/1727342704948855049?s=46" className="text-xs font-semibold leading-7 uppercase font-mono text-gray-900 hover:underline">Wtf? <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
