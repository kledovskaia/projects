type TNote = {
  __typename: "Note"
  author: TUser
  content: string
  createdAt: string
  favoriteCount: number
  id: string
  favoritedBy?: TUser[]
}

type TUser = {
  __typename: "User"
  avatar: string
  id: string
  username: string
}
