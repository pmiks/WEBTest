import React from 'react';
import Preloader from '../../common/preloader';
import ProfileStatus from './profilestatus';
import p from './Profile.module.css';

const Profile=(props)=>{
  debugger;
//   {props.isFetchingProfile||props.profile?<Preloader/> : null}
   if (props.isFetchingProfile||!props.profile) return <Preloader/>;
   return <div className={p.ProfileForm}>Страница профиля
     <div><img alt={"Users Foto"} src={props.profile.photos.large}/></div>
      {props.profile.aboutMe}
     <div><ProfileStatus status={props.status} updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator}/></div>
     <div>{props.profile.contacts.facebook} {props.profile.contacts.website} {props.profile.contacts.vk}
     {props.profile.contacts.twitter} {props.profile.contacts.instagram} {props.profile.contacts.youtube}
     {props.profile.contacts.github} {props.profile.contacts.mainlink}</div>
     <div>{props.profile.lookingForAJob?props.profile.lookingForAJobDescription:null}</div>
     <div>{props.profile.fullName}</div>
     <div>{props.profile.userId}</div>
     </div>;
  }

export default Profile
