import Link from "next/link";
import classes from "./main-header.module.css";

function MainFooter() {
  return (
    <header className={classes.header}>
      <p className="center">&copy; 2023 MydevTH</p>
    </header>
  );
}
export default MainFooter;
