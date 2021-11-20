import { LogoutOutlined } from "@mui/icons-material"
import { useContext } from "react"
import { ProfileForm } from "../../components/forms/ProfileForm/ProfileForm"
import { AuthContext } from "../../context/Auth"
import {
  Age,
  Header,
  Info,
  Logout,
  Name,
  Photo,
  PhotoContainer,
  ProfileContainer,
  UploadPhoto,
} from "./styles"

export const Profile = () => {
  const { data } = useContext(AuthContext)

  return (
    <ProfileContainer>
      <Header>
        <PhotoContainer>
          <Photo src={data?.imgUrl || "/images/default.jpg"} alt="" />
          <UploadPhoto>{data?.imgUrl ? "Change" : "Upload"}</UploadPhoto>
        </PhotoContainer>
        <Info>
          <Name>{data?.name}</Name>
          <Age></Age>
        </Info>
        <Logout>
          <LogoutOutlined />
        </Logout>
      </Header>
      <ProfileForm />
    </ProfileContainer>
  )
}
