import './user.scss';
import SinglePage from '../../components/singlePage/SinglePage';
import { singleUser } from '../../data';

const User = () => {
  return (
      <div className='user'>
      <SinglePage {...singleUser} />
</div>
  )
}

export default User;
