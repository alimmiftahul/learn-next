import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto my-[380px] flex w-[480px] flex-col text-center">
      <div className="flex flex-row gap-2">
        <h2 className="w-[480px] text-[48px] font-bold">Not Found</h2>
        <span className="border-[1px] border-black"></span>
        <p className="ml-4 flex w-[400px] items-center justify-start text-center text-[40px]">
          404
        </p>
      </div>
      <Link href="/" className="justify-start text-start">
        Return Home
      </Link>
    </div>
  );
}
