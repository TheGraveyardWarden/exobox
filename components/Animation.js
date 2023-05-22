class Animation {

    static cache = {};
    static loginBtnDirection = 'left';
    static move = true;
    static faqCache = {};
    static faqStatus = {};

    static FadeOut(elementName) {
        let el = document.getElementsByName(elementName)[0];
        el.classList.add('fade_out');
    }

    static FadeIn(elementName) {
        let el = document.getElementsByName(elementName)[0];
        el.classList.remove('fade_out');
    }

    static FadeOutR(elementName) {
        let el = document.getElementsByName(elementName)[0];
        el.classList.add('fade_out_r');
    }

    static FadeInR(elementName) {
        let el = document.getElementsByName(elementName)[0];
        el.classList.remove('fade_out_r');
    }

    static GoUp(elementName, pixels, pastPixel = 0) {
        let el = document.getElementsByName(elementName)[0];
        this.cache[elementName] = pastPixel;
        if(pixels > 0)
            el.style.marginTop = '-' + pixels + 'px';
        else
            el.style.marginTop = (pixels*(-1)).toString() + 'px';
    }

    static RemoveUp(elementName) {
        let el = document.getElementsByName(elementName)[0];
        el.style.marginTop = this.cache[elementName] + 'px';
    }

    static Disappear(elementName) {
        let el = document.getElementsByName(elementName)[0];
        el.classList.add('hide');
    }

    static Appear(elementName) {
        let el = document.getElementsByName(elementName)[0];
        el.classList.remove('hide');
    }

    static ChStatus(elementName, status, translation = 20, duration = 400, redBorderIndex = 1, redColorIndex = 1) {
        let el = document.getElementsByName(elementName)[0];
        el.style.transform = 'translate(-' + translation.toString() + 'px, 0)';
        el.childNodes[redBorderIndex].classList.add('transition');
        el.childNodes[redBorderIndex].classList.add(`${status}_background`);
        el.childNodes[redBorderIndex].childNodes[0].childNodes[redColorIndex].classList.add('transition');
        el.childNodes[redBorderIndex].childNodes[0].childNodes[redColorIndex].classList.add(`${status}_color`);
        setTimeout(() => {
            el.style.transform = 'translate(' + translation.toString() + 'px, 0)';
        }, duration-10)
        setTimeout(() => {
            el.style.transform = 'translate(0, 0)';
            el.childNodes[redBorderIndex].classList.remove(`${status}_background`);
            el.childNodes[redBorderIndex].childNodes[0].childNodes[redColorIndex].classList.remove(`${status}_color`);
        }, (duration*2)-10)
    }

    static LoginBtnWrong(elementName, setShowWrong, duration = 200) {
        let el = document.getElementsByName(elementName)[0];
        if(!this.move) {
            return;
        };
        setShowWrong(true);
        let n = this.loginBtnDirection === 'right' ? 1 : -1;
        el.classList.add('transition200');
        el.classList.add('login_btn_wrong_width');
        el.style.transform = 'translate(' + (140*n).toString() + 'px)';
        setTimeout(() => {
            el.style.transform = 'translate(' + (120*n).toString() + 'px)';
        }, duration-10)
        setTimeout(() => {
            el.style.transform = 'translate(' + (130*n).toString() + 'px)';
        }, duration*2-10)
        this.loginBtnDirection = this.loginBtnDirection === 'right' ? 'left' : 'right';
    }

    static RemoveLoginBtnWrong(elementName, setShowWrong) {
        setShowWrong(false);
        let el = document.getElementsByName(elementName)[0];
        el.classList.remove('transition200');
        el.classList.remove('login_btn_wrong_width');
        el.style.transform = 'translate(0, 0)';
    }

    static MoveToHomePage(fadeOutes, loginBtnName, loginBtnUp, duration = 400) {
        let el = document.getElementsByName(loginBtnName)[0];
        fadeOutes.forEach(i => {this.FadeOut(i)});
        el.innerHTML = '<div name="login_btn2" class="column_flex_con default_btn full_width transition green_login_btn"><p>شما با موفقیت وارد شدید</p></div>';
        this.GoUp(loginBtnName, loginBtnUp, 25);
        this.Disappear('header');
        this.Appear('move_to_home_page');
        setTimeout(() => this.FadeInR('move_to_home_page'), 100);
        this.Disappear('login_small_links');
        this.Appear('wait');
        document.querySelector('.loading_img').classList.remove('hide');
        setTimeout(() => {
            window.location.pathname = '/';
        }, 3000)
    }

    static Translate(elementName, x, y) {
        let el = document.getElementsByName(elementName)[0];
        el.style.transform = `translate(${x}px, ${y}px)`;
    }

    static RemoveTranslate(elementName) {
        let el = document.getElementsByName(elementName)[0];
        el.style.transform = `translate(0, 0)`;
    }

    static FaqOpen(elementName, i, top) {
        let el = document.getElementsByClassName(elementName)[i];
        let els = document.querySelectorAll(`.${elementName}`);
        let faq_descs = document.querySelectorAll('.faq_description');
        if(!(this.faqStatus[elementName])) {
            // for loop through faqstatus and hide others..
            els.forEach((e, _i) => {
                if(_i !== i) {
                    e.classList.add('no_vis');
                } else {
                    e.classList.add('border_r_45');
                }
            })
            this.faqCache[elementName] = top;
            this.faqStatus[elementName] = true;
            faq_descs[i].style.transition = 'all 0.4s';
            faq_descs[i].style.transitionDelay = '0.2s';
            faq_descs[i].classList.remove('no_vis');
            el.style.top = '153px';
            el.style.zIndex = '99';
            setTimeout(() => {
                el.style.height = '500px';
            }, 100);
        } else {
            // for loop through faqstatus and show others..
            els.forEach((e, _i) => {
                if(_i !== i) {
                    e.classList.remove('no_vis');
                } else {
                    e.classList.remove('border_r_45');
                }
            })
            this.faqStatus[elementName] = false;
            faq_descs[i].style.transition = 'all 0.2s';
            faq_descs[i].style.transitionDelay = 'none';
            faq_descs[i].classList.add('no_vis');
            el.style.height = '79.45px';
            el.style.zIndex = '1';
            setTimeout(() => {
                el.style.top = `${this.faqCache[elementName]}px`;
            }, 100);
        }
    }

}

export default Animation;