const { default: Link } = require("next/link")

async function getPostsData(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  await new Promise((resolve) => setTimeout( resolve,3000))
  
    return res.json()
}

async function getPostsUser(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

  await new Promise((resolve) => setTimeout( resolve,3000))
  
    return res.json()
}

 const posts = async ()=> {
    const posts = await getPostsData()
    // const [posts, users]= await promise.all([getPostsData()])

  return (
    <div>
        <h1 className="text-4xl">Posts</h1>
        <ul className="flex flex-col gap-5">
            {
                posts.map(post=>(
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        <li className="bg-gray-100 p-5 cursor-pointer">
                            <h4 className="text-x1 font-bold">{post.title}</h4>
                            <p>{post.body}</p>
                        </li>
                    </Link>
                ))
            }
        </ul>
    </div>
  )

}

export default posts