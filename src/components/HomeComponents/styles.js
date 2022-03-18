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
    width: '100vw',
    height: '100vh'
    },
    fullScreen: {
      minHeight : '100vh',
    } ,
    parent: {
      minHeight : '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${require(process.env.PUBLIC_URL + "./../../assets/img/bg.png")})`,
    },
    title: {
      textAlign: 'center',
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
    goDown: {
      fontSize: '7rem',
      color: '#fff'
    },
}));