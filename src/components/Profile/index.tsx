import {
  NameContainer,
  ProfileContainer,
  SocialsContainer,
  TextContainer,
} from "./styles";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="/src/assets/avatar.png" />
      <TextContainer>
        <NameContainer>
          <h3>Cameron Williamson</h3>
          <a>
            Github <ArrowSquareOut />
          </a>
        </NameContainer>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <SocialsContainer>
          <a>
            <GithubLogo /> cameronwll
          </a>
          <a>
            <Buildings /> cameronwll
          </a>
          <a>
            <Users /> cameronwll
          </a>
        </SocialsContainer>
      </TextContainer>
    </ProfileContainer>
  );
}
