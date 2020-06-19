import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import DashboardActions from "./DashboardActions";
import ProfileItem from "../../components/Profile/ProfileItem";
import { Link } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";
const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1>Dashboard </h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <Fragment>
            <Button>
              <Link to='/option'>FlashCard</Link>
            </Button>
            <Button>
              <Link to='/quiz'>Take Quiz</Link>
            </Button>

            <DashboardActions />
          </Fragment>
          <Divider section />
          <ProfileItem profile={profile} />
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <p>You have not setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
