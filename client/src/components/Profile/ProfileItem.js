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
}) => {
  return (
    <Card
      fluid
      color='green'
      header={name}
      meta={school}
      description={location}
      extra={bio}
    />
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
