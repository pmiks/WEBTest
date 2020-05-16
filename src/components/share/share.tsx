import React from 'react'
import { Link } from 'react-router-dom';

import {PATH_TO_ICON_IMAGES} from '../../Global'

import logofb from '../../assets/images/iconsn/is_fb_124.png'
import logoviber from '../../assets/images/iconsn/ir_viber_124.png'
import logovk from '../../assets/images/iconsn/ir_vk_124.png'
import logowhatsapp from '../../assets/images/iconsn/ir_whatsapp_124.png'
import logotelegram from '../../assets/images/iconsn/ir_telegram_124.png'
import logook from '../../assets/images/iconsn/ir_ok_124.png'

type SharePropsType={
  url:string
  title:string
  img:string
  size?:string

}

const Share:React.FC<SharePropsType>=({url,title,img,size="30px"})=>{
    let linksVK=`https://vk.com/share.php?url=${encodeURI(url)}&title=${encodeURI(title)}`//&img=${encodeURI(img)}
    let linksFB=`https://www.facebook.com/sharer.php?u=${encodeURI(url)}&title=${encodeURI(title)}&img=${encodeURI(img)}`
    let linksWA=`https://api.whatsapp.com/send?text=${encodeURI(title+" | "+url)}`
    let linksTelegram=`https://telegram.me/share/url?url=${encodeURI(url)}&text=${encodeURI(title)}`
    let linksViber=`viber://forward?text=${encodeURI(title+" | "+url)}`
    let linksOK=`https://connect.ok.ru/offer?url=${encodeURI(url)}&title=${encodeURI(title)}`

    return <div>
        <ShareItem linkurl={linksVK} icon={logovk} size={size} title="Поделиться ВКонтакте"/>
        <ShareItem linkurl={linksFB} icon={logofb} size={size} title="Поделиться Facebook"/>
        <ShareItem linkurl={linksWA} icon={logowhatsapp} size={size} title="Поделиться WhatsApp"/>
        <ShareItem linkurl={linksTelegram} icon={logotelegram} size={size} title="Поделиться Telegram"/>
        <ShareItem linkurl={linksViber} icon={logoviber} size={size} title="Поделиться Viber"/>
        <ShareItem linkurl={linksOK} icon={logook} size={size} title="Поделиться Однокласники"/>
    </div>
}

type PropsType={
  linkurl:string
  icon:any
  param?:string
  size?:string
  title?:string
}

const ShareItem:React.FC<PropsType>=({linkurl,icon,param,size,title=""})=>
{

  return <> <a href={linkurl} target="_blank"><img height={size} width={size} src={icon} title={title}/></a></>
}

export default Share;
