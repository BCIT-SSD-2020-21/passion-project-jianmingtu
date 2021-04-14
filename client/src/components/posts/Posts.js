import "./Posts.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";

const Posts = ({posts, cardClicked}) => {
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
                    <a href="#" className="card-post__category badge badge-pill badge-dark">Business</a>
                    <div className="card-post__author d-flex">
                      <a href="#" className="card-post__author-avatar card-post__author-avatar--small" >Written by Anna Kunis</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a className="text-fiord-blue" href="#">Conduct at an replied removal an amongst</a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...</p>
                    <span className="text-muted">28 February 2019</span>
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
