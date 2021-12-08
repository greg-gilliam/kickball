import { Link, useParams } from "react-router-dom";

function TeamDetail(props) {
  const { teamId } = props.match.params;
  return (
    <>
      <h4>{props.label}</h4>
      <p>
        <Link to="/teams" className="App-link">
          Back to Teams
        </Link>
      </p>
      <p>Team details: {teamId}</p>
    </>
  );
}

export default TeamDetail;
