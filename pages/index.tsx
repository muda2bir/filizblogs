import HorizontalScroll from "../components/HorizontalScroll";
import PostContainer from "../components/PostContainer/index";
import TopHeading from "../components/TopHeading";
import styles from "../styles/Main.module.scss";

export default function Home() {
  return (
    <>
      {/* <HorizontalScroll /> */}
      <TopHeading heading="Trending" />
      <main className={styles.main}>
        <PostContainer
          title="Stock Market Today: Top 10 things to know before the market opens today"
          description="Stock Market News: Trends in the SGX Nifty indicate a negative opening for the broader index in India with a loss of 32 points as ripples of Covod unrest in China rattle global markets"
          image="https://images.moneycontrol.com/static-mcnews/2022/07/shutterstock_1171378096-653x435.jpg?impolicy=website&width=770&height=431"
          category="Business"
          views={299}
        />
        <PostContainer
          title="Clashes in Shanghai as COVID protests flare across China"
          description="The wave of civil disobedience is unprecedented in mainland China since President Xi Jinping assumed power a decade ago, as frustration mounts over his signature zero-COVID policy nearly three years into the pandemic."
          image="https://images.moneycontrol.com/static-mcnews/2022/11/Collage-Maker-27-Nov-2022-03.29-PM-770x435.jpg?impolicy=website&width=770&height=431"
          category="World"
          views={234}
        />
        <PostContainer
          title="
          Slideshow: The Toyota Innova Hycross’ SUV-like styling hides what it really is"
          description="It may have the trappings of a soft-roader but on the inside, it is every bit the family car it promises to be."
          image="https://images.moneycontrol.com/static-mcnews/2022/11/17-Toyota-new-Innova-HyCross.jpg"
          category="Automobile"
          views={132}
        />
        <PostContainer
          title="Job cuts don't mean mass layoffs in looming global recession"
          description="Almost three years after Covid-19 hit, companies around the world still complain that they can’t get the talent they need."
          image="https://images.moneycontrol.com/static-mcnews/2022/11/393770998.jpg?impolicy=website&width=770&height=431"
          category="World"
          views={678}
        />
        <PostContainer
          title="Photos: Inside view of the world's thinnest skyscraper"
          description="Despite its slender frame, Steinway Tower in Manhattan houses 46 ultra-luxurious residences."
          image="https://images.moneycontrol.com/static-mcnews/2022/04/pjimage-2022-04-07T101307.038.jpg"
          category="Lifestyle"
          views={345}
        />
        <PostContainer
          title="Meet Jayanti Chauhan, Bisleri owner's daughter, who refused to run the Rs 7,000 crore business"
          description="Jayanti Chauhan or JRC as she is popularly called, embarked on her Bisleri journey when she was 24, under the guidance of her father and Bisleri International's owner Ramesh Chauhan."
          image="https://images.moneycontrol.com/static-mcnews/2022/11/Collage-Maker-27-Nov-2022-07.45-PM-770x435.jpg?impolicy=website&width=770&height=431"
          category="Trends"
          views={455}
        />
      </main>
    </>
  );
}
