

const NewsletterBox = () => {

const onSubmitHandler = (e)=>{
    e.preventDefault();
}
  return (
    <div className="text-center">
        <p className="text-2xl  font-medium text-gray-800">Subscribe on our newsletter</p>
        <p className="text-gray-400 mt-3">Get daily news on upcoming offer from many suppliers all over the world</p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2  flex items-center gap-3 mx-auto my-6 border pl-3 rounded-md">
            <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none " required/>
            <button className="bg-blue-600 text-white text-xs px-10 py-4 rounded-md" type="submit">SUBSCRIBE</button>
        </form>
        
    </div>
  )
}

export default NewsletterBox