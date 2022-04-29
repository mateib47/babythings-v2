import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  timeline: {
    transform: "rotate(90deg)",
  },
  timelineContentContainer: {
    textAlign: "left",
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(-90deg)",
    textAlign: "center",
    minWidth: 50,
  },
  timelineIcon: {
    transform: "rotate(-90deg)",
  },
  stretch: { height: "100%" },
  item: { display: "flex", flexDirection: "column" },
}));
