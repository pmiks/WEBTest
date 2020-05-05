import React from 'react';
import avatarmale from '../assets/images/avatarmale.png';

const Avatar=({src,size})=>{
return <div>
<img width={size} alt={"User Foto"}
           src={src!=null?src:avatarmale}/>
</div>
}

export default Avatar;
