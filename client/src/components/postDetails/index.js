import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, CardHeader, IconButton, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'



const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    height: 600,
    display: "flex",
  },
  media: {
    width: "60%"
  },
  otherData: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    justifyContent: "space-between",
    margin: "0 10px",
  },
  commentForm: {
    width: "100%"
  },
  comment: {
    margin: "10px 0"
  },
  comments: {
    overflowY: "scroll"
  }
})

export default function PostDetails({user, className, post, submitComment, likeClicked}) {
  const classes = useStyles()

  const onComment = data => {
    submitComment({postId: post._id, text: data.comment})
  }

  return (
    <Card className={`${classes.root} ${className}`}>

        <CardMedia className={classes.media}
          component="img"
          image={post.upload_image_file}
        />

        <div className={classes.otherData}>
          <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {post.user.username[0]}
            </Avatar>
          }
          title={post.user.username}
        />
        <CardContent className={classes.comments}>
          


        </CardContent>
        <div>
        <CardActions>
        <IconButton aria-label="like" className={classes.margin} onClick={() => likeClicked({postId: post._id})}>
          {post.liked ? <Favorite fontSize="large" /> : <FavoriteBorder fontSize="large" /> }
        </IconButton>
        <Typography variant="body2" color="textPrimary" component="p">
          Liked by <b>{post.totalLikes}</b> people
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          <b>{post.totalComments}</b> comments
        </Typography>
      </CardActions>
 
      </div>
      </div>
      
    </Card>
  )
}