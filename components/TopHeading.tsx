import styles from "../styles/components/TopHeading.module.scss";

type TopHeadingProps = {
  heading: string;
};

export default function TopHeading({ heading }: TopHeadingProps) {
  return <h1 className={styles.top_heading}>{heading}</h1>;
}
