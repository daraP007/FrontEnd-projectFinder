import style from '../styles/Components/CommentCard.module.css';
function CommentCard({comment}){
    return (
        <div className= {style.container}>
            <label className={style.label}>{comment.author}</label>
            <p className = {style.text}>{comment.description}</p>
            <button className = {style.replyButton}>reply</button>
        </div>
    );

}

export default CommentCard;