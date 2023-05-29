import Image from "next/image";

export default function Home() {
    return (
        <main className="pt-[60px]">
            <article className="px-8 mx-auto max-w-2xl">
                <section className="relative mb-6 h-80 flex justify-center items-center">
                    <div className="z-10 text-center px-8 drop-shadow-xl shadow-black">
                        <div className="uppercase text-sm mb-4">Welcome to</div>
                        <div className="text-4xl font-mplus font-medium">
                            A short self introduction of{" "}
                            <span className="text-orange-500">me</span>
                        </div>
                    </div>
                </section>
                <section className="relative mt-6 flex flex-col gap-16">
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            <h2 className="text-4xl mb-6 font-extrabold drop-shadow-lg">
                                Ccctw Ma
                            </h2>
                            <p className="font-bold">
                                Front End Engineer (Postgraduate/Software)
                            </p>
                        </div>
                        <Image
                            className="inline-block  ml-8 rounded-full border-2 border-white border-solid"
                            width={100}
                            height={100}
                            src="https://avatars.githubusercontent.com/u/50932721?v=4"
                            alt="https://avatars.githubusercontent.com/u/50932721?v=4"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h2
                            className="w-fit text-2xl font-extrabold drop-shadow-lg leading-6 underline underline-offset-[12px] decoration-gray-600 decoration-4"
                            title="introduction"
                        >
                            Intro
                        </h2>
                        <p className="mt-8 text-lg font-semibold indent-8 text-justify">
                            I am currently pursuing a Master&apos;s degree in
                            Software Engineering, and I am very interested in
                            the field of front-end development. I am passionate
                            about learning new front-end knowledge and using
                            coding to build the products I envision. My ultimate
                            goal is to become a full-stack engineer and have the
                            opportunity to share my knowledge with others.
                            {/* My nickname is{" "}
                            <span className="text-orange-500">ccctw</span>{" "}
                            because I strongly believe that code can change the
                            world. */}
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h2
                            className="w-fit text-2xl font-extrabold drop-shadow-lg leading-6 underline underline-offset-[12px] decoration-gray-600 decoration-4"
                            title="biography"
                        >
                            Bio
                        </h2>
                        <div className="flex mt-8 text-lg font-semibold">
                            <span className="inline-block mr-8">1999</span>
                            <span className="inline-block text-justify">
                                Bron in{" "}
                                <a
                                    className="text-orange-500"
                                    title="https://en.wikipedia.org/wiki/Xinyang"
                                    target="_blank"
                                    href="https://en.wikipedia.org/wiki/Xinyang"
                                    aria-label="https://en.wikipedia.org/wiki/Xinyang"
                                >
                                    &thinsp;Xinyang
                                </a>
                                ,&thinsp; Henan, &thinsp;China.
                            </span>
                        </div>
                        <div className="flex mt-4 text-lg font-semibold">
                            <span className="inline-block mr-8">2017</span>
                            <span className="inline-block text-justify">
                                Completed high school courses at
                                <a
                                    className="text-orange-500"
                                    title="http://www.xygz.com.cn/"
                                    href="http://www.xygz.com.cn/"
                                    target="_blank"
                                >
                                    &thinsp; XYGZ
                                </a>
                                &thinsp;(Xinyang Senior High School) in Xinyang
                                City, Henan Province
                            </span>
                        </div>
                        <div className="flex mt-4 text-lg font-semibold">
                            <span className="inline-block mr-8">2021</span>
                            <span className="inline-block text-justify">
                                Completed college courses in information
                                engineering College of
                                <a
                                    className="text-orange-500"
                                    title="http://www.zzu.edu.cn/"
                                    href="http://www.zzu.edu.cn/"
                                    target="_blank"
                                >
                                    &thinsp; ZZU
                                </a>
                                &thinsp;(Zhengzhou University), &thinsp;
                                majoring in software engineering
                            </span>
                        </div>
                        <div className="flex mt-4 text-lg font-semibold">
                            <span className="inline-block mr-[34px]">Now</span>
                            <span className="inline-block text-justify">
                                Studying for a Master&apos;s degree in Software
                                Engineering at
                                <a
                                    className="text-orange-500"
                                    title="http://www.bupt.edu.cn/"
                                    href="http://www.bupt.edu.cn/"
                                    target="_blank"
                                >
                                    &thinsp; BUPT
                                </a>
                                (Beijing University of Posts and
                                Telecommunications)
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="w-fit text-2xl font-extrabold drop-shadow-lg leading-6 underline underline-offset-[12px] decoration-gray-600 decoration-4">
                            I ♥
                        </h2>
                        <p className="mt-8 text-lg font-semibold indent-8">
                            <a
                                className="text-red-400"
                                href="https://music.163.com/playlist?id=985713476&userid=637066403"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Music
                            </a>
                            &nbsp; Film &nbsp; Basketball &nbsp; LOL
                        </p>
                    </div>
                </section>
            </article>
        </main>

        // <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
        //   <div classNameName="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        //     <p classNameName="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        //       Get started by editing&nbsp;
        //       <code classNameName="font-mono font-bold">src/app/page.tsx</code>
        //     </p>
        //     <div classNameName="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        //       <a
        //         classNameName="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         By{' '}
        //         <Image
        //           src="/vercel.svg"
        //           alt="Vercel Logo"
        //           classNameName="dark:invert"
        //           width={100}
        //           height={24}
        //           priority
        //         />
        //       </a>
        //     </div>
        //   </div>

        //   <div classNameName="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        //     <Image
        //       classNameName="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        //       src="/next.svg"
        //       alt="Next.js Logo"
        //       width={180}
        //       height={37}
        //       priority
        //     />
        //   </div>

        //   <div classNameName="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        //     <a
        //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
        //         Docs{' '}
        //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Find in-depth information about Next.js features and API.
        //       </p>
        //     </a>

        //     <a
        //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
        //         Learn{' '}
        //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Learn about Next.js in an interactive course with&nbsp;quizzes!
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
        //         Templates{' '}
        //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Explore the Next.js 13 playground.
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
        //         Deploy{' '}
        //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Instantly deploy your Next.js site to a shareable URL with Vercel.
        //       </p>
        //     </a>
        //   </div>
        // </main>
    );
}
