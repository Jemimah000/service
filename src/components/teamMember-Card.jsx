import React from "react";

const TeamMemeberCard = ({ member }) => {
    return(
        <div className="member">
            <h3>Name : {member.name}</h3>
            <p>Job Title : {member.title}</p>
            <br />
        </div>
    )
}
export default TeamMemeberCard;