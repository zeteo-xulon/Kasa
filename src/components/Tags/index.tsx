

export default function Tags(props: {tags: string[]}){

    return(
        <div className="lodging-tags-container">
        {
            props?.tags?.map((tag,index) => (
                <p key={"tag" + index } className="lodging-tag">{tag}</p>
            ))
        }
        </div>
    )
}