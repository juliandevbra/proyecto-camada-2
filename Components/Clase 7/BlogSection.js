import { posts } from './Posts'
import LikeButton from './LikeButton'
import './BlogStyles.css'; // css vanilla
import * as styles from './BlogStyles';// inline js style
import BlogStyles from './BlogStyles.module.css' // css module


const BlogSection = () => {
  return (
    <>
    {console.log(BlogStyles)}
      <h1 
        // className='title' // css vanilla
        // style={style.title} // inline js style
        className={BlogStyles.title} // css module
      >Blog de gatitos</h1>
      <ul >
        {posts.map(post => (
          <section 
            // className='post-card'// css vanilla
            // style={styles.postCard}// inline js style
            className={BlogStyles.postCard} // css module
            key={post.id}
          >
            <h2 className='post-title'>{post.title}</h2>
            <p className='post-body'>{post.body}</p>
            <p className='post-writer'>{post.user.name} {post.user.lastname}</p>
            <img src={post.img} alt={post.title} className='post-img' />
            <LikeButton />
          </section>
        ))}
      </ul>
    </>
  )
}
export default BlogSection