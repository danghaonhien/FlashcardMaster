import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
const ProfileItem = ({
  profile: {
    school,
    location,
    bio,
    user: { name },
  },
}) => (
  <div className='profile-top bg-primary p-2'>
    <h1 className='large'>{name}</h1>
    <p className='lead'>{school && <span> at {school}</span>}</p>
    <p>{location && <span>{location}</span>}</p>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>{name.trim().split(" ")[0]}s Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </Fragment>
    )}
  </div>
);

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
