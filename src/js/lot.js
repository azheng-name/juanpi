class louti {
    constructor() {
        this.ul = $('.uu');
        this.li = $('.uu li').not('.top');
        this.jin = $('.jin-0');
        this.tt = $('.uu .top');
       
    }


    init() {

        let _this = this;
        let $top = $(window).scrollTop();
        if ($top >= 350) {
            _this.ul.show();

        } else {
            _this.ul.hide();

        }

        $(window).on('scroll', function () {
            let $top = $(this).scrollTop();
            if ($top >= 350) {
                _this.ul.show();

            } else {
                _this.ul.hide();
            }

            _this.jin.each(function (index, element) {
                let $inj = _this.jin.eq(index).offset().top + $(element).height() / 2;
                if ($inj > $top) {
                    _this.li.removeClass('li-1');
                    _this.li.eq(index).addClass('li-1');
                    return false
                }
            })

        });
        this.li.on('click', function () {
            $(this).addClass('li-1').siblings('li').removeClass('li-1');
            let $ll = _this.jin.eq($(this).index()).offset().top-60;
            $('html,body').animate({
                scrollTop: $ll,

            })
        });
        this.tt.on('click', function () {
            $('html,body').animate({
                scrollTop: 0,

            })
        })
    }
}