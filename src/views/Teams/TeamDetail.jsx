import { Link, useParams } from "react-router-dom";

function TeamDetail(props) {
  const { teamId } = props.match.params;
  return (
    <>
      <p>
        <h4>{props.label}</h4>
        <Link to="/teams" className="App-link">
          Back to Teams
        </Link>
      </p>
      <p>Team details: {teamId}</p>
    </>
  );
}

export default TeamDetail;
