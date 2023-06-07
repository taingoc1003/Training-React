import styles from './BtnEditDelete.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);

const BtnEditDelete = (props) => {
  const { item, index, handleEditBtn, handleDeleteTodo } = props;

  return (
    <>
      <div className={cx('list-item-btn')}>
        <button className="btn btn-warning" onClick={() => handleEditBtn(item)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteTodo(index)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default BtnEditDelete;
