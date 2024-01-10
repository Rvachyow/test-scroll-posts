import { Post } from "../../shared/ui/post";
import CircularProgress from "@mui/material/CircularProgress";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useGetPostQuery } from "../../app/store/postApi";
import styles from "./styles.module.scss";

const Row = ({ style, index }: { style: object; index: number }) => {
  const { data = [] } = useGetPostQuery();
  console.log(data);

  return (
    <Post
      style={style}
      text={data[index].body}
      title={data[index].title}
      number={data[index].id}
    ></Post>
  );
};

export const PostFeed = () => {
  const { isLoading } = useGetPostQuery();
  if (isLoading) return <CircularProgress color="inherit" />;

  return (
    <div className={styles.postfeed}>
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <List
            className="List"
            height={height}
            itemCount={100}
            itemSize={120}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};
