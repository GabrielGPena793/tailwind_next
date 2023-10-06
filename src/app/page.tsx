
export default function Home() {
  return (
    <div className="p-4 bg-slate-50 h-screen text-slate-900 flex flex-col items-center text-center dark:bg-slate-900 dark:text-slate-100 ">
      <div className="max-w-2xl ">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl ">
          Hello Tailwind
        </h1>
        <p className="mt-4 dark:text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis perspiciatis vitae voluptatum voluptas atque quis ipsum deserunt similique, natus voluptates, nostrum ullam dolor, ipsa assumenda aut repellendus illum labore.</p>
        <button className="bg-sky-500 px-4 py-2 text-white rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-sky-400 dark:text-sky-950">
          Sing in
        </button>
      </div>

    </div>
  )
}
