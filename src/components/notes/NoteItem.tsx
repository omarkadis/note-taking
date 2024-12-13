import { useContext, useId } from "react";
import classes from "./NoteItem.module.scss";
import { motion } from "framer-motion";
import { MainButton } from "../ui/MainButton";
import { SecondaryButton } from "../ui/SecondaryButton";
import { Link } from "react-router-dom";
import { ProfileLink } from "../ui/ProfileLink";
import "react-toastify/dist/ReactToastify.css";

type NoteItemProps = {
  id: number;
  readonly title: string;
  readonly text: string;
  readonly favourite: boolean;
};

export const NoteItem = ({ id, title, text, favourite }: NoteItemProps) => {
  return (
    <motion.li
      layout
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
      className={`${classes.note} ${
        favourite ? classes.favouriteNote : undefined
      }`}
    >
      <div className={classes.header}>
        <h2>{title}</h2>
      </div>
      <div className={classes.content}>
        <p>{text}</p>
      </div>
      <div className={classes.buttons}>
        <Link to={`/notes/${id}`}>
          <MainButton title="Details" />
        </Link>

        {/* <SecondaryButton onClick={deleteHandler} type="button" title="Delete" /> */}
      </div>
    </motion.li>
  );
};
