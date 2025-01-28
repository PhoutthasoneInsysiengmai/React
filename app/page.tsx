import Link from "next/link";
import Counter from "./components/counter";

export default function Home() {
  return (
   <div>
    <h1>hello, World</h1>
    <p>This is my first web page in Next.JS</p>
    <p><Link href="/about">Go to about</Link></p>
    <p><Link href="/contact">Go to contact</Link></p>

      <Counter/>
      
   </div>
  );
}
