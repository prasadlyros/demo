import "./pagination.css"

function BlogPageWithAmii(prop){
    const{character, gameSeries, image} = prop.data
    return(
        <>
        {console.log(character)}
            {
                <div className="container">
                    <div className="item">
                    <h1>{character}</h1>
                    <img  src={image} ></img>
                    <p>Series : {gameSeries}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default BlogPageWithAmii