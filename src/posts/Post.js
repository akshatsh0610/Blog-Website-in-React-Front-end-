import './Post.css'
import '../images/sorrento.jpg'
export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={require('../images/sorrento.jpg')} alt=''></img>
      <div className='postInfo'>
          <div className='postCats'>
              <span className='postCat'>Solo trip ,</span>
              <span className='postCat'> Italy</span>
          </div>
          <span className='postTitle'>Lorem ipsum dolor sti</span>
          <hr/>
          <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDec'>
        Sed ut perspiciatis unde omnis iste natus error 
        sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore 
        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </div>
  )
}
