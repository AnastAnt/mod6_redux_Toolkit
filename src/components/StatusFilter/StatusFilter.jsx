import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "../../redux/constants";
import styles from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.statusFilter);
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={styles.statusFilter}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
