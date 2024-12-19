import Link from 'next/link';
import NavLinks from './nav-links'
import styles from '@/app/ui/topnav.module.css';

export default function TopNav() {
  return (
    <div >
      <Link
        
        href="/"
      >
        <div >
          PF
        </div>
      </Link>
      <div className={styles.topNav}>
        <NavLinks />
        <div ></div>
        <form           action={async () => {
            'use server';
            //await signOut();
        }}>
          <button>
            <div className={styles.topNavItem}>Sign Out</div>
          </button>
        </form>
      </div>

    </div>
  );
}
