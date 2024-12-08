//project-1
// imp! Navbar Active Script 
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav-link')

window.onscroll = () => {
    sections.forEach((sec) => {
       if (sec.id === 'hero-section' || sec.id === 'about-section' || sec.id === 'resume-section' || sec.id === 'services-section' || sec.id === 'contact-Us') {
            let top = window.scrollY
            let offset = sec.offsetTop
            let height = sec.offsetHeight
            let sectionId = sec.getAttribute('id')
            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    links.classList.remove('active')
                })
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active')
            }
        }
    })
}
// email js 
document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let params ={
        
    }
    emailjs.send("service_d1obced","template_uhbhjwr",params)
    .then(() => {
        document.querySelector('.thank-you-msg').style.display="block";
        document.getElementById('full_name').value=""
        document.getElementById('email_id').value=""
        mdocument.getElementById('message').value =""
        setTimeout(() => {
            document.querySelector('.thank-you-msg').style.display="none";


        },2500)

    })
})