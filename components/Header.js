import Link from "next/link";
import { redirect } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default async function Header() {
  async function search(formData) {
    "use server";

    const q = formData.get("q");
    redirect(`/search?q=${q}`);
  }
  return (
    <nav className="flex justify-between items-center border rounded border-slate-300 px-4 py-2 my-4">
      <h1 className="font-bold text-lg">
        <Link href="/">ChanFlix Movies</Link>
      </h1>
      <form action={search} className="flex gap-2">
        <Input type="text" name="q" placeholder="Search Movies" />
        <Button type="submit">Search</Button>
      </form>
    </nav>
  );
}
