import { Searchbar } from "./Searchbar"

export const Appbar =()=>{
    return<div className=" flex justify-between pt-1">
<div className="text-md inline-flex items-center pb-2">Youtube</div>
<div><Searchbar></Searchbar></div>
<div className="text-md inline-flex items-center pb-2"  >Sign in </div>

    </div>
}