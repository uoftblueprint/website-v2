import Banner from "@/components/Banner/Banner";
import TeamCard from "@/team-card/TeamCard";
import { Container, Divider, Flex } from "@mantine/core";
import { getProfilesGroupedByTeam } from "@/lib/firebase/firestore";
import { getProfilePicture } from "@/lib/firebase/storage";

export default async function TeamPage() {
  // may be a good idea to type the struct we retrieve from firestore
  const profiles = await getProfilesGroupedByTeam();
  // populate profile pictures with cloud storage urls
  await Promise.all(Object.keys(profiles).map(async (team) => {
    await Promise.all(profiles[team].map(async (profile) => {
      const picture = await getProfilePicture(profile.profileImagePath);
      profile.profileImage = picture; // Update the profile object directly
    }));
  }));

  return (
    <div className="teams">
      <Banner
        title={"Meet our Team"}
        text={
          "We're aiming to change our surrounding community, one Blueprint at a time! Meet the 2023-2024 project teams!"
        }
      />
      <Flex
        justify={"center"}
        align={"center"}
        direction="column"
        w="100%"
        pos={"relative"}
      >
        {
          Object.keys(profiles).map((team) => {
            return (
              <Container key={team} className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
                <TeamCard title={team} members={profiles[team]} />
              </Container>
            );
          })
        }
        {/* <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Center for Dreams" team_members={members_cfd} />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard
            title="Toronto Community Employment Services"
            team_members={members_tces}
          />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard
            title="Toronto Foundation For Student Success"
            team_members={members_tfss}
          />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Internal" team_members={members_int} />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Foodshare" team_members={members_fs} />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Administration Team" team_members={members_at} />
        </Container> */}
      </Flex>
    </div>
  );
}
