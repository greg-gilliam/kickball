import { useParams } from "react-router-dom";

function TeamDetail() {
  const { teamId } = useParams();
  console.log({ teamId });
  return <p>Team details: {teamId}</p>;
}

export default TeamDetail;
