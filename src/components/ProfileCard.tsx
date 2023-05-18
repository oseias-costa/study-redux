import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export default function ProfileCard() {
    const userSlice = useSelector((state: RootState) => state.user)

  return (
    <div>
        <span>{userSlice.id}</span>
        <span>{userSlice.username}</span>
        <span>{userSlice.email}</span>
    </div>
  )
}
