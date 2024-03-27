import "./TodoItem.css"
import { memo } from "react"

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

    const onChangeChecbox = () => {
        onUpdate(id)
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }
    return (
        <div className="TodeItem">
            <input
                onChange={onChangeChecbox}
                readOnly
                checked={isDone}
                type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )


}
// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (preProps, nextProps) => {
//     //반환값에 따라 , Props가 바뀌었는지 안바뀌었는지 판단
//     // T => Props 바뀌지않음 >>> 리렌더링 x
//     // F => Props 바뀜 >>> 리렌더링 o

//     if (preProps.id !== nextProps.id) return false;
//     if (preProps.isDone !== nextProps.isDone) return false;
//     if (preProps.content !== nextProps.content) return false;
//     if (preProps.date !== nextProps.date) return false;

//     return true
// });

export default memo(TodoItem)