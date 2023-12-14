export function Icon(props) {
    return (
        <div className="flex flex-col gap-5 justify-items-center items-center">
            <img> {props.img}</img>
           <div>
            {props.title}
           </div>
        </div>
    )
}
