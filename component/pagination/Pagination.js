import css from './Pagination.module.css';
import Image from 'next/image';
import NextIcon from "../../Assets/Icons/next_icon.png"


function Pagination({ arrayOfPages, currentPage, handleOnClick }) 
{
    return (
        <div className={css.pagination_block}>

            {
                currentPage > 1 ?
                    <div className={css.prev_page} onClick={() => 
                        handleOnClick(currentPage,-1)}>
                        <div className={css.prev_icon}>
                            <Image src={NextIcon} alt="prev-page" className={css.icon}/>
                        </div>
                    </div>
                    : ''
            }
            {
                arrayOfPages.map((page) =>
                    <div className={page === currentPage ? css.active_page 
                        : css.inactive_page} key={page}
                        onClick={() => handleOnClick(page,0)}>
                        <div className={css.pageNumber}>{page}</div>
                    </div>
                )
            }
            { currentPage !== arrayOfPages.length ?
            <div className={css.next_page} onClick={() => handleOnClick(currentPage, 1)}>
                <div className={css.next_icon}>
                    <Image src={NextIcon} alt="next-page" className={css.icon} />
                </div>
            </div>
            : ''
            }
        </div>
    )
}
export default Pagination;