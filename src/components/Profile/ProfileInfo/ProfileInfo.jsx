import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=82fcfaa1f2415501fb459a91e7d0559622ff2c4a-5424921-images-thumbs&n=13" />
            </div>
            <div className={s.item}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;