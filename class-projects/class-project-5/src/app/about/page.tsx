'use client'
import React, { Component } from "react";

export interface CommentsProps {}

export interface CommentsState {
  comments: Comment[];
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  // Assuming an imageUrl property for the user image
  imageUrl: string;
}

class AboutUs extends Component<CommentsProps, CommentsState> {
  constructor(props: CommentsProps) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        
        const commentsWithImages = data.map((comment: Comment) => ({
          ...comment,
          imageUrl: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-orange.png" 
        }));
        this.setState({
          comments: commentsWithImages,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const customerReviewsStyle = {
      paddingTop: "20px",
      fontSize: "2em",
      color: "darkorange",
      paddingBottom: "5px",
    };

    const commentContainerStyle = {
      border: "1px solid orange",
      padding: "10px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center", // Aligns image and text vertically
    };

    const commentEmailLabelStyle = {
      fontWeight: "bold",
      fontSize: "1.2em",
      color: "black",
      textAlign: "left",
    };

    const commentEmailTextStyle = {
      fontSize: "1em",
      color: "gray",
      textAlign: "left",
    };

    const commentBodyStyle = {
      fontSize: "1em",
      color: "black",
      textAlign: "left",
    };

    return (
      <div>
        <h1>About</h1>
        <p style={customerReviewsStyle}>Customer reviews: </p>

        {this.state.comments.map((comment) => (
          <div key={comment.id} style={commentContainerStyle}>
            <img src={comment.imageUrl} alt="User" style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px" }} />
            <div>
              <div style={commentEmailLabelStyle}>
                <strong>E-mail: </strong>
                <span style={commentEmailTextStyle}>{comment.email}</span>
              </div>
              <p style={commentBodyStyle} key={comment.id}>
                {comment.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AboutUs;