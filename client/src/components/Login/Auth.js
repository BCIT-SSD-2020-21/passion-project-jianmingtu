import React, {useState, useEffect} from 'react'
import { Avatar, CardHeader, IconButton, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { Comment, Favorite, FavoriteBorder } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    padding: 10,
    margin: "auto"
  },
}));

export default function Auth({tabValue, submit, error}) {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

     const classes = useStyles();

    const OnSubmit = event => {
      event.preventDefault()
      if(tabValue===0)
      {
        submit({password, type:"login", username})
      }
      else
      {
        submit({email, password, type:"sigup", username})
      }
      setEmail("")
      setUsername("")
      setPassword("")
    }

  return (
    <form className={classes.root} onSubmit={OnSubmit}>
      {tabValue === 1 && <TextField fullWidth label="email" variant="filled" value={email} onChange={e => setEmail(e.target.value) } name = "email" placeholder="email" />}

      <TextField label="username" variant="filled" fullWidth value={username} onChange={e => setUsername(e.target.value) } type ="text" name = "username" placeholder="username" />

      <TextField label="password" variant="filled" fullWidth value={password} onChange={e => setPassword(e.target.value) } type ="password" name = "password" placeholder="password" />

      {!!error && <Typography>{error}</Typography>}
        <Button type="submit" fullWidth color="primary">Submit</Button>
    </form>
  )
}