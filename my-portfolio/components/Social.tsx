import Link from "next/link";
import {FaGithub,FaLinkedinIn,FaTwitter} from "react-icons/fa"

const socials=[
    {icon:<FaGithub/>,path:''},
    {icon:<FaLinkedinIn/>,path:''},
    {icon:<FaTwitter/>,path:''},
]
const Social=({containerStyles,iconsStyles}:{containerStyles:any,iconsStyles:any})=>{
    return<div className={containerStyles}>
        {
            socials.map((item,index)=>{
                return(
                    <Link key={index} href={item.path} className={iconsStyles}>
                    {item.icon}
                    </Link>
                )
            })
        }
    </div>
}

export default Social;