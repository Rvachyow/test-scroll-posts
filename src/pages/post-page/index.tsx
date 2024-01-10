import { PostFull } from "../../widgets/post-full";
import styles from "./styles.module.scss";

export const PostPage = () => {
  return (
    <div className={styles.postpage}>
      <PostFull />
    </div>
  );
};
