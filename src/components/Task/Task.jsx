import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions";
import PropTypes from "prop-types";
import styles from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  if (!task) return null;

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={styles.text}>{task.text}</p>
      <button type="button" className={styles.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
