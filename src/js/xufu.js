class xufu {
    constructor() {
        this.lin = $('.lin');
    }
    init() {
        $(window).on('scroll', function () {
            let $top = $(window).scrollTop();
            if ($top >= 350) {
                $(this.lin).stop(true).animate(
                    { top: 0 })
            } else {
                $(this.lin).stop(true).animate(
                    { top: -50 }
                )
            }
        })
    }
}