let inp = document.querySelectorAll('.normal-input');
let op = document.querySelectorAll('.ms');
let str = document.querySelectorAll('.error');
let form = document.querySelector('#reg');
let greda = document.querySelector('.grade')
let cur = document.querySelectorAll('.cur2');
let cur1 = document.querySelector('.cur1');
let sub = document.querySelector('#reg');
let fn1 = true;
let fn2 = true;
let fn3 = true;
window.onload = function () {
    inp[0].focus();
}

inp[0].onfocus = function () {
    op[0].innerHTML = '请输入11位手机号';
    op[0].style.color = '#666'
}
inp[0].onblur = function () {
    let regis = /^1[3578]\d{9}$/;
    if (this.value !== '') {
        if (regis.test(this.value)) {
            op[0].innerHTML = '';
            str[0].style.display = 'block';
            str[0].style.backgroundPosition = '-40px -19px';
            fn1 = true;
        } else {
            op[0].innerHTML = '请输入正确的手机号码';
            op[0].style.color = 'red';
            str[0].style.display = 'block';
            str[0].style.backgroundPosition = '0 -19px';
            fn1 = false;
        }

    } else {
        op[0].innerHTML = '请输入手机号码';
        op[0].style.color = 'red';
        str[0].style.display = 'block';
        str[0].style.backgroundPosition = '0 -19px';
        fn1 = false;
    }
}
/********/
inp[1].onfocus = function () {
    op[1].innerHTML = '6-16个数字、字母或符号，字母区分大小写';
    op[1].style.color = '#666'
}
inp[1].oninput = function () {
    if (this.value.length >= 6 && this.value.length <= 16) {
        let r1 = /[0-9]+/g;
        let r2 = /[A-Z]+/g;
        let r3 = /[a-z]+/g;
        let r4 = /[\W\_]+/g;
        let r5 = 0;
        if (r1.test(this.value)) {
            r5++;
        }
        if (r2.test(this.value)) {
            r5++;
        }
        if (r3.test(this.value)) {
            r5++
        }
        if (r4.test(this.value)) {
            r5++
        }
        switch (r5) {
            case 1:
                cur[0].style.background = 'red';
                greda.style.display = 'block';
                op[1].style.display = 'none';
                cur1.innerHTML = '弱';
                cur1.style.color = 'red'
                str[1].style.display = 'block';
                str[1].style.backgroundPosition = '-40px -19px';
                cur[1].style.background = '';
                cur[2].style.background = '';
                fn2 = false;
                break;
            case 2:
            case 3:
                cur[1].style.background = 'orange';
                cur[0].style.background = 'orange';
                greda.style.display = 'block';
                str[1].style.backgroundPosition = '-40px -19px';
                op[1].style.display = 'none';
                cur1.innerHTML = '中';
                cur1.style.color = 'orange';
                str[1].style.display = 'block';
                cur[2].style.background = '';
                fn2 = true;
                break;
            case 4:
                cur[2].style.background = 'green';
                cur[1].style.background = 'green';
                cur[0].style.background = 'green';
                cur1.innerHTML = '强';
                cur1.style.color = 'green';
                str[1].style.backgroundPosition = '-40px -19px';
                greda.style.display = 'block';
                op[1].style.display = 'none';
                str[1].style.display = 'block';
                fn2 = true;
                break;
        }
    } else {

        str[1].style.display = 'block';
        str[1].style.backgroundPosition = '0 -19px';
        op[1].style.color = 'red';
        greda.style.display = 'none';
        op[1].innerHTML = '密码长度不符合规范';
        op[1].style.display = 'block';
        fn2 = false;
    }
};
inp[1].onblur = function () {
    if (this.value !== '') {
        if (this.value.length >= 6 && this.value.length <= 16) {
            str[1].style.display = 'block';
            str[1].style.backgroundPosition = '-40px -19px';
            fn2 = true;
        } else {
            op[1].innerHTML = '密码长度不符合规范';
            op[1].style.color = 'red';
            op[1].style.display = 'block';
            greda.style.display = 'none';
            str[1].style.display = 'block';
            str[1].style.backgroundPosition = '0 -19px';
            fn2 = false;
        }
    } else {
        op[1].innerHTML = '请输入密码';
        op[1].style.display = 'block';
        op[1].style.color = 'red';
        greda.style.display = 'none';
        str[1].style.display = 'block';
        str[1].style.backgroundPosition = '0 -19px';
        fn2 = false;
    }
}
/********/
inp[2].onfocus = function () {
    op[2].innerHTML = '请在次输入密码';
    op[2].style.color = '#666'
}
inp[2].onblur = function () {
    if (this.value !== '') {
        if (inp[1].value !== inp[2].value) {
            op[2].innerHTML = '两次输入密码不一致';
            op[2].style.display = 'block';
            op[2].style.color = 'red';
            greda.style.display = 'none';
            str[2].style.display = 'block';
            str[2].style.backgroundPosition = '0 -19px';
            fn2 = false;
        } else {
            str[2].style.display = 'block';
            str[2].style.backgroundPosition = '-40px -19px';
        }
    } else {
        op[2].innerHTML = '两次输入密码不一致';
        op[2].style.display = 'block';
        op[2].style.color = 'red';
        greda.style.display = 'none';
        str[2].style.display = 'block';
        str[2].style.backgroundPosition = '0 -19px';
        fn2 = false;
    }
};
sub.onsubmit = function () {
    if (inp[1].value === '') {
        str[1].style.display = 'block';
        str[1].style.backgroundPosition = '0 -19px';
        fn2 = false;
    }
    if (inp[0].value === '') {
        str[0].style.display = 'block';
        str[0].style.backgroundPosition = '0 -19px';
        fn1 = false;
    }
    if (!fn1 || !fn2) {
        return false
    }
}