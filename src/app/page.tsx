"use client";

import { PostOwnnerProps } from "@/libs/types"
import { CommentProps } from "@/libs/types"
import { ReplyProps } from "@/libs/types"

import Commentt from "@/components/Comment";

import PostOwnnerr from "@/components/PostOwnner";
export default function Home() {

  const postOwner: PostOwnnerProps = 
  {userImagePath : "/profileImages/Buranin.jpg",
    username : "Buranin Bunyoprakan 660610770" ,
    commentText : "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" ,
    likeNum : 100};

  const replies:ReplyProps[] = [
    {userImagePath : "/profileImages/puppy.jpg",
      username :"หมาน้อย" ,
      replyText : "จริงค้าบบบบบบบบ",
      likeNum : 0},

    {userImagePath : "/profileImages/popcat.png",
      username :"Cat Meme" ,
      replyText : "ลิซ่าาาาาา",
      likeNum : 2},
   ];

  const comments:CommentProps[] = [
    {userImagePath : "/profileImages/lisa.jpg",
     username :"Lisa",
     commentText : "จริงค่า" ,
     likeNum : 999 ,
     replies : [replies[0],replies[1]]},
 
    {userImagePath : "/profileImages/charliebrown.jpg",
       username :"Charlie Brown",
       commentText : "บ้าไปแล้ว" ,
       likeNum : 0 ,
       replies : []},
   ];

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnnerr {...postOwner}/>

        {comments.map((comment:CommentProps) => (<Commentt {...comment} />))}

      </div>
    </div>
  );
}
