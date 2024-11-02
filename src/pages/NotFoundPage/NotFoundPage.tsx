import s from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <>
            <div className={s.error404wrap}>
                <h1 data-t="404" className={s.h1}>404</h1>
            </div>
        </>
    );
}
 
export default NotFoundPage;