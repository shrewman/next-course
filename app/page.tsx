import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <Link href="users" className="btn btn-sm btn-link">
          Users
        </Link>
        <ProductCard></ProductCard>
      </main>
    </>
  );
}
