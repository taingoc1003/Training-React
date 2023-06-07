import { useRef, useState } from 'react';
import styles from './TodoList.module.scss';
import className from 'classnames/bind';
import _ from 'lodash';

const cx = className.bind(styles);

const TodoList = () => {
  const [listTodo, setListTodo] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [itemEdit, setItemEdit] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const ref = useRef(null);

  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const nowDate =
    `${date < 10 ? `0${date}` : `${date}`}` +
    '/' +
    `${month < 10 ? `0${month}` : `${month}`}` +
    '/' +
    `${year}`;
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const nowDay = weekday[newDate.getDay()];

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleAddTodo = () => {
    let idItem = randomIntFromInterval(0, 9999);
    let cloneListTodo = _.cloneDeep(listTodo);
    if (textInput) {
      let todoItem = {
        id: idItem,
        title: textInput,
      };
      cloneListTodo.push(todoItem);
      setListTodo(cloneListTodo);
      setTextInput('');
      ref.current.focus();
    }
  };

  const handleEnter = (event) => {
    let idItem = randomIntFromInterval(0, 9999);
    let cloneListTodo = _.cloneDeep(listTodo);
    if (event.key === 'Enter') {
      if (textInput) {
        let todoItem = {
          id: idItem,
          title: textInput,
        };
        cloneListTodo.push(todoItem);
        setListTodo(cloneListTodo);
        setTextInput('');
        ref.current.focus();
      }
    }
  };

  const handleEditBtn = (item) => {
    setItemEdit(item);
    setIsEditing(true);
    setShowEdit(true);
  };

  const handleDeleteTodo = (index) => {
    let cloneListTodo = _.cloneDeep(listTodo);
    cloneListTodo.splice(index, 1);
    setListTodo(cloneListTodo);
  };

  const handleOnChangeEdit = (event) => {
    let cloneItemEdit = _.cloneDeep(itemEdit);
    cloneItemEdit.title = event.target.value;
    setItemEdit(cloneItemEdit);
  };

  const handleEditTodo = (todo) => {
    ref.current.focus();
    let cloneListTodo = _.cloneDeep(listTodo);
    let indexEditTodo = cloneListTodo.findIndex((item) => item.id === todo.id);
    cloneListTodo[indexEditTodo] = itemEdit;
    setListTodo(cloneListTodo);
    setShowEdit(false);
    setIsEditing(false);
  };

  const handleEnterEdit = (event, todo) => {
    ref.current.focus();
    let cloneListTodo = _.cloneDeep(listTodo);
    if (event.key === 'Enter') {
      let indexEditTodo = cloneListTodo.findIndex(
        (item) => item.id === todo.id,
      );
      cloneListTodo[indexEditTodo] = itemEdit;
      setListTodo(cloneListTodo);
      setShowEdit(false);
      setIsEditing(false);
    }
  };

  return (
    <>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <div className={cx('header-day')}>{nowDay}</div>
          <div className={cx('header-calendar')}>{nowDate}</div>
        </div>
        <div className={cx('content')}>
          <div className={cx('todo-input')}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add todo...."
                value={textInput}
                ref={ref}
                onChange={(event) => setTextInput(event.target.value)}
                onKeyDown={(event) => {
                  handleEnter(event);
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleAddTodo()}
                >
                  Add Todo
                </button>
              </div>
            </div>
          </div>
          <div className={cx('todo-list')}>
            <ul>
              {listTodo &&
                listTodo.length > 0 &&
                listTodo.map((item, index) => {
                  return (
                    <>
                      <li key={item.id} className={cx('list-item')}>
                        <div className={cx('list-item-text')}>
                          <input
                            type="checkbox"
                            className={cx('list-item-checkbox')}
                          />
                          {isEditing ? (
                            <>
                              {itemEdit.id === item.id ? (
                                <div className={cx('edit-item', 'input-group')}>
                                  <input
                                    type="text"
                                    className={cx('edit-input', 'form-control')}
                                    value={itemEdit.title}
                                    ref={ref}
                                    onChange={(event) =>
                                      handleOnChangeEdit(event)
                                    }
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
                              ) : (
                                <span>{item.title}</span>
                              )}
                            </>
                          ) : (
                            <span>{item.title}</span>
                          )}
                        </div>
                        {showEdit ? (
                          <>
                            {itemEdit.id === item.id ? (
                              ''
                            ) : (
                              <div className={cx('list-item-btn')}>
                                <button
                                  className="btn btn-warning"
                                  onClick={() => handleEditBtn(item)}
                                >
                                  <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDeleteTodo(index)}
                                >
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className={cx('list-item-btn')}>
                            <button
                              className="btn btn-warning"
                              onClick={() => handleEditBtn(item)}
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDeleteTodo(index)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        )}
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
