import UserPhoto from '../../img/utkir.JPG';
import { UserBox } from './User.styled';

const User = () => {
    return (
        <UserBox>
            <h4>Utkir Musurmankulov</h4>
            <img src={UserPhoto} alt="User photo" />
        </UserBox>
    )
}

export default User;