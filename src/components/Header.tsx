// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useSelector } from "react-redux";

export const Header = () => {

  const user = useSelector((state) => state.user);
  console.log(user)

  return (
    <header>
      {
        user ? (<><h1>Redux Toolkit Example</h1><ul>
          <li>Name: {user?.name}</li>
          <li>Email: {user?.email}</li>
          <li>Username: {user?.username}</li>
        </ul></>) : (<div>Loading</div>)
      }
    </header>
  )
}