import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://ojcodes.vercel.app/"
            target="_blank"
          >
            <Image
              src="/ojcodes-logo.svg"
              alt="OJ Codes"
              width={50}
              height={75}
              priority
            />
          </a>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          Delightful Dashboards
        </div>
      </div>
      <section className="grid grid-cols-3 gap-8">
        <Link href="/profile">
        <div className="flex flex-col">
        <Image
            src="/profile-page-mockup-laptop.jpg"
            alt="OJ Codes"
            width={400}
            height={300}
            quality={80}
            priority
            className="w-full h-[20vh] object-cover rounded"
          />
        <h2 className="text-xl font-bold mt-4 text-center">Profile Page</h2>
        </div>
        </Link>
        <Link href="/crm">
          <div className="flex flex-col">
            <Image
              src="/profile-page-mockup-laptop.jpg"
              alt="OJ Codes"
              width={400}
              height={300}
              quality={80}
              priority
              className="w-full h-[20vh] object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-4 text-center">Profile Page</h2>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col">
            <Image
              src="/profile-page-mockup-laptop.jpg"
              alt="OJ Codes"
              width={400}
              height={300}
              quality={80}
              priority
              className="w-full h-[20vh] object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-4 text-center">Profile Page</h2>
          </div>
        </Link>
        <Link href="/profile">
        <div className="flex flex-col">
        <Image
            src="/profile-page-mockup-laptop.jpg"
            alt="OJ Codes"
            width={400}
            height={300}
            quality={80}
            priority
            className="w-full h-[20vh] object-cover rounded"
          />
        <h2 className="text-xl font-bold mt-4 text-center">Profile Page</h2>
        </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col">
            <Image
              src="/profile-page-mockup-laptop.jpg"
              alt="OJ Codes"
              width={400}
              height={300}
              quality={80}
              priority
              className="w-full h-[20vh] object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-4 text-center">Profile Page</h2>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col">
            <Image
              src="/profile-page-mockup-laptop.jpg"
              alt="OJ Codes"
              width={400}
              height={300}
              quality={80}
              priority
              className="w-full h-[20vh] object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-4 text-center">Profile Page</h2>
          </div>
        </Link>
      </section >

      <div className="relative z-[-1] flex place-items-center before:absolute">
        <h1 className="text-3xl font-bold">DELIGHTFUL DASHBOARDS</h1>
      </div>

    </main>
  );
}
