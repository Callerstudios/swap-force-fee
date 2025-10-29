import styles from "./Intro.module.css";
import sadSmiley from "../../assets/icons/sad.png";
import happySmiley from "../../assets/icons/happy.png";
import line from "../../assets/icons/graphLine.png";
import graduationCap from "../../assets/icons/graduation-cap.png";
import CircleInitial from "../CircleInitial/CircleInitial";
import Calculator from "../Calculator/Calculator";
import exchangeIcon from "../../assets/icons/exchange.png";
import networkIcon from "../../assets/icons/network.png";
import Compare from "../Compare/Compare";
import Compare2 from "../Compare/Compare2";
import SaveStory from "../SaveStory/SaveStory";
import FeeStructure from "../../FeeStructure/FeeStructure";
import Test from "../Test/Test";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <Calculator />
      <p className={styles.blueHeader1}>Confused About Exchange Fees?</p>
      <p className={styles.text1}>
        We’ll explain everything in plain English. No jargon, no hidden costs.
      </p>
      <section className={styles.smileyInfo}>
        <div className={`${styles.smileyLeft} ${styles.smileys}`}>
          <img src={sadSmiley} alt="Sad Smiley" />
          <span>
            <img src={line} alt="Graph Line" />
          </span>
        </div>
        <div className={`${styles.smileyRight} ${styles.smileys}`}>
          <img src={happySmiley} alt="Happy Smiley" />
          <span>
            <p className={styles.percent}>0.3%</p>
            <p className={styles.clear}>Clear</p>
          </span>
        </div>
      </section>
      <section className={styles.section1}>
        <div className={styles.startLearning}>
          <img src={graduationCap} alt="Graduation Cap" />
          <p>Start Learning</p>
        </div>
        <p className={styles.fees}>Calculate fees now</p>
        <div className={styles.people}>
          <span className={styles.circles}>
            <CircleInitial initial="J" left="0" />
            <CircleInitial initial="M" left="20px" />
            <CircleInitial initial="D" left="40px" />
            <CircleInitial initial="+" left="60px" />
          </span>
          <div className={styles.participant}>
            <p>10,000+ traders trust us</p>
          </div>
        </div>
      </section>
      <section className={styles.section1}>
        <h2 className={`blue ${styles.blueHeader1}`}>
          What Are You Paying For?
        </h2>
        <p className={styles.text1}>
          Three main types of crypto fees explained simply
        </p>
        <div className={styles.feeExplain}>
          <span className={styles.exchange}>
            <img src={exchangeIcon} alt="Exchange Icon" />
          </span>
          <p className={styles.text2}>Trading Fees</p>
          <p className={styles.text1}>
            The fee you pay to make a swap. Usually 0.5-2% of your trade.
          </p>
          <div className={styles.example}>
            <div className={styles.startLearning}>
              <p>See Example</p>
            </div>
            <p>Example: $100 swap = £1-2 fee on most platforms</p>
            <p>VitalSwap charges just 0.3% - that's $0.30 on a $100 swap</p>
            <div className={styles.vitalPercent}>
              <p>VitalSwap: 0.3%</p>
            </div>
          </div>
        </div>
        <div className={styles.feeExplain}>
          <span className={styles.exchange}>
            <img src={networkIcon} alt="Exchange Icon" />
          </span>
          <p className={styles.text2}>Network Fees</p>
          <p className={styles.text1}>The cost to process your transaction.</p>
          <div className={styles.example}>
            <div className={styles.startLearning}>
              <p>Learn more</p>
            </div>
            <p>
              <span style={{ fontWeight: 600 }}>Think of it as:</span>
              Postage for your dollar
            </p>
            <p>
              Network fees vary by traffic. We show you the exact amount before
              confirming
            </p>
            <div className={styles.noMarkup}>
              <p>No markup</p>
            </div>
          </div>
        </div>
        <div className={styles.feeExplain}>
          <span className={styles.exchange}>
            <img src={networkIcon} alt="Exchange Icon" />
          </span>
          <p className={styles.text2}>Hidden Fees</p>
          <p className={styles.text1}>
            Some platforms add 'spread' or conversion fees they don't tell you
            about
          </p>
          <div className={styles.example}>
            <div className={styles.startLearning}>
              <p>See the truth</p>
            </div>
            <p>
              <span style={{ fontWeight: 600 }}>These can add:</span>
              0.5-1% extra to your cost
            </p>
            <p>
              Many platforms hide these in the exchange rate. VitalSwap never
              does this.
            </p>
            <div className={styles.vitalPercent}>
              <p>VitalSwap: $0 Hidden</p>
            </div>
          </div>
        </div>
        <div className={styles.startLearning}>
          <img src={graduationCap} alt="Graduation Cap" />
          <p>Start Learning</p>
        </div>
        <p>Takes 30 seconds</p>
      </section>
      <section className={styles.costLess}>
        <h2 className={`blue ${styles.blueHeader1}`}>
          Why VitalSwap Costs Less
        </h2>
        <p className={styles.text2}>Compare different pricing models</p>
        <div className={styles.compareContainer}>
          <Compare />
          <Compare2 />
        </div>
        <div className={styles.startLearning}>
          <img src={graduationCap} alt="Graduation Cap" />
          <p>Start with Fair Fees @Samic</p>
        </div>
      </section>
      <section className={styles.savingStories}>
        <p className={styles.blueHeader1}>Real Saving Stories</p>
        <p>See how much others save</p>
        <div className={styles.storyContainer}>
          <SaveStory
            name="Godwin Desi"
            role="Developer"
            story="I was paying £45/month in fees. With VitalSwap, I pay $12. That's $400/year saved!"
            summary="Saves $33/month • £400/year"
          />
          <SaveStory
            name="Salatin isabella"
            role="Business Owner"
            story="The calculator showed me exactly what I'd save. No surprises, no regrets."
            summary="Saved $1,200 in 6 months"
          />
          <SaveStory
            name="Priya Samuel"
            role="Student"
            story="I love that fees are the same whether I trade $50 or $500. Fair and simple."
            summary="VitalSwap user for 14 months"
          />
        </div>
      </section>
      <section className={styles.feeStructure}>
        <p className={styles.blueHeader1}>Complete Fee Structure</p>
        <p>Tap any row to see details</p>
        <FeeStructure />
      </section>
      <section className={styles.feeStructure}>
        <p className={styles.blueHeader1}>Test Your Knowledge</p>
        <p>Unlock your personalized savings estimate</p>
        <Test />
      </section>
    </div>
  );
};

export default Intro;
