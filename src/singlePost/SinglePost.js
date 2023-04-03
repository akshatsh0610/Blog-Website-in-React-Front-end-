import './SinglePost.css'
import '../images/Belgium_GettyImages-157677229.webp'
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img className='singlePostImg' src={require('../images/Belgium_GettyImages-157677229.webp')} alt=''></img>
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit
                <div className='singlePostEdit'>
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author : <b>Jane</b></span>
                <span className='singlePostDate'> 1 hour ago</span>
            </div>
            <p className='singlePostDec'>
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>
    </div>
  )
}
