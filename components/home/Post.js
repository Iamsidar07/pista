import { View } from 'react-native'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import PostImage from './PostImage'
import Divider from './Divider'
 

const Post = ({post}) => {
  
  return (
    <View style={{
      backgroundColor:"black",
    }}>
      <PostHeader profilePicture={post.profilePicture} username={post.username} isVerified={post.isVerified}/>
      <PostImage imageUrl={post.image}/>
      <PostFooter username={post.username} caption={post.caption} likes={post.likes} comments={post.comments} postedTime={post.postedTime}/>
      <Divider />
    
    </View>
  )
}

export default Post