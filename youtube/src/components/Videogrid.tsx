import { Videocard } from "./Videocard"

const VIDEOS=[{title:"Rjbalaji and yogi babu tamil commentry",
author:"starsports Tamil",
views:"4 lakhs",
time:"4 hours ago",
image:"image1.png"},{title:"Rjbalaji and yogi babu tamil commentry",
author:"starsports Tamil",
views:"4 lakhs",
time:"4 hours ago",
image:"image1.png"},{title:"Rjbalaji and yogi babu tamil commentry",
author:"starsports Tamil",
views:"4 lakhs",
time:"4 hours ago",
image:"image1.png"}]
 export  const  Videogrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=><div>
            <Videocard 
            title={video.title}
            author={video.author}
            views={video.views}
            time={video.time}
            image={video.image}> </Videocard> </div>)}
    </div>

 }