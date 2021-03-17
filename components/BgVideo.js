import styles from '../styles/Home.module.scss'

const BgVideo = () => {
  return(
    <video className={styles.videoTag} autoPlay loop muted>
      <source src="./plane.mp4" type='video/mp4' />
    </video>
  )
}

export default BgVideo;