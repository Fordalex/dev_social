import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <hr class='my-2' />
          {profile.experience.length > 0 ? (
            <Experience experience={profile.experience} />
          ) : (
            <p>No experiences have been added...</p>
          )}
          <hr class='my-2' />
          {profile.education.length > 0 ? (
              <Education education={profile.education} />
          ) : (
            <p>No education has been added...</p>
          )}
        
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some information</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
      <hr class='my-2' />
      <div class='my-2'>
        <a className='btn btn-danger' onClick={() => deleteAccount()} href="/">
          <i className='fas fa-user-minus'></i> Delete My Account
        </a>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { deleteAccount, getCurrentProfile })(
  Dashboard
);
