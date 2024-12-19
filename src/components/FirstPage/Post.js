const Post = ({data}) => {
    return ( 
        
        <a href={"/about/"+data.id}>{ data.text }
          { data.id }
        </a>
        
     );
}
 
export default Post;