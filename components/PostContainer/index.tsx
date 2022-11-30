import Link from "next/link";
import styles from "../../styles/components/PostContainer.module.scss";
import { AiOutlineArrowRight, AiFillEye } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import Image from "next/image";
import { PostContainerProps } from "./PostContainer.types";

export default function Post({
  title,
  description,
  category,
  views,
  image,
}: PostContainerProps) {
  return (
    <>
      <div className={styles.blog_post_container}>
        <div className={styles.image_container}>
          <Link href="/">
            <Image
              src={image}
              width={350}
              height={215}
              alt="building"
              className={styles.post_image}
              priority
            />
          </Link>
        </div>
        <div className={styles.text_container}>
          <span className={styles.category}>{category}</span>
          <Link href="/" className={styles.post_heading}>
            <h1>{title.length > 59 ? title.slice(0, 59) + "....." : title}</h1>
          </Link>
          <Link href="/" className={styles.description}>
            <p>{description.slice(0, 100)}......</p>
          </Link>
          <div className={styles.link_save_btn_container}>
            <Link href="/" className={styles.learn_more}>
              Learn More <AiOutlineArrowRight />
            </Link>
            <div className={styles.save_btn_view_container}>
              <span className={styles.save}>
                <BsBookmark size={20} className={styles.save_icon} />
              </span>
              <hr />
              <span className={styles.views}>
                <AiFillEye size={25} /> {views}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
