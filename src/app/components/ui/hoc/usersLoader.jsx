import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCallsList } from "../../../store/calls";
import { getDataStatus } from "../../../store/regUser";
import { loadUsersList } from "../../../store/users";

const UsersLoader = ({ children }) => {
  const dataStatus = useSelector(getDataStatus());
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dataStatus) {
      dispatch(loadCallsList);
      dispatch(loadUsersList);
    }
  }, []);
  if (!dataStatus) return "Loading is UsersLoader";
  return children;
};

export default UsersLoader;
