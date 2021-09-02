import React, {useState, useEffect,useCallback} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const useStyles = makeStyles((theme) => ({
  menuBtn: {
    position: "fixed",
    bottom: "10px",
    right: "15px",
    zIndex: 900,
    "&:hover": {
      opacity: 0.5,
    },
  },
}));

const BackTopBtn = ({scroll}) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(true)

  const toggleView = useCallback(
    () => {
      if(scroll > 300){
        setVisible(true)
      } else {
        setVisible(false)
      }
    },
    [scroll],
  )

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(()=> {
    window.addEventListener('scroll', toggleView)

    return () => {
      window.removeEventListener('scroll', toggleView)
    }
  } , [scroll, toggleView])

  return (
    <>
     {visible && 
        <Fab
          size="small"
          color="primary"
          aria-label="menu"
          className={classes.menuBtn}
          onClick={scrollToTop}
        >
          <ArrowDropUpIcon />
        </Fab>
      }
    </>
  );
};

export default BackTopBtn;
