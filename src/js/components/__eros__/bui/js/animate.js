/**
 * 动画常用的方法
 */
var animation = weex.requireModule('animation');

var common = {
    ref: '',
    init: function (id) {
        this.ref = id;
        return this;
    },
    "left": function (x) {
        console.log(this.ref);
        var transform = 'translate('+x+', 0)' || 'translate(0, 0)';
        animation.transition(this.ref, {
            styles: {
                transform: transform,
                transformOrigin: 'center center'
            },
            duration: 800,
            timingFunction: 'ease',
            delay: 0
        }, function () {
            console.log(x);
        });
        return this;

    },
    right: function (x) {
        var rrr = this.ref;
        rrr = '8888'
        console.log(rrr);
        var transform = 'translate('+x+', 0)' || 'translate(0, 0)';
        animation.transition(this.ref, {
            styles: {
                transform: transform,
                transformOrigin: 'center center'
            },
            duration: 800,
            timingFunction: 'ease',
            delay: 0
        }, function () {
            console.log(x);
        });
        return this;
    }


}

module.exports = common;