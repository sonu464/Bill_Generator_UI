import Link from "next/link"

export default function Home() {
  console.log("hello")
  return (
    <div className="">
      hello
      <p> <Link href="/register"> Register </Link> </p>
      <p> <Link href="/login"> Login </Link> </p>
    </div>
  );
}
