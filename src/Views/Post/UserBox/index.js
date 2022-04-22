import SuiBox from "../../../Components/SuiBox";
import SuiAvatar from "../../../Components/SuiAvatar";

import "./styles.scss";

const UserBox = ({ data }) => {
  return (
    <SuiBox id="user-box" bgColor="white" shadow="xs" borderRadius="lg">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column align-self-center">
          <p>{data.name}</p>
          <span>@{data.username}</span>
        </div>
        <SuiAvatar
          id="user-avatar"
          name={data.name ? data.name : "D"}
          variant="rounded"
          bgColor="error"
          size="lg"
          shadow="md"
        />
      </div>
    </SuiBox>
  );
};

export default UserBox;
