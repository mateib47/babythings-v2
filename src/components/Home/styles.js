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
    parent: {
      minHeight : '100vh',
      backgroundImage: `url(${require(process.env.PUBLIC_URL + "./../../assets/img/bg.png")})`,
    }
}));