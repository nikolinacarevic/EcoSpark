'use client'
import { Component, ReactNode } from "react";

export interface CommentsProps {

}
export interface CommentsState {
    comments: Comment[];
}

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}


class AboutUs extends Component<CommentsProps, CommentsState> {

    constructor(props: CommentsProps) {
        super(props);
        this.state = {
            comments: [],
        };
    }
    componentDidMount(): void {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('SOmething went wrong');
        })
        .then((data) => {
            this.setState({
                comments: data,
            });
        })
        .catch((error) => {
            console.log(error);
        });

    }
    render() {
        
        return (
            <div>
                <h1>About</h1>
                <p>Customer reviews: </p>
                {this.state.comments.map((comment)=>(
                    <p key={comment.id}>{comment.body}</p>
                ))}
                
            </div>
        );
    }
    
}

export default AboutUs;