import Header from "../../components/Header/Header"
import Intro from "../../components/Intro/Intro"
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
        <Header/>
        <Intro/>
    </div>
  )
}

export default Home