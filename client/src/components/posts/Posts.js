import "./Posts.css";
import { useHistory } from 'react-router-dom'

const Posts = ({posts, cardClicked}) => {

   const history = useHistory()

  const Badge = (lost) => {
    if (lost) 
      return 'badge-danger';
    else 
        return 'badge-success';
  }

  return (
    <main>
    <div className="container-fluid">
      <div className="row">
        {
          posts && posts.map(
            post => 
            (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card card-small card-post card-post--1">
                  <div className="card-post__image" style={{backgroundImage: `url(${post.upload_image_file})`}}>
                    <a href="#" className={`card-post__category badge badge-pill ${Badge(post.lost)} `}>{post.lost?'LOST':'FOUND'}</a>
                    <a href="#" className={`card-post__more badge badge-pill badge-primary `}  onClick={()=>history.push(`/post/${post._id}`)} >More</a>
                    <div className="card-post__author d-flex">
                      <a href="#" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: `url('images/avatars/avatar.png')`}} >Written by {post.username}</a>
                    </div>
                  </div>
                  <div className="card-body" style={{paddingBottom: 0}}>
                    <h5 className="card-title">
                      <a className="text-fiord-blue" style={{fontSize: '1.2rem'}} href="#"># {post._id}</a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">{post.pet_name} ({post.gender}) was seen at {post.address_last_seen}.</p>
                    <span className="text-muted" >{(new Date(post.timestamp).toLocaleDateString('en-US'))} by {post.user?.username}</span>
                  </div>
                </div> 
              </div>     
            )
          )
        }

        </div>
      </div>    
    </main>
  );
};

export default Posts;
