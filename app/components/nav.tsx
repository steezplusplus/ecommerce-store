import Link from "next/link";

import { Container } from "@/components/ui/container";
import { NavLinks } from "./nav-links";

const data = [
  {
    name: 'Link1',
    id: 'link1'
  },
  {
    name: 'Link2',
    id: 'link2'
  }
];

export function Nav() {
  return (
    <nav className="border-b">
      <Container>
        <ul className="px-4 sm:px-6 lg:px-8 flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-6 py-2">
          <li>
            <Link href="/">
              <h1 className="font-bold text-xl">STORE</h1>
            </Link>
          </li>
          <NavLinks data={data} />
        </ul>
      </Container>
    </nav>
  );
}
