import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  cardImage: {
    objectFit: 'cover',
    width: '30vw',
    },
  cardBody: {
    width: '80vw',
    height: '50vh',
    },
    fullScreen: {
      minHeight : '100vh',
    } ,
    parent: {
      height : '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      flexGrow:'1',
      fontSize: '4rem',
      maxWidth: '35%',
      margin: '0 auto',
      fontFamily: 'Oooh Baby',
      color:'#fff',
      fontWeight: '900',
      textShadowColor: 'rgb(178, 101, 79)',
      textShadowRadius:'10'
      
    },
    container: {
      textAlign: 'center',
    },
    goDown: {
      fontSize: '4rem',
      color: '#fff'
    },
    parentTwo: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeline: {
      transform: "rotate(90deg)"
    },
    timelineContentContainer: {
      textAlign: "left"
    },
    timelineContent: {
      display: "inline-block",
      transform: "rotate(-90deg)",
      textAlign: "center",
      minWidth: 50
    },
    timelineIcon: {
      transform: "rotate(-90deg)"
    }
}));