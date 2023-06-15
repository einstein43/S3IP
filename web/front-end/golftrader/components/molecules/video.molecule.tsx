import Link from "next/link";
import ReactPlayer from "react-player";
import styles from "../../public/styles/molecules/video.module.css";
function Video1() {
  return (
    <div id={styles.wrapper_div}>
      <video
        className={styles.video1}
        src="/arccos_video_1.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

export default Video1;
