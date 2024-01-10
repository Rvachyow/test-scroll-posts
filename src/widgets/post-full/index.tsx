import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useGetPostQuery } from "../../app/store/postApi";
import { IData } from "../../app/store/types";
import styles from "./styles.module.scss";

export const PostFull = () => {
  const { id } = useParams();

  const { data = [] } = useGetPostQuery();
  const findOnePost = data.find((item: IData) => item.id == Number(id));

  return (
    <>
      <Link to={"/"}>
        <Button style={{ width: "50px" }} variant="contained">
          Back
        </Button>
      </Link>
      <div className={styles.postfull}>
        <span className={styles.text}>
          <h3 className={styles.id}>{findOnePost?.id}.</h3>
          <h3 className={styles.title}>{findOnePost?.title}</h3>
        </span>
        <p>{findOnePost?.body}</p>
      </div>
    </>
  );
};
