const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

//To set the experience dynamically
window.onload = function() {
  
	dt1 = new Date(2021,8,25);
	dt2 = new Date();
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
	diff /= (60 * 60 * 24 * 7 * 4);
	document.getElementById('experience').innerHTML = Math.abs(Math.round(diff));
    

};

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //resmove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })


}

PageTransitions();

function SendMail() {
    alert('Under Construction!!');
    Email.send({
        Host: "smtp.gmail.com",
        Username : "pavanramesh4561@gmail.com",
        Password : "Pavan@4561",
        To : 'r.pavann411@gmail.com',
        From : "pavanramesh4561 @gmail.com",
        Subject : "Helllo World",
        Body : "This is a test email",
        }).then(
            message => alert("mail sent successfully")
        );
}

