import React, {useState} from 'react'
import { Avatar, CardHeader, IconButton, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { Comment, Favorite, FavoriteBorder } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function PostImage({tabValue, submit}) {

    const [description, setDescription] = useState("")
    const [imageUrl, setImageURL] = useState("")

         const classes = useStyles();

    function OnSubmit(event) {
      event.preventDefault()
      submit({type:"url", imageUrl, description})
      setDescription("")
      setImageURL("")

    }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={OnSubmit}>
      <div className={classes.column} ><TextField id="filled-basic" label="description" variant="filled" value={description} onChange={e => setDescription(e.target.value) } type ="text" name = "description" placeholder="description" /></div>
      <div className={classes.column} ><TextField id="filled-basic" label="image url" variant="filled" value={imageUrl} onChange={e => setImageURL(e.target.value) } type ="text" name = "imageURL" placeholder="image url" /></div>
      <Button type="submit" className={classes.column}>Post</Button>
    </form>
  )
}