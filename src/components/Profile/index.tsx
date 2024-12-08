import { useEffect, useState } from "react";
import { githubAPI } from "../../utils/api";
import {
  NameContainer,
  ProfileContainer,
  SocialsContainer,
  TextContainer,
} from "./styles";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";

interface userDataProps {
  name: string;
  avatar: string;
  bio: string;
  githubLink: string;
  company: string;
  followers: number;
  username: string;
}

export function Profile() {
  const [userData, setUserData] = useState<userDataProps>({
    name: "",
    avatar: "",
    bio: "",
    githubLink: "",
    username: "",
    company: "",
    followers: 0,
  });

  async function fetchUserData() {
    const response = await githubAPI.get("users/allanLandin");
    const data = response.data;

    setUserData({
      name: data.name,
      avatar: data.avatar_url,
      bio: data.bio,
      githubLink: data.html_url,
      company: data.company,
      followers: data.followers,
      username: data.login,
    });
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <ProfileContainer>
      <img src={userData.avatar} />
      <TextContainer>
        <NameContainer>
          <h3>{userData.name}</h3>
          <a href={userData.githubLink}>
            Github <ArrowSquareOut />
          </a>
        </NameContainer>
        <p>{userData.bio}</p>
        <SocialsContainer>
          <span>
            <GithubLogo /> {userData.username}
          </span>
          <span>
            <Buildings /> {userData.company || "Empresa não informada"}
          </span>
          <span>
            <Users /> {userData.followers}
          </span>
        </SocialsContainer>
      </TextContainer>
    </ProfileContainer>
  );
}
