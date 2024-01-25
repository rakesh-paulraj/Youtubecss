  export function Videocard(props:any){
    return <div>
        <img src={props.image}></img>
        <div className="grid grid-cols-12">
            <div className="col-span-1">
            <img src={props.image} className="rounded-full w-20 h-20"></img>
            </div>
            <div className="col-span-11 pl-1">
                <div>{props.title}</div>
                <div className="col-span-11 pl-1 text-gray-600 text-base">
               {props.author}
            </div>
            <div className="col-span-8 pl-1 text-gray-600 text-base">
               {props.views}| {props.time}
            </div>
                
            </div>
            
           
        </div>
    </div>
 }