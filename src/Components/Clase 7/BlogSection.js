import { posts } from './Posts'
import LikeButton  from './LikeButton'
// import './BlogStyles.css'
import styles from './BlogStyles.module.css'

const BlogSection = () => {
  return (
    <>
      <h1 className={styles.title} >Blog de gatitos</h1>
      <ul>

        {posts.map(post => (
          <section className={styles.postCard} key={post.id}>
            <h2 className='post-title'>{post.title}</h2>
            <p className='post-body'>{post.body}</p>
            <p className='post-writer'>{post.user.name} {post.user.lastname}</p>
            <img src={post.img} alt={post.title} className='post-img'/>
            <LikeButton />
          </section>
        ))}
      </ul>
    </>
  )
}

export default BlogSection