import React from 'react';
import Link from 'next/link';
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from 'next/navigation';

const MainMenu = ({ style = '' }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>

        <li className={router.pathname === '/login' ? 'current' : ''}>
          <Link href="/others-pages/login">Account</Link>
        </li>
        
        <li className={router.pathname === '/history' ? 'current' : ''}>
          <Link href="/history">History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
