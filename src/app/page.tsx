export default function Home() {
    return (
        <main>
            <div className="relative isolate overflow-hidden bg-[#0A111C] h-screen">
                <svg className="absolute inset-0 -z-10 h-full w-full stroke-gray-100/10 [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1"
                                 patternUnits="userSpaceOnUse">
                            <path d="M.5 200V.5H200" fill="none"></path>
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth="0"></path>
                    </svg>
                    <rect width="100%" height="100%" strokeWidth="0"
                          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
                </svg>
                <div className="px-6 lg:px-8">
                    <div className="flex items-center flex-col justify-center h-screen">
                        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-4xl">
                            <svg className="w-16 h-16 mx-auto text-white" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M19.7655 0.447898C19.2605 0.344028 18.7396 0.344028 18.2345 0.447898C17.6507 0.567967 17.1289 0.860227 16.7141 1.09258L16.601 1.15574L2.54153 8.96657C2.50266 8.98816 2.46261 9.01022 2.42157 9.03283C1.98243 9.2747 1.43029 9.57882 1.00627 10.0389C0.639674 10.4368 0.362246 10.9082 0.192535 11.4219C-0.00375985 12.016 -0.00146325 12.6464 0.000363158 13.1477C0.000533889 13.1946 0.000700421 13.2403 0.000700421 13.2847V28.7067C0.000700421 28.7511 0.000533889 28.7969 0.000363158 28.8437C-0.00146325 29.3451 -0.00375985 29.9754 0.192536 30.5695C0.362247 31.0832 0.639677 31.5547 1.00627 31.9525C1.43029 32.4126 1.98244 32.7167 2.42157 32.9586C2.46261 32.9812 2.50266 33.0033 2.54153 33.0249L16.601 40.8357L16.7141 40.8988C17.1289 41.1312 17.6507 41.4235 18.2345 41.5435C18.7396 41.6474 19.2605 41.6474 19.7655 41.5435C20.3493 41.4235 20.8711 41.1312 21.2859 40.8988L21.399 40.8357L35.4585 33.0249C35.4757 33.0153 35.4931 33.0057 35.5107 32.9959C35.5329 32.9837 35.5555 32.9712 35.5784 32.9586C36.0176 32.7167 36.5697 32.4126 36.9937 31.9525C37.3603 31.5547 37.6378 31.0832 37.8075 30.5695C38.0038 29.9754 38.0015 29.3451 37.9996 28.8437C37.9995 28.7969 37.9993 28.7511 37.9993 28.7067V13.2847C37.9993 13.2403 37.9995 13.1946 37.9996 13.1477C38.0015 12.6464 38.0038 12.016 37.8075 11.4219C37.6378 10.9082 37.3603 10.4367 36.9937 10.0389C36.5697 9.57882 36.0176 9.27469 35.5784 9.03282L35.5769 9.03197C35.5364 9.00966 35.4968 8.98788 35.4585 8.96657L21.399 1.15574L21.2859 1.09257C20.8711 0.860223 20.3493 0.567966 19.7655 0.447898ZM18.4464 4.47742C18.7343 4.31746 18.8813 4.23664 18.9909 4.18376L19 4.17941L19.0091 4.18376C19.1187 4.23664 19.2657 4.31746 19.5536 4.47742L32.1871 11.496L18.9999 18.8222L5.81285 11.4961L18.4464 4.47742ZM3.80056 14.725L17.1 22.1136L17.1001 36.766L4.38691 29.7032C4.08301 29.5343 3.92785 29.4472 3.81899 29.3779L3.8098 29.372L3.80911 29.3611C3.80135 29.2323 3.80056 29.0543 3.80056 28.7067V14.725Z"
                                      fill="currentColor"/>
                            </svg>
                            <div className="mt-16 lg:mt-8 text-center">
                                <span className="rounded-full bg-gray-500/10 px-3 py-1 text-sm font-semibold leading-6 text-gray-500 ring-1 ring-inset ring-gray-500/20">Development Studio</span>
                            </div>
                            <h1 className="my-3 lg:my-5 text-2xl lg:text-4xl font-bold font-mono tracking-tight text-center text-white capitalize leading-normal sm:leading-tight">BlockGame Labs</h1>
                            <div className="lg:text-lg space-y-3 leading-7 sm:leading-8 text-center w-8/12 mx-auto lg:leading-normal text-gray-200">
                                <p className="font-medium capitalize">Where pixels and code unite!</p>
                                <p>We're a nimble, one-man studio with big impact, focusing on crafting sleek websites, engaging servers, and open-source game plugins. With platforms that have hit over a million monthly visitors, we turn your virtual dreams into scalable realities. Game on!</p>
                            </div>
                            <div className="flex items-center justify-center mt-6 gap-x-6">
                                <a className="text-xs font-semibold leading-7 uppercase font-mono text-white hover:underline">Coming Soon <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
