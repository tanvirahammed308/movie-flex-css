import commonStyle from '@/app/style/common.module.css'
import Link from 'next/link';

const notFound = () => {
    return (
        <section className={commonStyle.container2}>
        <div className={commonStyle.error_page}>
            <h1>
                404 page
            </h1>
            <h2>Not found</h2>
            <p>Could not found the request</p>
            <Link href="/">
            <button>
                Go to Home page
            </button>
            
            </Link>

        </div>
        
    </section>
    );
};

export default notFound;