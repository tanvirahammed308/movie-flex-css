import style from "@/app/style/navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo10.png"
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className={style.main_header} >
            <div className={style.navbar_brand}>
                <Link href='/'>
                    <Image src={logo} width={300} height={80} alt="this is header pic"/>
                </Link>
            </div>
            <Navbar></Navbar>
            
        </header>
    );
};

export default Header;