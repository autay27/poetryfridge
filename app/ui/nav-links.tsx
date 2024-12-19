'use client';


import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import styles from '@/app/ui/topnav.module.css';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/play' },
  {
    name: 'Compose',
    href: '/play/compose'
  },
  { name: 'Get Words', href: '/play/get-words' },
  { name: 'My Poems', href: '/play/my-poems' },
  { name: 'Settings', href: '/play/settings' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
                styles.topNavItem,
                {
                  [styles.currentTopNavItem] : pathname.endsWith(link.href)
                }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
