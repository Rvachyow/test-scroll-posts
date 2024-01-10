import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { cutString } from "../../lib/stringLib";

interface IPost {
  text: string;
  number: number;
  title: string;
  style: any;
}

export const Post = ({ text, number, title, style }: IPost) => {
  return (
    <ListItem style={style} alignItems="center">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={`${number}.${title}`}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Ali Connors
            </Typography>
            {cutString(text)}
          </>
        }
      />
      <Link to={`fullpost/${number}`}>
        <Button>просмотр</Button>
      </Link>
    </ListItem>
  );
};
