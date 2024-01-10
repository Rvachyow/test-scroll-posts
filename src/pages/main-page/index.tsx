import { PostFeed } from "../../widgets/post-feed";
import styles from "./styles.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <PostFeed />
    </div>
  );
};
