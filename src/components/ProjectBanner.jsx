
export function ProjectBanner ( props ) {
    return (
        <div className="w-full h-96 border rounded-2xl m-3  ">
           <img className="w-full h-full object-cover rounded-2xl" src={props.url} alt="" />
        </div>
    )
}