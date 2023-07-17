import commonStyle from "@/app/style/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curEle) => {
  const { id, type, synopsis, title } = curEle.jawSummary;
  return (
    <>
      <div className={commonStyle.card}>
        <div className={commonStyle.card_image}>
            <Image src={curEle.jawSummary.backgroundImage.url} alt={title} width={415} height={200}/>

        </div>
        <div className={commonStyle.card_data}>
          <h2>{title.substring(0,40)}</h2>
          <p>{synopsis.substring(0,150)}</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
