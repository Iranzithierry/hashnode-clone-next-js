import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center  transition-all duration-300 bg-slate-100/90 dark:bg-dark-1 w-full mx-auto'>
      <div className="flex bg-white dark:bg-dark-0 flex-col  px-4 sm:px-8 md:px-16 xl:px-20 2xl:px-24 pt-1 sm:pt-4 md:pt-8 xl:pt-10 2xl:pt-16 items-center justify-between font-mono text-sm lg:flex w-full">
        <Navbar />
        <div>
          <div className="h-[2px] w-full bg-neutral-300 dark:bg-slate-700 absolute left-0" />
        </div>
      </div>
      <section className="flex bg-slate-100/90 mt-[1px] dark:bg-dark-1 flex-col z-10 max-w-[2236px] px-4 sm:px-8 md:px-16 xl:px-20 2xl:px-24 py-1 sm:py-4 md:py-8 xl:py-10 2xl:py-16 w-full items-center justify-between font-mono text-sm lg:flex">
        <article className="w-full mt-2 bg-neutral-100">
          {/*  */}
        </article>
      </section>
    </main>
  )
}
