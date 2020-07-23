import AOS from 'aos';
import 'aos/dist/aos.css';

function aos() {
    AOS.init({
        once: true,
    })

    console.log('aos')
}

export default aos