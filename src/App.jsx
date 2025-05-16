import React from "react";
import TeamMemeberCard from "./components/TeamMemberCard";

function App(){
  const TeamMembers = [
    {
      id : 1,
      name : "Jemimah",
      title : "Game development"
    },
    {
      id : 2,
      name : "saina",
      title : "Cardiologist"
    }
  ]
  return(
    <div className="teamMember-list">
      <div>
        <h1>Team Members</h1>
        {TeamMembers.map((member) => (
          <TeamMemberCard key = {member.id} member={member}/>
        ))}
      </div>
    </div>
  )
}
export default App;