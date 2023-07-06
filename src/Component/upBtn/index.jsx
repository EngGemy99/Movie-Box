import './style.css'
const UpBtn = () => {

    const up = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    // window.addEventListener('scroll', e => {
    //     const Btn = document.querySelector('.upBtn');
    //     if (window.scrollY > 150) {
    //         Btn.classList.add('unset');
    //     } else {
    //         Btn.classList.remove('unset');
    //     }
    // })

    return (
        <div className='upBtn' onClick={up}>
            <i className="fas fa-arrow-up"></i>
        </div>
    );
}

export default UpBtn;