import { auth } from "@/server/auth";
import Logo from "./logo";
import UserButton from "./user-button";

export default async function Nav() {
  const session = await auth();

  console.log(session);
  if (!session) {
    return null;
  }

  return (
    <header className="bg-slate-500 py-4">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Logo />
          </li>

          <li>
            <UserButton user={session.user} expires={session.expires} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
