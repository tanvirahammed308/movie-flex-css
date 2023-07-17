import style from '@/app/style/navbar.module.css'
import Link from 'next/link';



const Navbar = () => {
   
    return (
        <nav className={style.navbar}>
            <div >
                <ul className={style.navbarList}>
                    <li className={style.navbarItem}>
                        <Link href="/" >
                            Home
                        </Link>

                    </li>
                    <li className={style.navbarItem}>
                        <Link href="/about">
                            About
                        </Link>

                    </li>
                    <li className={style.navbarItem}>
                        <Link href="/movie">
                            Movie
                        </Link>

                    </li>
                    <li className={style.navbarItem}>
                        <Link href="/contact">
                            Contact
                        </Link>

                    </li>

                </ul>

            </div>
            
        </nav>
    );
};

export default Navbar;