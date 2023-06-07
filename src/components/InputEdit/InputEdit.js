import styles from './InputEdit.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);

const InputEdit = (props) => {
  const {
    itemEdit,
    item,
    handleOnChangeEdit,
    handleEnterEdit,
    handleEditTodo,
  } = props;
  return (
    <div className={cx('edit-item', 'input-group')}>
      <input
        type="text"
        className={cx('edit-input', 'form-control')}
        value={itemEdit.title}
        onChange={(event) => handleOnChangeEdit(event)}
        onKeyDown={(event) => {
          handleEnterEdit(event, item);
        }}
      />
      <div className="input-group-append">
        <button
          className={cx('edit-btn', 'btn')}
          type="button"
          onClick={() => handleEditTodo(item)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default InputEdit;
