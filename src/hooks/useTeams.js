import { shallowEqual, useSelector } from 'react-redux';

function useTeams() {
  const teamState = useSelector((store) => store.teams, shallowEqual);

  return {
    teamState
  };
}

export default useTeams;
