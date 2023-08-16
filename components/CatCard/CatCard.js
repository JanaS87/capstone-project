import Link from "next/link";

export default function CatCard({ cat }) {
  return (
    <Link href={`/cats/${cat.id}`}>
      <h3>{cat.name}</h3>
    </Link>
  );
}
